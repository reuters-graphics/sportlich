import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

export class Cache {
  constructor() {
    // Set up database
    const adapter = new FileSync("cache.json");
    this.db = low(adapter);

    // Set defaults
    this.db.defaults({ cache: {} }).write();
  }

  clearCache() {
    // Empty out all cached results
    this.db.setState({ cache: {} });
    this.db.write();
  }

  getUrl(url) {
    return this.db.get("cache").value()[url];
  }

  setUrl(url, json) {
    this.db
      .update("cache", (cache) => {
        cache[url] = json;
        return cache;
      })
      .write();
  }
}
