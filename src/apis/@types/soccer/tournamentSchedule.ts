export interface Data {
  competition: Competition;
  tournamentCalendar: TournamentCalendar;
  matchDate: MatchDate[];
}

export interface Competition {
  id: string;
  name: string;
  competitionCode: string;
  competitionFormat: string;
  lastUpdated: Date;
  knownName?: string;
}

export interface MatchDate {
  date: string;
  numberOfGames: string;
  match: Match[];
}

export interface Match {
  id: string;
  coverageLevel: string;
  date: string;
  time: string;
  localDate: Date;
  localTime: string;
  homeContestantId?: string;
  awayContestantId?: string;
  homeContestantName?: string;
  awayContestantName?: string;
  homeContestantOfficialName?: string;
  awayContestantOfficialName?: string;
  homeContestantShortName?: string;
  awayContestantShortName?: string;
  homeContestantCode?: string;
  awayContestantCode?: string;
  numberOfPeriods: number;
  periodLength: number;
  nextMatchWinnerId?: string;
  overtimeLength?: number;
  optaBetting?: string;
  nextMatchLoserId?: string;
  var?: string;
  homeContestantPhrase?: string;
  awayContestantPhrase?: string;
}

export interface TournamentCalendar {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  lastUpdated: Date;
}
