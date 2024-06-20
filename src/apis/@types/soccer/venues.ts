export interface Data {
  lastUpdated: Date;
  venue: Venue[];
}

export interface Venue {
  id: string;
  name: string;
  city: string;
  countryId: string;
  country: string;
  countryCode: string;
  address: string;
  opened?: number;
  capacity: number;
  surface: string;
  mapsGeoCodeLatitude: string;
  mapsGeoCodeLongitude: string;
  timeZone: string;
  contestant: Contestant[];
}

export interface Contestant {
  id: string;
  clubName: string;
  type: string;
  teamType: string;
  primary: string;
}
