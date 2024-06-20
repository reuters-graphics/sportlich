export interface Data {
  contestant: Contestant[];
  lastUpdated: Date;
}

export interface Contestant {
  id: string;
  name: string;
  shortName: string;
  officialName: string;
  code: string;
  type: string;
  teamType: string;
  countryId: string;
  country: string;
  status: string;
  city: string;
  addressZip?: string;
  founded: string;
  lastUpdated: Date;
}
