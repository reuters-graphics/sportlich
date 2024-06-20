export interface Data {
  competition: Competition;
  tournamentCalendar: TournamentCalendar;
  matchData: MatchDatum[];
  team: Team[];
  lastUpdated: Date;
}

export interface Competition {
  id: string;
  name: string;
  knownName?: string;
}

export interface MatchDatum {
  stat: Stat[];
  teamData: TeamDatum[];
  id?: string;
}

export interface Stat {
  type: string;
  value: string;
}

export interface TeamDatum {
  side: string;
  id?: string;
}

export interface Team {
  name: string;
  player: Player[];
  stat: Stat[];
  id: string;
}

export interface Player {
  name: string;
  position: string;
  stat: Stat[];
  id: string;
}

export interface TournamentCalendar {
  id: string;
  startDate: string;
  endDate: string;
  name: string;
}
