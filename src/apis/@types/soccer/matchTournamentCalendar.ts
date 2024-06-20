export interface Data {
  match: Match[];
}

export interface Match {
  matchInfo: MatchInfo;
  liveData: LiveData;
}

export interface LiveData {
  matchDetails: MatchDetails;
  goal?: Goal[];
  card?: Card[];
  substitute?: Substitute[];
  penaltyShot?: PenaltyShot[];
  matchDetailsExtra?: MatchDetailsExtra;
  missedPen?: MissedPen[];
  VAR?: Var[];
}

export interface Var {
  contestantId: string;
  periodId: number;
  timeMin: number;
  timeMinSec: string;
  lastUpdated: Date;
  timestamp: Date;
  type: string;
  decision: string;
  outcome: string;
  playerId: string;
  playerName: string;
  optaEventId: string;
}

export interface Card {
  contestantId: string;
  periodId: number;
  timeMin: number;
  timeMinSec: string;
  lastUpdated: Date;
  timestamp: Date;
  type: string;
  playerId?: string;
  playerName?: string;
  optaEventId: string;
  cardReason: string;
  teamOfficialId?: string;
  officialName?: string;
}

export interface Goal {
  contestantId: string;
  periodId: number;
  timeMin: number;
  timeMinSec: string;
  lastUpdated: Date;
  timestamp: Date;
  type: string;
  scorerId: string;
  scorerName: string;
  assistPlayerId?: string;
  assistPlayerName?: string;
  optaEventId: string;
  homeScore: number;
  awayScore: number;
  secondAssistPlayerId?: string;
  ocSecondAssistPlayerId?: string;
  opSecondAssistPlayerId?: string;
  secondAssistPlayerName?: string;
  varReviewed?: string;
  originalDecision?: string;
}

export interface MatchDetails {
  periodId: number;
  matchStatus: string;
  winner?: string;
  matchLengthMin?: number;
  matchLengthSec?: number;
  period?: Period[];
  scores?: Scores;
  delay?: string;
  varReason?: string;
  contestantId?: string;
  playerId?: string;
}

export interface Period {
  id: number;
  start: Date;
  end: Date;
  lengthMin: number;
  lengthSec: number;
  announcedInjuryTime?: number;
}

export interface Scores {
  ht: Et;
  ft: Et;
  et?: Et;
  pen?: Et;
  total: Et;
}

export interface Et {
  home: number;
  away: number;
}

export interface MatchDetailsExtra {
  attendance?: string;
  matchOfficial: MatchOfficial[];
}

export interface MatchOfficial {
  id: string;
  type: string;
  firstName: string;
  lastName: string;
  shortFirstName?: string;
  shortLastName?: string;
  knownName?: string;
}

export interface MissedPen {
  contestantId: string;
  periodId: number;
  timeMin: number;
  timeMinSec: string;
  lastUpdated: Date;
  timestamp?: Date;
  type: string;
  playerId: string;
  playerName: string;
  optaEventId: string;
}

export interface PenaltyShot {
  contestantId: string;
  timeMin: number;
  timeMinSec: string;
  lastUpdated: Date;
  timestamp: Date;
  outcome: string;
  playerId: string;
  scorerName: string;
  teamPenaltyNumber: number;
  optaEventId: string;
}

export interface Substitute {
  contestantId: string;
  periodId: number;
  timeMin: number;
  timeMinSec: string;
  lastUpdated: Date;
  timestamp: Date;
  playerOnId: string;
  playerOnName: string;
  playerOffId: string;
  playerOffName: string;
  subReason: string;
}

export interface MatchInfo {
  id: string;
  coverageLevel: string;
  date: string;
  time: string;
  localDate: Date;
  localTime: string;
  attendanceInfoId?: string;
  attendanceInfo?: string;
  numberOfPeriods: number;
  periodLength: number;
  overtimeLength?: number;
  lastUpdated: Date;
  description?: string;
  sport: Ruleset;
  ruleset: Ruleset;
  competition: Competition;
  tournamentCalendar: TournamentCalendar;
  stage: Stage;
  contestant: Contestant[];
  venue: Venue;
  nextMatchWinnerId?: string;
  week?: string;
  series?: Series;
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
  id?: string;
  name?: string;
  shortName?: string;
  officialName?: string;
  code?: string;
  position: string;
  country?: Ruleset;
  phrase?: string;
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
