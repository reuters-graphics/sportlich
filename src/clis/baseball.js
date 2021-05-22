import { Baseball } from "../apis/baseball";
import { commandAdapter } from "../adapter";

export default commandAdapter("baseball", Baseball, [
  [
    "tournamentcalendar",
    "Get basic information about the tournament calendars - the individual seasons/editions of a competition.",
    (baseball) => baseball.tournamentCalendar,
  ],
]);
