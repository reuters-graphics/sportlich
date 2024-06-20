export interface Data {
  sport: Ruleset;
  ruleset: Ruleset;
  competition: Competition;
  tournamentCalendar: TournamentCalendar;
  stage: Stage[];
  lastUpdated: Date;
}

export interface Competition {
  id: string;
  name: string;
  knownName: string;
}

export interface Ruleset {
  id: string;
  name: string;
}

export interface Stage {
  id: string;
  formatId: string;
  name: string;
  vertical: number;
  startDate: string;
  endDate: string;
  division: Division[];
  correction: any[];
}

export interface Division {
  type: string;
  groupId?: string;
  groupName: string;
  horizontal?: number;
  ranking: Ranking[];
}

export interface Ranking {
  rank: number;
  rankStatus?: string;
  rankId?: string;
  lastRank?: number;
  contestantId: string;
  contestantName: string;
  contestantShortName: string;
  contestantClubName: string;
  contestantCode: string;
  points?: number;
  matchesPlayed?: number;
  matchesWon?: number;
  matchesLost?: number;
  matchesDrawn?: number;
  goalsFor?: number;
  goalsAgainst?: number;
  goaldifference?: string;
  lastSix?: string;
  venueId?: string;
  venueName?: string;
  minimumAttendance?: number;
  maximumAttendance?: number;
  averageAttendance?: number;
  capacity?: number;
  percentSold?: string;
  goals0?: number;
  goals1?: number;
  goals2?: number;
  goals3?: number;
  goals4?: number;
  goals5?: number;
  goals6?: number;
  goals7?: number;
  goalsMoreThan7?: number;
  goalsAverage?: string;
}

export interface TournamentCalendar {
  id: string;
  startDate: string;
  endDate: string;
  name: string;
}
