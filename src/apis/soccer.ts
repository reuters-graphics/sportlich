import Sportlich from '../base/index.js';

type GetJson<T> = T extends {
  get: {
    responses: {
      '200': {
        content: {
          'application/json': infer U;
        };
      };
    };
  };
}
  ? U
  : never;

/**
 * Soccer API
 *
 * @example
 * ```typescript
 * import { Soccer } from '@reuters-graphics/sportlich';
 *
 * const soccer = new Soccer();
 *
 * await soccer.tournamentCalendar();
 * ```
 */
export class Soccer extends Sportlich {
  /**
   * See [OPTA docs](https://docs.performgroup.com/docs/rh/sdapi/Topics/soccer/opta-sdapi-soccer-api-tournament-calendars.htm).
   */
  async tournamentCalendar() {
    return (await this.getUrl(
      '/soccerdata/tournamentcalendar/<auth>/?stages=yes'
    )) as GetJson<API.soccer.paths['/tournamentcalendar/{outletAuthKey}']>;
  }

  /**
   * See [OPTA docs](https://docs.performgroup.com/docs/rh/sdapi/Topics/soccer/opta-sdapi-soccer-api-tournament-schedule.htm).
   */
  async tournamentSchedule(tournamentCalendarUuid: string) {
    return (await this.getUrl(
      `/soccerdata/tournamentschedule/<auth>/${tournamentCalendarUuid}/`
    )) as GetJson<API.soccer.paths['/tournamentschedule/{outletAuthKey}']>;
  }

