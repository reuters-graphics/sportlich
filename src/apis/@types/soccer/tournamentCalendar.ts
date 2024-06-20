export interface Data {
  competition: Competition[];
  lastUpdated: Date;
}

export interface Competition {
  id: string;
  ocId: string;
  name: string;
  competitionCode: string;
  displayOrder: number;
  country: string;
  countryId: string;
  countryCode?: string;
  isFriendly: string;
  competitionFormat: string;
  type: string;
  tournamentCalendar: TournamentCalendar[];
  competitionType: string;
  opId?: string;
  knownName?: string;
  sponsorName?: string;
}

export interface TournamentCalendar {
  id: string;
  includesVenues: string;
  ocId: string;
  name: string;
  startDate: string;
  endDate: string;
  active: string;
  lastUpdated: Date;
  stage?: Stage[];
  includesStandings?: string;
}

export interface Stage {
  id: string;
  ocId: string;
  name: string;
  drawDate?: string;
  startDate: string;
  endDate: string;
  lastUpdated: Date;
  includesStandings?: string;
  formatId?: string;
  vertical?: number;
  series?: Series[];
  numberOfSubstitutes?: string;
  horizontal?: number;
  phase?: number;
}

export interface Series {
  id: string;
  ocId: string;
  formatId?: string;
  name: string;
  lastUpdated: Date;
  horizontal?: number;
}
