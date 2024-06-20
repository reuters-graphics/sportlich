export interface Data {
  lastUpdated: Date;
  competition: Competition;
  tournamentCalendar: TournamentCalendar;
  playerTopPerformers: PlayerTopPerformers;
  teamTopPerformers: TeamTopPerformers;
}

export interface Competition {
  id: string;
  name: string;
  knownName: string;
}

export interface PlayerTopPerformers {
  ranking: PlayerTopPerformersRanking[];
}

export interface PlayerTopPerformersRanking {
  name: string;
  player: Player[];
}

export interface Player {
  contestantId: string;
  contestantName: string;
  id: string;
  firstName: string;
  lastName: string;
  shortFirstName: string;
  shortLastName: string;
  matchName: string;
  rank: number;
  value: number;
  knownName?: string;
}

export interface TeamTopPerformers {
  ranking: TeamTopPerformersRanking[];
}

export interface TeamTopPerformersRanking {
  name: string;
  team: Team[];
}

export interface Team {
  value: number;
  id: string;
  name: string;
  rank: number;
}

export interface TournamentCalendar {
  endDate: string;
  id: string;
  startDate: string;
  name: string;
}
