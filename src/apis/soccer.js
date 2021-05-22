import Sportlich from ".";

export class Soccer extends Sportlich {
  async tournamentCalendar() {
    return await this.getUrl("/soccerdata/tournamentcalendar/<auth>");
  }

  async tournamentSchedule(tournamentCalendarUuid) {
    return await this.getUrl(
      `/soccerdata/tournamentschedule/<auth>/${tournamentCalendarUuid}/`
    );
  }
}