  /**
   * See [OPTA docs](https://docs.performgroup.com/docs/rh/sdapi/Topics/soccer/opta-sdapi-soccer-api-fixtures-and-results.htm).
   */
  async match(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/match/<auth>/${fixtureUuid}/`
    )) as GetJson<API.soccer.paths['/match/{outletAuthKey}/{matchUuid}']>;
  }

  /**
   * See [OPTA docs](https://docs.performgroup.com/docs/rh/sdapi/Topics/soccer/opta-sdapi-soccer-api-fixtures-and-results-detailed.html).
   */
  async matchDetailed(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchdetailed/<auth>/${fixtureUuid}/`
    )) as GetJson<API.soccer.paths['/match/{outletAuthKey}/{matchUuid}']>;
  }

  async matchTvListing(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchtvlisting/<auth>/${fixtureUuid}/`
    )) as GetJson<
      API.soccer.paths['/matchtvlisting/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchTournamentCalendar(tournamentCalendarUuid: string) {
    return (await this.getUrl(
      `/soccerdata/match/<auth>/?tmcl=${tournamentCalendarUuid}&live=yes&_pgSz=1000`
    )) as GetJson<API.soccer.paths['/match/{outletAuthKey}/{matchUuid}']>;
  }

  async matchStats(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchstats/<auth>/${fixtureUuid}/`
    )) as GetJson<API.soccer.paths['/matchstats/{outletAuthKey}/{matchUuid}']>;
  }

  async matchEvents(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchevent/<auth>/${fixtureUuid}/`
    )) as GetJson<API.soccer.paths['/matchevent/{outletAuthKey}/{matchUuid}']>;
  }

  async passMatrix(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/passmatrix/<auth>/${fixtureUuid}/`
    )) as GetJson<API.soccer.paths['/passmatrix/{outletAuthKey}/{matchUuid}']>;
  }

  async possession(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/possession/<auth>/${fixtureUuid}/`
    )) as GetJson<API.soccer.paths['/possession/{outletAuthKey}/{matchUuid}']>;
  }

  async commentary(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/commentary/<auth>/${fixtureUuid}/?type=fallback`
    )) as GetJson<API.soccer.paths['/commentary/{outletAuthKey}/{matchUuid}']>;
  }

  async matchPreview(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchpreview/<auth>/${fixtureUuid}/`
    )) as GetJson<
      API.soccer.paths['/matchpreview/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchFacts(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchfacts/<auth>/${fixtureUuid}/`
    )) as GetJson<API.soccer.paths['/matchfacts/{outletAuthKey}/{matchUuid}']>;
  }

  async possessionEvent(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/possessionevent/<auth>/${fixtureUuid}/`
    )) as GetJson<
      API.soccer.paths['/possessionevent/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchFactsBetting(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchfactsbetting/<auth>/${fixtureUuid}/`
    )) as GetJson<
      API.soccer.paths['/matchfactsbetting/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchFactsAll(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchfactsall/<auth>/${fixtureUuid}/`
    )) as GetJson<
      API.soccer.paths['/matchfactsall/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchPenaltiesPreview(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchpenaltiespreview/<auth>/${fixtureUuid}/`
    )) as GetJson<
      API.soccer.paths['/matchpenaltiespreview/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchPlayerRatings(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchplayerratings/<auth>/${fixtureUuid}/`
    )) as GetJson<
      API.soccer.paths['/matchplayerratings/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchLiveWinProbability(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchlivewinprobability/<auth>/${fixtureUuid}/`
    )) as GetJson<
      API.soccer.paths['/matchlivewinprobability/{outletAuthKey}/{matchUuid}']
    >;
  }

  async nlgMatchPreview(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/nlgmatchpreview/<auth>/${fixtureUuid}/`
    )) as GetJson<
      API.soccer.paths['/nlgmatchpreview/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchInsights(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchinsights/<auth>/${fixtureUuid}/`
    )) as GetJson<
      API.soccer.paths['/matchinsights/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchFitness(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchfitness/<auth>/${fixtureUuid}/`
    )) as GetJson<
      API.soccer.paths['/matchfitness/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchTracking(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/matchtracking/<auth>/${fixtureUuid}/`
    )) as GetJson<
      API.soccer.paths['/matchtracking/{outletAuthKey}/{matchUuid}']
    >;
  }

  async nlgMatchRecap(fixtureUuid: string) {
    return (await this.getUrl(
      `/soccerdata/nlgmatchrecap/<auth>/${fixtureUuid}/`
    )) as GetJson<
      API.soccer.paths['/nlg_match_recap/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchReference(feedType: string, sinceTime: string) {
    return (await this.getUrl(
      `/soccerdata/matchreference/<auth>/?type=${feedType}&_rdlt=${sinceTime}`
    )) as GetJson<API.soccer.paths['/matchreference/{outletAuthKey}']>;
  }

  async deletions(type: string) {
    return (await this.getUrl(
      `/soccerdata/deletions/<auth>/?type=${type}`
    )) as GetJson<API.soccer.paths['/deletions/{outletAuthKey}']>;
  }

  async venues(type: string, id: string) {
    return (await this.getUrl(
      `/soccerdata/venues/<auth>/?${type}=${id}`
    )) as GetJson<API.soccer.paths['/venues/{outletAuthKey}']>;
  }

  async areas() {
    return (await this.getUrl(`/soccerdata/areas/<auth>/`)) as GetJson<
      API.soccer.paths['/areas/{outletAuthKey}']
    >;
  }

  async playerCareer(personUuid: string) {
    return (await this.getUrl(
      `/soccerdata/playercareer/<auth>/${personUuid}/`
    )) as GetJson<
      API.soccer.paths['/playercareer/{outletAuthKey}/{personUuid}']
    >;
  }

  async referees(type: string, id: string) {
    return (await this.getUrl(
      `/soccerdata/referees/<auth>/?${type}=${id}`
    )) as GetJson<API.soccer.paths['/referees/{outletAuthKey}']>;
  }

  async rankings(tournamentCalendarUuid: string) {
    return (await this.getUrl(
      `/soccerdata/rankings/<auth>/${tournamentCalendarUuid}/`
    )) as GetJson<
      API.soccer.paths['/rankings/{outletAuthKey}/{tournamentCalendarUuid}']
    >;
  }

  async topPerformers(tournamentCalendarUuid: string) {
    return (await this.getUrl(
      `/soccerdata/topperformers/<auth>/${tournamentCalendarUuid}/`
    )) as GetJson<
      API.soccer.paths['/topperformers/{outletAuthKey}/{tournamentCalendarUuid}']
    >;
  }

  async injuries(tournamentCalendarUuid: string) {
    return (await this.getUrl(
      `/soccerdata/injuries/<auth>/?tmcl=${tournamentCalendarUuid}`
    )) as GetJson<API.soccer.paths['/injuries/{outletAuthKey}']>;
  }

  async suspensions(tournamentCalendarUuid: string) {
    return (await this.getUrl(
      `/soccerdata/suspensions/<auth>/?tmcl=${tournamentCalendarUuid}`
    )) as GetJson<API.soccer.paths['/suspensions/{outletAuthKey}']>;
  }

  async nlgDynamicPlayerBio(personUuid: string) {
    return (await this.getUrl(
      `/soccerdata/nlgdynamicplayerbio/<auth>/${personUuid}/`
    )) as GetJson<
      API.soccer.paths['/nlgdynamicplayerbio/{outletAuthKey}/{personUuid}']
    >;
  }

  async team(tournamentCalendarUuid: string) {
    return (await this.getUrl(
      `/soccerdata/team/<auth>/?tmcl=${tournamentCalendarUuid}&detailed=yes`
    )) as GetJson<API.soccer.paths['/team/{outletAuthKey}']>;
  }

  async standings(tournamentCalendarUuid: string) {
    return (await this.getUrl(
      `/soccerdata/standings/<auth>/?tmcl=${tournamentCalendarUuid}`
    )) as GetJson<API.soccer.paths['/standings/{outletAuthKey}']>;
  }

  async squads(tournamentCalendarUuid: string) {
    return (await this.getUrl(
      `/soccerdata/squads/<auth>/?tmcl=${tournamentCalendarUuid}&_pgSz=1000`
    )) as GetJson<API.soccer.paths['/squads/{outletAuthKey}']>;
  }

  async seasonStats(tournamentCalendarUuid: string, contestantId: string) {
    return (await this.getUrl(
      `/soccerdata/seasonstats/<auth>/?tmcl=${tournamentCalendarUuid}&ctst=${contestantId}`
    )) as GetJson<API.soccer.paths['/seasonstats/{outletAuthKey}']>;
  }

  async transfers(tournamentCalendarUuid: string) {
    return (await this.getUrl(
      `/soccerdata/transfers/<auth>/?tmcl=${tournamentCalendarUuid}`
    )) as GetJson<API.soccer.paths['/transfers/{outletAuthKey}']>;
  }

  async trophies(competitionUuid: string) {
    return (await this.getUrl(
      `/soccerdata/trophies/<auth>/?comp=${competitionUuid}`
    )) as GetJson<API.soccer.paths['/trophies/{outletAuthKey}']>;
  }

  async seasonExpectedGoals(
    tournamentCalendarUuid: string,
    contestantId: string
  ) {
    return (await this.getUrl(
      `/soccerdata/seasonexpectedgoals/<auth>/?tmcl=${tournamentCalendarUuid}&ctst=${contestantId}`
    )) as GetJson<API.soccer.paths['/seasonexpectedgoals/{outletAuthKey}']>;
  }

  async seasonPlayerRatings(
    tournamentCalendarUuid: string,
    contestantId: string
  ) {
    return (await this.getUrl(
      `/soccerdata/seasonplayerratings/<auth>/?tmcl=${tournamentCalendarUuid}&ctst=${contestantId}`
    )) as GetJson<API.soccer.paths['/seasonplayerratings/{outletAuthKey}']>;
  }

  async tournamentSimulations(tournamentCalendarUuid: string) {
    return (await this.getUrl(
      `/soccerdata/predictions/tournamentsimulations/<auth>?tmcl=${tournamentCalendarUuid}`
    )) as GetJson<
      API.soccer.paths['/seasonandtournamentsimulations/{outletAuthKey}']
    >;
  }

  async seasonSimulations(tournamentCalendarUuid: string) {
    return (await this.getUrl(
      `/soccerdata/predictions/seasonsimulations/<auth>?tmcl=${tournamentCalendarUuid}`
    )) as GetJson<
      API.soccer.paths['/seasonandtournamentsimulations/{outletAuthKey}']
    >;
  }
}
