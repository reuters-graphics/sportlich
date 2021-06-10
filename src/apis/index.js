import { get } from "../auth";
import { skeleton } from "../util";
import { Cache } from "../cache";
import jmespath from "jmespath";

const MULTIPLE_BATCH = 20; // Opta limits multiple to 20-per-request

class Sportlich {
  constructor(opts = {}) {
    // Parse common options
    this.skeleton = opts.skeleton;
    this.raw = opts.raw;
    this.filter = opts.filter;
    this.cache = opts.cache;
    this.nocache = opts.nocache;
    this.cmdline = opts.cmdline;
    this.locale = opts.locale;
    this.dontCreateCache = opts.dontCreateCache;
    this.outletAuth = opts.optaOutletAuth || process.env.OUTLET_AUTH;
    this.secretKey = opts.optaSecretKey || process.env.SECRET_KEY;
    this.storedCache = null;

    if (this.cache && this.nocache) {
      // Prevent conflicting options
      throw new Error("Cannot set both --cache and --nocache options");
    }
  }

  log(json) {
    // JSON logging function that takes into account options
    if (this.filter) {
      json = jmespath.search(json, this.filter);
    }
    if (this.skeleton) {
      json = skeleton(json);
    }
    if (this.raw) {
      return console.log(JSON.stringify(json, null, 2));
    }
    return console.log(json);
  }

  handleResponse(json) {
    if (this.cmdline) {
      this.log(json);
    } else {
      return json;
    }
  }

  getCache() {
    if (this.dontCreateCache) {
      return {
        getUrl() {
          return null;
        },
        setUrl() {},
      };
    }
    if (this.storedCache == null) {
      this.storedCache = new Cache();
    }
    return this.storedCache;
  }

  async getUrl(
    path,
    handleResponse = true,
    params = [
      ["_rt", "b"],
      ["_fmt", "json"],
    ]
  ) {
    const urlObj = new URL(
      `https://api.performfeeds.com${path.replace("<auth>", this.outletAuth)}`
    );
    // Add in locale param if set
    if (this.locale != null) {
      urlObj.searchParams.set("_lcl", this.locale);
    }
    params.forEach(([key, value]) => urlObj.searchParams.set(key, value));
    const url = urlObj.toString();

    // Get response
    let response = null;
    if (!this.nocache) {
      // Utilize cache
      const cached = this.getCache().getUrl(url);
      if (cached != null) {
        response = cached;
      }
    }
    if (response == null) {
      // Fetch from URL
      response = await get(url, this.outletAuth, this.secretKey);
    }

    if (this.cache) {
      // Write to cache only if cache is set
      this.getCache().setUrl(url, response);
    }

    if (handleResponse) {
      return this.handleResponse(response);
    } else {
      return response;
    }
  }

  async handleMultiple(uuids, url, key) {
    // Batch calls to multiple uuids by Opta routes that support it
    const ids = uuids
      .split(",")
      .map((x) => x.trim())
      .filter((x) => x.length > 0);
    let results = {};

    const ensureMultiple = (x) => {
      // If an id string with one element is requested,
      // Opta will return just a single response. We
      // need to fake the data to return the multiple
      // response format so results can be merged in.
      // (This would only happen if 51 or 101, etc
      // ids were passed in).
      if (x[key] == null) {
        return { [key]: [x] };
      }
      return x;
    };

    for (let i = 0; i < ids.length; i += MULTIPLE_BATCH) {
      // Batch calls
      const subIds = ids.slice(i, i + MULTIPLE_BATCH).join(",");
      if (results[key] == null) {
        // Set the results, since no data is in yet
        // console.log("URL", url(subIds));
        results = ensureMultiple(await this.getUrl(url(subIds), false));
      } else {
        // Merge the results in under the appropriate key
        // console.log("URL merge", url(subIds));
        const subResults = ensureMultiple(
          await this.getUrl(url(subIds), false)
        );
        results = {
          ...results,
          [key]: results[key].concat(subResults[key]),
        };
      }
    }
    return this.handleResponse(results);
  }
}

export default Sportlich;
