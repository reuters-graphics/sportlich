export interface Data {
  matchInfo: MatchInfo;
  previousMeetings: PreviousMeetings;
  previousMeetingsAnyComp: PreviousMeetingsAnyComp;
  form: Form[];
  formAnyComp: FormAnyComp[];
}

export interface Form {
  contestantId?: string;
  lastSix?: string;
  match: FormMatch[];
}

export interface FormMatch {
  contestants: PurpleContestants;
  goal: PurpleGoal[];
  id: string;
  date: string;
}

export interface PurpleContestants {
  homeContestantId: string;
  homeContestantName: string;
  homeContestantOfficialName: string;
  homeContestantShortName?: string;
  homeContestantCode?: string;
  awayContestantId: string;
  awayContestantName: string;
  awayContestantOfficialName: string;
  awayContestantShortName?: string;
  awayContestantCode?: string;
  homeScore: string;
  awayScore: string;
}

export interface PurpleGoal {
  type: string;
  scorerId: string;
  scorerName: string;
  scorerFirstName: string;
  scorerLastName: string;
  scorerShortFirstName?: string;
  scorerShortLastName?: string;
  contestantId: string;
  periodId: number;
  timeMin: number;
  scorerKnownName?: string;
  assistPlayerId?: string;
  assistPlayerName?: string;
  assistPlayerFirstName?: string;
  assistPlayerLastName?: string;
  assistPlayerShortFirstName?: string;
  assistPlayerShortLastName?: string;
  assistPlayerKnownName?: string;
}

export interface FormAnyComp {
  contestantId: string;
  lastSix: string;
  match: FormAnyCompMatch[];
}

export interface FormAnyCompMatch {
  contestants: FluffyContestants;
  goal: FluffyGoal[];
  id: string;
  date: string;
  competitionId: string;
  competitionName: string;
  tournamentCalendarId: string;
  tournamentCalendarName: string;
  competitionCode: string;
}

export interface FluffyContestants {
  homeContestantId: string;
  homeContestantName: string;
  homeContestantOfficialName: string;
  homeContestantShortName: string;
  homeContestantCode: string;
  awayContestantId: string;
  awayContestantName: string;
  awayContestantOfficialName: string;
  awayContestantShortName: string;
  awayContestantCode: string;
  homeScore: string;
  awayScore: string;
}

export interface FluffyGoal {
  type: string;
  scorerId: string;
  scorerName: string;
  scorerFirstName: string;
  scorerLastName: string;
  scorerShortFirstName: string;
  scorerShortLastName: string;
  assistPlayerId?: string;
  assistPlayerName?: string;
  assistPlayerFirstName?: string;
  assistPlayerLastName?: string;
  assistPlayerShortFirstName?: string;
  assistPlayerShortLastName?: string;
  contestantId: string;
  periodId: number;
  timeMin: number;
  assistPlayerKnownName?: string;
  scorerKnownName?: string;
}

export interface MatchInfo {
  id: string;
  coverageLevel: string;
  date: string;
  time: string;
  localDate: Date;
  localTime: string;
  week?: string;
  attendanceInfoId?: string;
  attendanceInfo?: string;
  numberOfPeriods: number;
  periodLength: number;
  lastUpdated: Date;
  description: string;
  sport: Ruleset;
  ruleset: Ruleset;
  competition: Competition;
  tournamentCalendar: TournamentCalendar;
  stage: Stage;
  series?: Series;
  contestant: Contestant[];
  venue: Venue;
  overtimeLength?: number;
  nextMatchWinnerId?: string;
  nextMatchLoserId?: string;
  var?: string;
}

export interface Competition {
  id: string;
  name: string;
  knownName: string;
  competitionCode: string;
  competitionFormat: string;
  country: Ruleset;
}

export interface Ruleset {
  id: string;
  name: string;
}

export interface Contestant {
  id: string;
  name: string;
  shortName: string;
  officialName: string;
  code: string;
  position: string;
  country: Ruleset;
}

export interface Series {
  id: string;
  formatId: string;
  name: string;
}

export interface Stage {
  id: string;
  formatId: string;
  startDate: string;
  endDate: string;
  name: string;
}

export interface TournamentCalendar {
  id: string;
  startDate: string;
  endDate: string;
  name: string;
}

export interface Venue {
  id: string;
  neutral: string;
  longName: string;
  shortName: string;
}

export interface PreviousMeetings {
  homeContestantWins: number;
  awayContestantWins: number;
  draws: number;
  homeContestantGoals: number;
  awayContestantGoals: number;
  match: PreviousMeetingsMatch[];
}

export interface PreviousMeetingsMatch {
  contestants: FluffyContestants;
  goal: PurpleGoal[];
  id: string;
  date: string;
  competitionCode: string;
  country: string;
  countryId: string;
}

export interface PreviousMeetingsAnyComp {
  homeContestantWins: number;
  awayContestantWins: number;
  draws: number;
  homeContestantGoals: number;
  awayContestantGoals: number;
  match: PreviousMeetingsAnyCompMatch[];
}

export interface PreviousMeetingsAnyCompMatch {
  contestants: FluffyContestants;
  goal: PurpleGoal[];
  id: string;
  date: string;
  competitionId: string;
  competitionName: string;
  tournamentCalendarId: string;
  tournamentCalendarName: string;
  competitionCode: string;
  country?: string;
  countryId?: string;
}
