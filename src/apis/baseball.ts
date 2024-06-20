import Sportlich from '../base/index.js';

/**
 * Baseball API
 *
 * @example
 * ```typescript
 * import { Baseball } from '@reuters-graphics/sportlich';
 *
 * const baseball = new Baseball();
 *
 * await baseball.tournamentCalendar();
 * ```
 */
export class Baseball extends Sportlich {
  async tournamentCalendar() {
    return await this.getUrl('/baseballdata/tournamentcalendar/<auth>');
  }
}
