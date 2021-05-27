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

  async match(fixtureUuid) {
    return await this.getUrl(`/soccerdata/match/<auth>/${fixtureUuid}/`);
  }

  async matchStats(fixtureUuid) {
    return await this.getUrl(`/soccerdata/matchstats/<auth>/${fixtureUuid}/`);
  }

  async matchEvents(fixtureUuid) {
    return await this.getUrl(`/soccerdata/matchevent/<auth>/${fixtureUuid}/`);
  }

  async passMatrix(fixtureUuid) {
    return await this.getUrl(`/soccerdata/passmatrix/<auth>/${fixtureUuid}/`);
  }

  async possession(fixtureUuid) {
    return await this.getUrl(`/soccerdata/possession/<auth>/${fixtureUuid}/`);
  }

  async commentary(fixtureUuid) {
    return await this.getUrl(`/soccerdata/commentary/<auth>/${fixtureUuid}/`);
  }

  async matchPreview(fixtureUuid) {
    return await this.getUrl(`/soccerdata/matchpreview/<auth>/${fixtureUuid}/`);
  }

  async matchFacts(fixtureUuid) {
    return await this.getUrl(`/soccerdata/matchfacts/<auth>/${fixtureUuid}/`);
  }

  async possessionEvent(fixtureUuid) {
    return await this.getUrl(
      `/soccerdata/possessionevent/<auth>/${fixtureUuid}/`
    );
  }

  async matchFactsBetting(fixtureUuid) {
    return await this.getUrl(
      `/soccerdata/matchfactsbetting/<auth>/${fixtureUuid}/`
    );
  }

  async matchFactsAll(fixtureUuid) {
    return await this.getUrl(
      `/soccerdata/matchfactsall/<auth>/${fixtureUuid}/`
    );
  }
}
