export interface Data {
  lastUpdated: Date;
  competition: Competition[];
}

export interface Competition {
  id: string;
  name: string;
  knownName?: string;
  competitionFormat: string;
  type: string;
  trophy: Trophy[];
}

export interface Trophy {
  tournamentCalendarId: string;
  tournamentCalendarStartDate: string;
  tournamentCalendarEndDate: string;
  tournamentCalendarName: string;
  winnerContestantId: string;
  winnerContestantName: string;
  winnerContestantCountry: string;
  winnerContestantCountryId: string;
  runnerUpContestantId: string;
  runnerUpContestantName: string;
  runnerUpContestantCountry: string;
  runnerUpContestantCountryId: string;
}
