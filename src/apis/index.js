import { get } from "../auth";
import { skeleton } from "../util";
import { cache } from "../cache";
import jmespath from "jmespath";

class Sportlich {
  constructor(opts) {
    // Parse common options
    this.skeleton = opts.skeleton;
    this.raw = opts.raw;
    this.filter = opts.filter;
    this.cache = opts.cache;
    this.nocache = opts.nocache;

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

  async getUrl(path, params = "_rt=b&_fmt=json") {
    const url = `https://api.performfeeds.com${path.replace(
      "<auth>",
      process.env.OUTLET_AUTH
    )}?${params}`;

    // Get response
    let response = null;
    if (!this.nocache) {
      // Utilize cache
      const cached = cache.getUrl(url);
      if (cached != null) {
        response = cached;
      }
    }
    if (response == null) {
      // Fetch from URL
      response = await get(url);
    }

    if (this.cache) {
      // Write to cache only if cache is set
      cache.setUrl(url, response);
    }

    return this.log(response);
  }
}

export default Sportlich;
