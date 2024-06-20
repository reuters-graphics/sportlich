export interface Data {
  squad: Squad[];
  lastUpdated: Date;
}

export interface Squad {
  contestantId: string;
  contestantName: string;
  contestantShortName: string;
  contestantClubName: string;
  contestantCode: string;
  tournamentCalendarId: string;
  tournamentCalendarStartDate: string;
  tournamentCalendarEndDate: string;
  competitionName: string;
  competitionId: string;
  venueName: string;
  venueId: string;
  person: Person[];
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  shortFirstName?: string;
  shortLastName?: string;
  matchName: string;
  nationality: string;
  nationalityId: string;
  position?: string;
  type: string;
  placeOfBirth?: string;
  shirtNumber?: number;
  active: string;
  secondNationality?: string;
  secondNationalityId?: string;
  knownName?: string;
}
