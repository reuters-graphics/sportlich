import low, { LowdbSync } from 'lowdb';

import FileSync from 'lowdb/adapters/FileSync';

interface CacheSchema {
  cache: Record<string, { json: unknown; lastUpdated: string }>;
}

/**
 * Use this interface to define your own custom cache class.
 *
 * Custom caches just have to implement the `clearCache`, `getUrl` and `setUrl` methods.
 * How you define those methods internally is up to you.
 *
 * @example
 * ```typescript
 * import { Soccer, type CustomCache } from '@reuters-graphics/sportlich';
 *
 * class MyCustomCache implements CustomCache {
 *   private cache: Record<string, { json: unknown, lastUpdated: string }> = {};
 *
 *   clearCache() {
 *     this.cache = {};
 *   }
 *
 *   getUrl(url: string, maxAge: number) {
 *     const cachedData = this.cache[url];
 *     if (!cachedData) return null;
 *     const { json, lastUpdated } = cachedData;
 *     const secondsSinceUpdate = (Date.now() - new Date(lastUpdated).getTime()) / 1000;
 *     if (secondsSinceUpdate <= maxAge ) return json;
 *     return null;
 *   }
 *
 *   setUrl(url: string, json: unknown) {
 *     this.cache[url] = {
 *       lastUpdated: new Date().toISOString(),
 *       json,
 *     };
 *   }
 * }
 *
 * // Pass your custom cache to new sportlich instance
 * const soccer = new Soccer({ cache: new MyCustomCache() });
 * ```
 */
export interface CustomCache {
  /**
   * Clear the cache
   */
  clearCache(): void;
  /**
   * Get cached data for URL
   * @param url Request [URL.href](https://developer.mozilla.org/en-US/docs/Web/API/URL/href)
   * @param maxAge Max age of the cache in seconds
   * @returns Cached JSON data
   */
  getUrl(url: string, maxAge: number): null | unknown;
  /**
   * Set cache for data
   * @param url Request [URL.href](https://developer.mozilla.org/en-US/docs/Web/API/URL/href)
   * @param json Request response data
   */
  setUrl(url: string, json: unknown): void;
}

/**
 * Request cache
 */
export class Cache implements CustomCache {
  private db: LowdbSync<CacheSchema>;
  constructor(adapter = new FileSync<CacheSchema>('.sportlich.cache.json')) {
    this.db = low(adapter);

    // Set defaults
    this.db.defaults({ cache: {} }).write();
  }

  /**
   * Clear cache for all requests
   */
  clearCache() {
    // Empty out all cached results
    this.db.setState({ cache: {} });
    this.db.write();
  }

  /**
   * Get cached response for URL
   * @param url Request [URL.href](https://developer.mozilla.org/en-US/docs/Web/API/URL/href)
   * @param maxAge Max age in seconds to cache this request data for
   */
  getUrl(url: string, maxAge: number): unknown | null {
    const cachedData = this.db.get('cache').value()[url];
    if (!cachedData) return null;
    const { json, lastUpdated } = cachedData;
    const lastUpdatedDate = new Date(lastUpdated);
    const secondsSinceUpdate = (Date.now() - lastUpdatedDate.getTime()) / 1000;
    if (secondsSinceUpdate <= maxAge) return json;
    return null;
  }

  /**
   * Set cached response for URL
   * @param url Request [URL.href](https://developer.mozilla.org/en-US/docs/Web/API/URL/href)
   * @param json Response data
   */
  setUrl(url: string, json: unknown) {
    this.db
      .update('cache', (cache) => {
        cache[url] = {
          lastUpdated: new Date().toISOString(),
          json,
        };
        return cache;
      })
      .write();
  }
}
