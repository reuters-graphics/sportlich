import * as SoccerAPI from './@types/soccer/index.js';

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

export interface RequestOptions {
  /**
   * Additional params to pass to endpoints
   */
  params?: [string, string][];
  /**
   * If using a cache, max age of the cache for this endpoint in seconds
   */
  maxAge?: number;
}

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
  async tournamentCalendar(options?: RequestOptions) {
    return (await this.getUrl(
      '/soccerdata/tournamentcalendar/<auth>/?stages=yes',
      options
    )) as SoccerAPI.TournamentCalendar.Data;
  }

  /**
   * See [OPTA docs](https://docs.performgroup.com/docs/rh/sdapi/Topics/soccer/opta-sdapi-soccer-api-tournament-schedule.htm).
   */
  async tournamentSchedule(
    tournamentCalendarUuid: string,
    options?: RequestOptions
  ) {
    return (await this.getUrl(
      `/soccerdata/tournamentschedule/<auth>/${tournamentCalendarUuid}/`,
      options
    )) as SoccerAPI.TournamentSchedule.Data;
  }

  /**
   * See [OPTA docs](https://docs.performgroup.com/docs/rh/sdapi/Topics/soccer/opta-sdapi-soccer-api-fixtures-and-results.htm).
   */
  async match(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/match/<auth>/${fixtureUuid}/`,
      options
    )) as SoccerAPI.Match.Data;
  }

  /**
   * See [OPTA docs](https://docs.performgroup.com/docs/rh/sdapi/Topics/soccer/opta-sdapi-soccer-api-fixtures-and-results-detailed.html).
   */
  async matchDetailed(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchdetailed/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<API.soccer.paths['/match/{outletAuthKey}/{matchUuid}']>;
  }

  async matchTvListing(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchtvlisting/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/matchtvlisting/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchTournamentCalendar(
    tournamentCalendarUuid: string,
    options?: RequestOptions
  ) {
    return (await this.getUrl(
      `/soccerdata/match/<auth>/?tmcl=${tournamentCalendarUuid}&live=yes&_pgSz=1000`,
      options
    )) as SoccerAPI.MatchTournamentCalendar.Data;
  }

  async matchStats(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchstats/<auth>/${fixtureUuid}/`,
      options
    )) as SoccerAPI.MatchStats.Data;
  }

  async matchStatsDetailed(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchstats/<auth>/${fixtureUuid}/?detailed=yes`,
      options
    )) as SoccerAPI.MatchStatsDetailed.Data;
  }

  async matchEvents(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchevent/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<API.soccer.paths['/matchevent/{outletAuthKey}/{matchUuid}']>;
  }

  async passMatrix(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/passmatrix/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<API.soccer.paths['/passmatrix/{outletAuthKey}/{matchUuid}']>;
  }

  async possession(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/possession/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<API.soccer.paths['/possession/{outletAuthKey}/{matchUuid}']>;
  }

  async commentary(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/commentary/<auth>/${fixtureUuid}/?type=fallback`,
      options
    )) as SoccerAPI.Commentary.Data;
  }

  async matchPreview(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchpreview/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/matchpreview/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchFacts(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchfacts/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<API.soccer.paths['/matchfacts/{outletAuthKey}/{matchUuid}']>;
  }

  async possessionEvent(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/possessionevent/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/possessionevent/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchFactsBetting(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchfactsbetting/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/matchfactsbetting/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchFactsAll(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchfactsall/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/matchfactsall/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchPenaltiesPreview(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchpenaltiespreview/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/matchpenaltiespreview/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchPlayerRatings(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchplayerratings/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/matchplayerratings/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchLiveWinProbability(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchlivewinprobability/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/matchlivewinprobability/{outletAuthKey}/{matchUuid}']
    >;
  }

  async nlgMatchPreview(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/nlgmatchpreview/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/nlgmatchpreview/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchInsights(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchinsights/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/matchinsights/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchFitness(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchfitness/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/matchfitness/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchTracking(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/matchtracking/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/matchtracking/{outletAuthKey}/{matchUuid}']
    >;
  }

  async nlgMatchRecap(fixtureUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/nlgmatchrecap/<auth>/${fixtureUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/nlg_match_recap/{outletAuthKey}/{matchUuid}']
    >;
  }

  async matchReference(
    feedType: string,
    sinceTime: string,
    options?: RequestOptions
  ) {
    return (await this.getUrl(
      `/soccerdata/matchreference/<auth>/?type=${feedType}&_rdlt=${sinceTime}`,
      options
    )) as GetJson<API.soccer.paths['/matchreference/{outletAuthKey}']>;
  }

  async deletions(type: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/deletions/<auth>/?type=${type}`,
      options
    )) as GetJson<API.soccer.paths['/deletions/{outletAuthKey}']>;
  }

  async venues(
    type: 'ctst' | 'tmcl' | 'venue',
    uuid: string,
    options?: RequestOptions
  ) {
    return (await this.getUrl(
      `/soccerdata/venues/<auth>/?${type}=${uuid}`,
      options
    )) as SoccerAPI.Venues.Data;
  }

  async areas(options?: RequestOptions) {
    return (await this.getUrl(`/soccerdata/areas/<auth>/`, options)) as GetJson<
      API.soccer.paths['/areas/{outletAuthKey}']
    >;
  }

  async playerCareer(personUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/playercareer/<auth>/${personUuid}/`,
      options
    )) as SoccerAPI.PlayerCareer.Data;
  }

  async referees(type: string, id: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/referees/<auth>/?${type}=${id}`,
      options
    )) as GetJson<API.soccer.paths['/referees/{outletAuthKey}']>;
  }

  async rankings(tournamentCalendarUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/rankings/<auth>/${tournamentCalendarUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/rankings/{outletAuthKey}/{tournamentCalendarUuid}']
    >;
  }

  async topPerformers(
    tournamentCalendarUuid: string,
    options?: RequestOptions
  ) {
    return (await this.getUrl(
      `/soccerdata/topperformers/<auth>/${tournamentCalendarUuid}/`,
      options
    )) as SoccerAPI.TopPerformers.Data;
  }

  async injuries(tournamentCalendarUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/injuries/<auth>/?tmcl=${tournamentCalendarUuid}`,
      options
    )) as GetJson<API.soccer.paths['/injuries/{outletAuthKey}']>;
  }

  async suspensions(tournamentCalendarUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/suspensions/<auth>/?tmcl=${tournamentCalendarUuid}`,
      options
    )) as GetJson<API.soccer.paths['/suspensions/{outletAuthKey}']>;
  }

  async nlgDynamicPlayerBio(personUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/nlgdynamicplayerbio/<auth>/${personUuid}/`,
      options
    )) as GetJson<
      API.soccer.paths['/nlgdynamicplayerbio/{outletAuthKey}/{personUuid}']
    >;
  }

  async team(tournamentCalendarUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/team/<auth>/?tmcl=${tournamentCalendarUuid}&detailed=yes`,
      options
    )) as SoccerAPI.Team.Data;
  }

  async standings(tournamentCalendarUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/standings/<auth>/?tmcl=${tournamentCalendarUuid}`,
      options
    )) as SoccerAPI.Standings.Data;
  }

  async squads(tournamentCalendarUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/squads/<auth>/?tmcl=${tournamentCalendarUuid}&_pgSz=1000`,
      options
    )) as SoccerAPI.Squads.Data;
  }

  async seasonStats(
    tournamentCalendarUuid: string,
    contestantId: string,
    options?: RequestOptions
  ) {
    return (await this.getUrl(
      `/soccerdata/seasonstats/<auth>/?tmcl=${tournamentCalendarUuid}&ctst=${contestantId}`,
      options
    )) as GetJson<API.soccer.paths['/seasonstats/{outletAuthKey}']>;
  }

  async transfers(tournamentCalendarUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/transfers/<auth>/?tmcl=${tournamentCalendarUuid}`,
      options
    )) as GetJson<API.soccer.paths['/transfers/{outletAuthKey}']>;
  }

  async trophies(competitionUuid: string, options?: RequestOptions) {
    return (await this.getUrl(
      `/soccerdata/trophies/<auth>/?comp=${competitionUuid}`,
      options
    )) as SoccerAPI.Trophies.Data;
  }

  async seasonExpectedGoals(
    tournamentCalendarUuid: string,
    contestantId: string,
    options?: RequestOptions
  ) {
    return (await this.getUrl(
      `/soccerdata/seasonexpectedgoals/<auth>/?tmcl=${tournamentCalendarUuid}&ctst=${contestantId}`,
      options
    )) as GetJson<API.soccer.paths['/seasonexpectedgoals/{outletAuthKey}']>;
  }

  async seasonPlayerRatings(
    tournamentCalendarUuid: string,
    contestantId: string,
    options?: RequestOptions
  ) {
    return (await this.getUrl(
      `/soccerdata/seasonplayerratings/<auth>/?tmcl=${tournamentCalendarUuid}&ctst=${contestantId}`,
      options
    )) as GetJson<API.soccer.paths['/seasonplayerratings/{outletAuthKey}']>;
  }

  async tournamentSimulations(
    tournamentCalendarUuid: string,
    options?: RequestOptions
  ) {
    return (await this.getUrl(
      `/soccerdata/predictions/tournamentsimulations/<auth>?tmcl=${tournamentCalendarUuid}`,
      options
    )) as GetJson<
      API.soccer.paths['/seasonandtournamentsimulations/{outletAuthKey}']
    >;
  }

  async seasonSimulations(
    tournamentCalendarUuid: string,
    options?: RequestOptions
  ) {
    return (await this.getUrl(
      `/soccerdata/predictions/seasonsimulations/<auth>?tmcl=${tournamentCalendarUuid}`,
      options
    )) as GetJson<
      API.soccer.paths['/seasonandtournamentsimulations/{outletAuthKey}']
    >;
  }
}
