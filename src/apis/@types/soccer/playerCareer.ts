export interface Data {
  person: Person[];
  lastUpdated: Date;
}

export interface Person {
  membership: Membership[];
  id: string;
  firstName: string;
  lastName: string;
  shortFirstName: string;
  shortLastName: string;
  matchName: string;
  type: string;
  position: string;
  lastUpdated: Date;
  nationality: string;
  nationalityId: string;
  opSecondNationalityId: string;
  dateOfBirth: Date;
  placeOfBirth: string;
  countryOfBirthId: string;
  countryOfBirth: string;
  height: string;
  weight: string;
  foot: string;
  gender: string;
  status: string;
}

export interface Membership {
  stat: Stat[];
  contestantId: string;
  contestantType: string;
  contestantName: string;
  active: string;
  startDate: string;
  role: string;
  type: string;
  transferType?: string;
  endDate?: string;
}

export interface Stat {
  competitionId: string;
  competitionName: string;
  tournamentCalendarId: string;
  tournamentCalendarName: string;
  goals?: number;
  assists?: number;
  penaltyGoals?: number;
  appearances?: number;
  yellowCards?: number;
  secondYellowCards?: number;
  redCards?: number;
  substituteIn?: number;
  substituteOut?: number;
  subsOnBench?: number;
  minutesPlayed?: number;
  shirtNumber?: number;
  competitionFormat: string;
  isFriendly: string;
}
