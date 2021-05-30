import Sportlich from ".";

export class Soccer extends Sportlich {
  async tournamentCalendar() {
    return await this.getUrl("/soccerdata/tournamentcalendar/<auth>");
  }

  async tournamentCalendarType(type) {
    return await this.getUrl(`/soccerdata/tournamentcalendar/<auth>/${type}`);
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

  async matchPenaltiesPreview(fixtureUuid) {
    return await this.getUrl(
      `/soccerdata/matchpenaltiespreview/<auth>/${fixtureUuid}/`
    );
  }

  async matchPlayerRatings(fixtureUuid) {
    return await this.getUrl(
      `/soccerdata/matchplayerratings/<auth>/${fixtureUuid}/`
    );
  }

  async matchLiveWinProbability(fixtureUuid) {
    return await this.getUrl(
      `/soccerdata/matchlivewinprobability/<auth>/${fixtureUuid}/`
    );
  }

  async nlgMatchPreview(fixtureUuid) {
    return await this.getUrl(
      `/soccerdata/nlgmatchpreview/<auth>/${fixtureUuid}/`
    );
  }

  async matchInsights(fixtureUuid) {
    return await this.getUrl(
      `/soccerdata/matchinsights/<auth>/${fixtureUuid}/`
    );
  }

  async matchFitness(fixtureUuid) {
    return await this.getUrl(`/soccerdata/matchfitness/<auth>/${fixtureUuid}/`);
  }

  async matchTracking(fixtureUuid) {
    return await this.getUrl(
      `/soccerdata/matchtracking/<auth>/${fixtureUuid}/`
    );
  }

  async nlgMatchRecap(fixtureUuid) {
    return await this.getUrl(
      `/soccerdata/nlgmatchrecap/<auth>/${fixtureUuid}/`
    );
  }

  async matchReference(feedType, sinceTime) {
    return await this.getUrl(
      `/soccerdata/matchreference/<auth>/?type=${feedType}&_rdlt=${sinceTime}`
    );
  }

  async deletions(type) {
    return await this.getUrl(`/soccerdata/deletions/<auth>/?type=${type}`);
  }

  async venues(type, id) {
    return await this.getUrl(`/soccerdata/venues/<auth>/?${type}=${id}`);
  }

  async areas() {
    return await this.getUrl(`/soccerdata/areas/<auth>/`);
  }

  async playerCareer(personUuid) {
    return await this.getUrl(`/soccerdata/playercareer/<auth>/${personUuid}/`);
  }

  async referees(type, id) {
    return await this.getUrl(`/soccerdata/referees/<auth>/?${type}=${id}`);
  }

  async rankings(tournamentCalendarUuid) {
    return await this.getUrl(
      `/soccerdata/rankings/<auth>/${tournamentCalendarUuid}/`
    );
  }

  async topPerformers(tournamentCalendarUuid) {
    return await this.getUrl(
      `/soccerdata/topperformers/<auth>/${tournamentCalendarUuid}/`
    );
  }

  async injuries(tournamentCalendarUuid) {
    return await this.getUrl(
      `/soccerdata/injuries/<auth>/?tmcl=${tournamentCalendarUuid}`
    );
  }

  async suspensions(tournamentCalendarUuid) {
    return await this.getUrl(
      `/soccerdata/suspensions/<auth>/?tmcl=${tournamentCalendarUuid}`
    );
  }

  async nlgDynamicPlayerBio(personUuid) {
    return await this.getUrl(
      `/soccerdata/nlgdynamicplayerbio/<auth>/${personUuid}/`
    );
  }

  async team(tournamentCalendarUuid) {
    return await this.getUrl(
      `/soccerdata/team/<auth>/?tmcl=${tournamentCalendarUuid}&detailed=yes`
    );
  }

  async standings(tournamentCalendarUuid) {
    return await this.getUrl(
      `/soccerdata/standings/<auth>/?tmcl=${tournamentCalendarUuid}`
    );
  }

  async squads(tournamentCalendarUuid) {
    return await this.getUrl(
      `/soccerdata/squads/<auth>/?tmcl=${tournamentCalendarUuid}`
    );
  }

  async seasonStats(tournamentCalendarUuid, contestantId) {
    return await this.getUrl(
      `/soccerdata/seasonstats/<auth>/?tmcl=${tournamentCalendarUuid}&ctst=${contestantId}`
    );
  }

  async transfers(tournamentCalendarUuid) {
    return await this.getUrl(
      `/soccerdata/transfers/<auth>/?tmcl=${tournamentCalendarUuid}`
    );
  }

  async trophies(competitionUuid) {
    return await this.getUrl(
      `/soccerdata/trophies/<auth>/?comp=${competitionUuid}`
    );
  }

  async seasonExpectedGoals(tournamentCalendarUuid, contestantId) {
    return await this.getUrl(
      `/soccerdata/seasonexpectedgoals/<auth>/?tmcl=${tournamentCalendarUuid}&ctst=${contestantId}`
    );
  }

  async seasonPlayerRatings(tournamentCalendarUuid, contestantId) {
    return await this.getUrl(
      `/soccerdata/seasonplayerratings/<auth>/?tmcl=${tournamentCalendarUuid}&ctst=${contestantId}`
    );
  }

  async tournamentSimulations(tournamentCalendarUuid) {
    return await this.getUrl(
      `/soccerdata/predictions/tournamentsimulations/<auth>?tmcl=${tournamentCalendarUuid}`
    );
  }

  async seasonSimulations(tournamentCalendarUuid) {
    return await this.getUrl(
      `/soccerdata/predictions/seasonsimulations/<auth>?tmcl=${tournamentCalendarUuid}`
    );
  }
}
