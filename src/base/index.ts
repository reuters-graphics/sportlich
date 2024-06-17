import { Cache, type CustomCache } from '../utils/cache.js';
import { get } from '../utils/auth.js';

export interface Options {
  /**
   * Whether to allow caching responses.
   *
   * You may also pass your own custom cache class. See {@link CustomCache}.
   */
  cache?: boolean | CustomCache;
  /**
   * Default locale.
   *
   * See [OPTA docs](https://docs.performgroup.com/docs/rh/sdapi/Topics/opta-sdapi-global-parameters.htm#_lcl).
   */
  locale?: string;
  /**
   * OPTA outlet authorisation key.
   *
   * You may also specify in the environment as `OPTA_OUTLET_AUTH`.
   *
   * See [OPTA's OAuth guide](https://docs.performgroup.com/docs/rh/sdapi/Topics/getting_started/faqs.htm#oauth-sdapi-1).
   */
  optaOutletAuth?: string;
  /**
   * OPTA secret key.
   *
   * You may also specify in the environment as `OPTA_SECRET_KEY`.
   *
   * See [OPTA's OAuth guide](https://docs.performgroup.com/docs/rh/sdapi/Topics/getting_started/faqs.htm#oauth-sdapi-1).
   */
  optaSecretKey?: string;
}

const DEFAULT_PARAMS = [
  ['_rt', 'b'] as [string, string], // B2B operating mode
  ['_fmt', 'json'] as [string, string], // JSON format
];
const DEFAULT_MAXAGE = 60 * 10; // 10 minutes

class Sportlich {
  private cache?: boolean | CustomCache;
  private locale?: string;
  private outletAuth: string;
  private secretKey: string;
  private storedCache: CustomCache | null;

  constructor(opts: Options = {}) {
    // Parse common options
    this.cache = opts.cache || false;
    this.locale = opts.locale;

    const outletAuth = opts.optaOutletAuth || process.env.OPTA_OUTLET_AUTH;
    const secretKey = opts.optaSecretKey || process.env.OPTA_SECRET_KEY;

    if (!outletAuth) {
      throw new Error(
        'Must pass OPTA outlet auth as param or set as environment variable'
      );
    }
    if (!secretKey) {
      throw new Error(
        'Must pass OPTA secret key as param or set as environment variable'
      );
    }

    this.storedCache = typeof this.cache === 'boolean' ? null : this.cache;

    this.outletAuth = outletAuth;
    this.secretKey = secretKey;
  }

  private getCache() {
    if (!this.storedCache) {
      this.storedCache = new Cache();
    }
    return this.storedCache;
  }

  protected async getUrl(
    path: string,
    options: {
      params?: [string, string][];
      maxAge?: number;
    } = {}
  ) {
    const urlObj = new URL(
      `https://api.performfeeds.com${path.replace('<auth>', this.outletAuth)}`
    );
    // Add in locale param if set
    if (this.locale) {
      urlObj.searchParams.set('_lcl', this.locale);
    }
    const params = [...(options?.params || []), ...DEFAULT_PARAMS];
    params.forEach(([key, value]) => urlObj.searchParams.set(key, value));
    const url = urlObj.toString();

    // Get response
    let response: unknown;
    if (this.cache) {
      // Utilize cache
      const cached = this.getCache().getUrl(
        url,
        options?.maxAge || DEFAULT_MAXAGE
      );
      if (cached) response = cached;
    }
    if (!response) {
      // Fetch from URL
      response = await get(url, this.outletAuth, this.secretKey);
      // Rewrite cache if cache didn't return an in-date response
      if (this.cache) this.getCache().setUrl(url, response);
    }

    return response;
  }
}

export default Sportlich;
