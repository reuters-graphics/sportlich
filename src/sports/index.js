import { get } from "../auth";
import { skeleton } from "../util";

class Sportlich {
  constructor(opts) {
    // Parse common options
    this.skeleton = opts.skeleton;
    this.raw = opts.raw;
  }

  log(json) {
    // JSON logging function that takes into account options
    if (this.skeleton) {
      json = skeleton(json);
    }
    if (this.raw) {
      return console.log(JSON.stringify(json, null, 2));
    }
    return console.log(json);
  }

  async getUrl(path, params = "_rt=b&_fmt=json") {
    return this.log(
      await get(
        `https://api.performfeeds.com${path.replace(
          "<auth>",
          process.env.OUTLET_AUTH
        )}?${params}`
      )
    );
  }
}

export default Sportlich;
