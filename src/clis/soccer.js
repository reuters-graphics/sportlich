import { Soccer } from "../apis/soccer";
import { commandAdapter } from "../adapter";

export default commandAdapter("soccer", Soccer, [
  [
    "tournamentcalendar",
    "Get basic information about the tournament calendars - the individual seasons/editions of a competition.",
    (soccer) => soccer.tournamentCalendar,
  ],
  [
    "tournamentcalendartype <type>",
    'Get all tournament calendars by type, where type is "authorized", "active", or "active/authorized"',
    (soccer) => soccer.tournamentCalendarType,
  ],
  [
    "tournamentschedule <tournamentCalendarUuid>",
    "Get schedule information for a tournament, including individual matches split by day, including the coverage level for a match.",
    (soccer) => soccer.tournamentSchedule,
  ],
  [
    "match <fixtureUuid>",
    "Get a fixture or fixture list with match details, such as date, start time, contestants, competition, season, score, result and lineups.",
    (soccer) => soccer.match,
  ],
  [
    "matchstats <fixtureUuid>",
    "Get detailed match statistics for teams and each individual player, including passes, shots, crosses, tackles and more.",
    (soccer) => soccer.matchStats,
  ],
  [
    "commentary <fixtureUuid>",
    "Get an automated and/or a manual set of commentary messages to update the reader on the key match events.",
    (soccer) => soccer.commentary,
  ],
  [
    "matchpreview <fixtureUuid>",
    "Get match preview data, information about previous meetings between contestants and each contestant's form in the last six matches",
    (soccer) => soccer.matchPreview,
  ],
  [
    "matchfactsbetting <fixtureUuid>",
    "Get automated betting match facts for a specific game.",
    (soccer) => soccer.matchFactsBetting,
  ],

  [
    "matchpenaltiespreview <fixtureUuid>",
    "Get a preview of penalties data for each player in a match",
    (soccer) => soccer.matchPenaltiesPreview,
  ],

  [
    "matchreference <feedType> <sinceTime>",
    "Get a list of matches from your requested feed that have been updated since a date/time specified by you",
    (soccer) => soccer.matchReference,
  ],

  [
    "deletions <type>",
    "Get a list of matches, teams or players that have been deleted within the last 72 hours.",
    (soccer) => soccer.deletions,
  ],

  [
    "venues <type> <id>",
    'Get information about venues associated with a competition, a team, or teams associated with a venue, where <type> is "venue", "ctst", or "tmcl" (venue, contestant, or tournament calendar) and <id> is the associated uuid.',
    (soccer) => soccer.venues,
  ],

  [
    "areas",
    "Get information about areas associated with a competition, a team, or teams associated with a venue.",
    (soccer) => soccer.areas,
  ],

  [
    "playercareer <personUuid>",
    "Get information about the current and past memberships of players and teams, with very basic season statistics included.",
    (soccer) => soccer.playerCareer,
  ],

  [
    "referees <type> <id>",
    'Get information about all referees for a season (tournament calendar) or a stage, or details about a single referee, where <type> is "prsn", "tmcl", or "stg" (person, tournament calendar, and stage) and <id> is the associated uuid.',
    (soccer) => soccer.referees,
  ],

  [
    "rankings <tournamentCalendarUuid>",
    "Get rankings data for all players, teams and games in a range of statistical categories within a tournament calendar (season).",
    (soccer) => soccer.rankings,
  ],

  [
    "topperformers <tournamentCalendarUuid>",
    "Get basic data ranking data all players and games in a range of statistical categories within a season.",
    (soccer) => soccer.topPerformers,
  ],

  [
    "injuries <tournamentCalendarUuid>",
    "Get a list of injured players, including the type of injury and both the start and end dates of the injury.",
    (soccer) => soccer.injuries,
  ],

  [
    "suspensions <tournamentCalendarUuid>",
    "Get a list of suspended players, including a description of the player, their suspension, and the start and end dates of the suspension.",
    (soccer) => soccer.suspensions,
  ],

  [
    "team <tournamentCalendarUuid>",
    "Get team details of all contestants within a specified tournament calendar or details for a single contestant.",
    (soccer) => soccer.team,
  ],

  [
    "standings <tournamentCalendarUuid>",
    "Get data to create a league table - position, points, matches won/lost/drawn, goals scored and conceded, and goal difference.",
    (soccer) => soccer.standings,
  ],

  [
    "squads <tournamentCalendarUuid>",
    "Get squad and individual personal information for either a specific contestant or all contestants playing in a tournament calendar.",
    (soccer) => soccer.squads,
  ],

  [
    "seasonstats <tournamentCalendarUuid> <contestantId>",
    "Get cumulative performance statistics for every player that has made an appearance in the specified tournament calendar.",
    (soccer) => soccer.seasonStats,
  ],

  [
    "transfers <tournamentCalendarUuid>",
    "Get information about players transferred between clubs, including transfer type, date, currency and transfer value.",
    (soccer) => soccer.transfers,
  ],

  [
    "trophies <competitionUuid>",
    "Get trophy information about a team, based on team, season, or competition.",
    (soccer) => soccer.trophies,
  ],

  ///

  [
    "matchevents <fixtureUuid>",
    "[ACCESS NEEDED] Get all events in a game - including the player, team, event, type, time (minute and second) - and qualifiers for each action.",
    (soccer) => soccer.matchEvents,
  ],
  [
    "passmatrix <fixtureUuid>",
    "[ACCESS NEEDED] Get the number of completed passes of all player combinations and x/y coordinates of their average pitch positions during the match.",
    (soccer) => soccer.passMatrix,
  ],
  [
    "possession <fixtureUuid>",
    "[ACCESS NEEDED] Get a breakdown of ball possession during a match, including overall % possession and territorial advantage, split by time period.",
    (soccer) => soccer.possession,
  ],
  [
    "matchfacts <fixtureUuid>",
    "[ACCESS NEEDED] Get match facts - interesting information and comments related to the match - as written by our Data Editorial team.",
    (soccer) => soccer.matchFacts,
  ],
  [
    "possessionevent <fixtureUuid>",
    "[ACCESS NEEDED] Get all possession data for each action in a game, including player, team, event, type, minute, second, and qualifiers.",
    (soccer) => soccer.possessionEvent,
  ],
  [
    "matchfactsall <fixtureUuid>",
    "[ACCESS NEEDED] Get all match facts - interesting information and comments related to the match.",
    (soccer) => soccer.matchFactsAll,
  ],
  [
    "matchplayerratings <fixtureUuid>",
    "[ACCESS NEEDED] Get player ratings for a match based on a combination of attacking, defending, goalkeeping, passing, possession and shooting.",
    (soccer) => soccer.matchPlayerRatings,
  ],
  [
    "matchlivewinprobability <fixtureUuid>",
    "[ACCESS NEEDED] Get match win probability data for each team: pre-match predictions and live prediction updates with key event details during a match",
    (soccer) => soccer.matchLiveWinProbability,
  ],
  [
    "nlgmatchpreview <fixtureUuid>",
    "[ACCESS NEEDED] Get a match preview with basic information - plus a detailed overview with recent form, highlights and season statistics for higher tiers.",
    (soccer) => soccer.nlgMatchPreview,
  ],
  [
    "matchinsights <fixtureUuid>",
    "[ACCESS NEEDED] Get real-time Insights and comments for a match",
    (soccer) => soccer.matchInsights,
  ],
  [
    "matchfitness <fixtureUuid>",
    "[ACCESS NEEDED] Get cumulative tracking data on teams and players during a given match, with a breakdown for player fitness by movement type.",
    (soccer) => soccer.matchFitness,
  ],
  [
    "matchtracking <fixtureUuid>",
    "[ACCESS NEEDED] Get tracking data giving the coordinates of the players, referee, and ball position during a given match.",
    (soccer) => soccer.matchTracking,
  ],
  [
    "nlgmatchrecap <fixtureUuid>",
    "[ACCESS NEEDED] Get a match recap with basic information - plus a detailed overview with recent form, highlights and season statistics for higher tiers.",
    (soccer) => soccer.nlgMatchRecap,
  ],

  [
    "nlgdynamicplayerbio <personUuid>",
    "[ACCESS NEEDED] Get a summary of top-level player information combined with seasonal statistics with dynamic context and team/schedule information.",
    (soccer) => soccer.nlgDynamicPlayerBio,
  ],

  [
    "seasonexpectedgoals <tournamentCalendarUuid> <contestantId>",
    "[ACCESS NEEDED] Get shot information, 'expected goals' and 'expected goals on target' data, cumulative player and team totals, in any match.",
    (soccer) => soccer.seasonExpectedGoals,
  ],

  [
    "seasonplayerratings <tournamentCalendarUuid> <contestantId>",
    "[ACCESS NEEDED] Get player ratings for a season, based on a combination of attacking, defending, goalkeeping, passing, possession and shooting.",
    (soccer) => soccer.seasonPlayerRatings,
  ],

  [
    "tournamentsimulations <tournamentCalendarUuid>",
    "[ACCESS NEEDED] Get tournament simulations for all the traditional data, probability outputs delivered prematch, likelihood of a team winning a tournament, qualifying for the knockout phases and more.",
    (soccer) => soccer.tournamentSimulations,
  ],

  [
    "seasonsimulations <tournamentCalendarUuid>",
    "[ACCESS NEEDED] Get season simulations for all the  traditional data and probability outputs delivered prematch,  the likelihood of a team winning or being relegated from a league and more.",
    (soccer) => soccer.seasonSimulations,
  ],
]);
