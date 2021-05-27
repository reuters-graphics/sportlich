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
]);
