import Sportlich from ".";

export class Baseball extends Sportlich {
  async tournamentCalendar() {
    return await this.getUrl("/baseballdata/tournamentcalendar/<auth>");
  }
}
