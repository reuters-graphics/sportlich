import { Soccer } from "../apis/soccer";
import { commandAdapter } from "../adapter";

export default commandAdapter("soccer", Soccer, [
  [
    "tournamentcalendar",
    "Get basic information about the tournament calendars - the individual seasons/editions of a competition.",
    (soccer) => soccer.tournamentCalendar,
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
    "matchevents <fixtureUuid>",
    "[ACCESS NEEDED] Get all events in a game - including the player, team, event, type, time (minute and second) - and qualifiers for each action.",
    (soccer) => soccer.matchEvents,
  ],
  [
    "passmatrix <fixtureUuid>",
    "[ACCESS NEEDED]  Get the number of completed passes of all player combinations and x/y coordinates of their average pitch positions during the match.",
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
]);
