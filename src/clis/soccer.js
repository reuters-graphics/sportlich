import pkg from "../../package.json";
import sade from "sade";
import { Soccer } from "../sports/soccer";

export default function soccer(wrap) {
  const prog = sade("soccer", false);
  // Hacky way of making subcommand programs
  prog.bin = "sportlich soccer";
  prog.single = false;
  prog.version(pkg.version);

  wrap(
    prog
      .command("tournamentcalendar")
      .describe(
        "Get basic information about the tournament calendars - the individual seasons/editions of a competition."
      )
      .action((opts) => {
        const soccer = new Soccer(opts);
        soccer.tournamentCalendar(opts);
      })
  );

  wrap(
    prog
      .command("tournamentschedule <tournamentCalendarUuid>")
      .describe(
        "Get schedule information for a tournament, including individual matches split by day, including the coverage level for a match."
      )
      .action((opts, args) => {
        const soccer = new Soccer(args != null ? args : opts);
        soccer.tournamentSchedule(opts);
      })
  );

  return prog;
}
