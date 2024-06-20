export interface Data {
  matchInfo: MatchInfo;
  liveData: LiveData;
}

export interface LiveData {
  matchDetails: MatchDetails;
  goal?: Goal[];
  card?: Card[];
  substitute?: Substitute[];
  matchDetailsExtra?: MatchDetailsExtra;
  VAR?: Var[];
  missedPen?: MissedPen[];
  penaltyShot?: PenaltyShot[];
}

export interface Var {
  contestantId: string;
  periodId: number;
  timeMin: number;
  timeMinSec: string;
  lastUpdated: Date;
  timestamp: Date;
  type: VarReason;
  decision: Decision;
  outcome: VAROutcome;
  playerId: string;
  playerName: string;
  optaEventId: string;
}

export enum Decision {
  Cancelled = 'Cancelled',
  Confirmed = 'Confirmed',
}

export enum VAROutcome {
  CardUpgraded = 'Card upgraded',
  Goal = 'Goal',
  NoGoal = 'No goal',
  NoPenalty = 'No penalty',
  Penalty = 'Penalty',
}

export enum VarReason {
  CardUpgrade = 'Card upgrade',
  GoalAwarded = 'Goal awarded',
  GoalNotAwarded = 'Goal not awarded',
  PenaltyAwarded = 'Penalty awarded',
  PenaltyNotAwarded = 'Penalty not awarded',
}

export interface Card {
  contestantId: string;
  periodId: number;
  timeMin: number;
  timeMinSec: string;
  lastUpdated: Date;
  timestamp: Date;
  type: CardType;
  playerId?: string;
  playerName?: string;
  optaEventId: string;
  cardReason: CardReason;
  teamOfficialId?: string;
  officialName?: string;
}

export enum CardReason {
  Argument = 'Argument',
  Dissent = 'Dissent',
  Encroachment = 'Encroachment',
  EnteringField = 'Entering field',
  ExcessiveCelebration = 'Excessive celebration',
  ExtraFlagToChecker = 'Extra flag to checker',
  Foul = 'Foul',
  FoulAndAbusiveLanguage = 'Foul and Abusive Language',
  Handball = 'Handball',
  NotRetreating = 'Not Retreating',
  NotVisible = 'Not visible',
  OffTheBallFoul = 'Off the ball foul',
  OtherReason = 'Other reason',
  PersistentInfringement = 'Persistent Infringement',
  ProfessionalFoulHandball = 'Professional Foul Handball',
  ProfessionalFoulLastMan = 'Professional Foul Last Man',
  SeriousFoul = 'Serious Foul',
  Simulation = 'Simulation',
  TacticalFoul = 'Tactical Foul',
  TimeWasting = 'Time wasting',
}

export enum CardType {
  RC = 'RC',
  Y2C = 'Y2C',
  Yc = 'YC',
}

export interface Goal {
  contestantId: string;
  periodId: number;
  timeMin: number;
  timeMinSec: string;
  lastUpdated: Date;
  timestamp: Date;
  type: GoalType;
  scorerId: string;
  scorerName: string;
  optaEventId: string;
  homeScore: number;
  awayScore: number;
  assistPlayerId?: string;
  assistPlayerName?: string;
  secondAssistPlayerId?: string;
  ocSecondAssistPlayerId?: string;
  opSecondAssistPlayerId?: string;
  secondAssistPlayerName?: string;
  varReviewed?: Neutral;
  originalDecision?: VarReason;
}

export enum GoalType {
  G = 'G',
  Og = 'OG',
  PG = 'PG',
}

export enum Neutral {
  No = 'no',
  Yes = 'yes',
}

export interface MatchDetails {
  periodId: number;
  matchStatus: MatchStatus;
  winner?: Winner;
  matchLengthMin?: number;
  matchLengthSec?: number;
  period?: Period[];
  scores?: Scores;
  delay?: string;
  varReason?: VarReason;
  contestantId?: string;
  playerId?: string;
}

export enum MatchStatus {
  Fixture = 'Fixture',
  Played = 'Played',
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
  total: Et;
  et?: Et;
  pen?: Et;
}

export interface Et {
  home: number;
  away: number;
}

export enum Winner {
  Away = 'away',
  Draw = 'draw',
  Home = 'home',
}

export interface MatchDetailsExtra {
  attendance: string;
  matchOfficial: MatchOfficial[];
}

export interface MatchOfficial {
  id: string;
  type: MatchOfficialType;
  firstName: string;
  lastName: string;
  shortFirstName?: string;
  shortLastName?: string;
  knownName?: string;
}

export enum MatchOfficialType {
  AssistantReferee1 = 'Assistant referee 1',
  AssistantReferee2 = 'Assistant referee 2',
  AssistantVAROfficial = 'Assistant VAR Official',
  FourthOfficial = 'Fourth official',
  Main = 'Main',
  VideoAssistantReferee = 'Video Assistant Referee',
}

export interface MissedPen {
  contestantId: string;
  periodId: number;
  timeMin: number;
  timeMinSec: string;
  lastUpdated: Date;
  timestamp?: Date;
  type: MissedPenType;
  playerId: string;
  playerName: string;
  optaEventId: string;
}

export enum MissedPenType {
  PS = 'PS',
  Pm = 'PM',
}

export interface PenaltyShot {
  contestantId: string;
  timeMin: number;
  timeMinSec: string;
  lastUpdated: Date;
  timestamp: Date;
  outcome: PenaltyShotOutcome;
  playerId: string;
  scorerName: string;
  teamPenaltyNumber: number;
  optaEventId: string;
}

export enum PenaltyShotOutcome {
  Missed = 'missed',
  Saved = 'saved',
  Scored = 'scored',
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
  subReason: SubReason;
}

export enum SubReason {
  Injury = 'Injury',
  Tactical = 'Tactical',
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
  attendanceInfo?: AttendanceInfo;
  numberOfPeriods: number;
  periodLength: number;
  lastUpdated: Date;
  description?: string;
  sport: Sport;
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

export enum AttendanceInfo {
  LimitedAudience = 'Limited Audience',
}

export interface Competition {
  id: CompetitionID;
  name: CompetitionName;
  knownName: KnownName;
  competitionCode: CompetitionCode;
  competitionFormat: CompetitionFormat;
  country: CompetitionCountry;
}

export enum CompetitionCode {
  EUC = 'EUC',
  Woc = 'WOC',
}

export enum CompetitionFormat {
  InternationalCup = 'International cup',
}

export interface CompetitionCountry {
  id: CountryID;
  name: CountryName;
}

export enum CountryID {
  The7Yasa43Laq1Nb2E6F8Bfuvxed = '7yasa43laq1nb2e6f8bfuvxed',
  The7Yiwjcnhat6Jo3F901H266Cwl = '7yiwjcnhat6jo3f901h266cwl',
}

export enum CountryName {
  Europe = 'Europe',
  World = 'World',
}

export enum CompetitionID {
  The70Excpe1Synn9Kadnbppahdn7 = '70excpe1synn9kadnbppahdn7',
  The8Tddm56Zbasf57Jkkay4Kbf11 = '8tddm56zbasf57jkkay4kbf11',
}

export enum KnownName {
  FIFAWorldCup = 'FIFA World Cup',
  UEFAEuropeanChampionshipFinals = 'UEFA European Championship Finals',
}

export enum CompetitionName {
  FIFAWorldCup = 'FIFA World Cup',
  UEFAEuropeanChampionship = 'UEFA European Championship',
}

export interface Contestant {
  id?: string;
  name?: string;
  shortName?: string;
  officialName?: string;
  code?: string;
  position: Winner;
  country?: ContestantCountry;
  phrase?: string;
}

export interface ContestantCountry {
  id: string;
  name: string;
}

export interface Ruleset {
  id: RulesetID;
  name: RulesetName;
}

export enum RulesetID {
  The79Plas4983031Idr6Vw83Nuel = '79plas4983031idr6vw83nuel',
}

export enum RulesetName {
  Men = 'Men',
}

export interface Series {
  id: string;
  formatId: SeriesFormatID;
  name: SeriesName;
}

export enum SeriesFormatID {
  Choy4837Jf63M90Uh34Q2Jmxh = 'choy4837jf63m90uh34q2jmxh',
  Ci6Ciikoil0Ifcuis37Z8H7Md = 'ci6ciikoil0ifcuis37z8h7md',
  Cipycsizrs0X62Qgt93Uy6Thx = 'cipycsizrs0x62qgt93uy6thx',
  Cj9Uw0Tk6Lcyj5Rieqpmrvys5 = 'cj9uw0tk6lcyj5rieqpmrvys5',
  Cjtgc63Nsarjt7P60Xkcnillh = 'cjtgc63nsarjt7p60xkcnillh',
  Ckc8S9Q7Mlwzwp8Hhr4S5Ds5X = 'ckc8s9q7mlwzwp8hhr4s5ds5x',
  Ckw6Rfrzidje6Ggngkljf8E6T = 'ckw6rfrzidje6ggngkljf8e6t',
  Cmb6Lscxiyticnqnsarymfkr9 = 'cmb6lscxiyticnqnsarymfkr9',
}

export enum SeriesName {
  GroupA = 'Group A',
  GroupB = 'Group B',
  GroupC = 'Group C',
  GroupD = 'Group D',
  GroupE = 'Group E',
  GroupF = 'Group F',
  GroupG = 'Group G',
  GroupH = 'Group H',
}

export interface Sport {
  id: SportID;
  name: SportName;
}

export enum SportID {
  The289U5Typ3Vp4Ifwh5Thalohmq = '289u5typ3vp4ifwh5thalohmq',
}

export enum SportName {
  Soccer = 'Soccer',
}

export interface Stage {
  id: string;
  formatId: StageFormatID;
  startDate: string;
  endDate: string;
  name: StageName;
}

export enum StageFormatID {
  Ckakxifvsalxwzq21D3Lw41Jp = 'ckakxifvsalxwzq21d3lw41jp',
  Dg3V7Qo5Acoprtjj4Ozm9Meol = 'dg3v7qo5acoprtjj4ozm9meol',
  The2Hrcobqge36Fgp0Q3Wmc26F9X = '2hrcobqge36fgp0q3wmc26f9x',
  The614Sqb9421Oaflw5Mpvvm9Uj9 = '614sqb9421oaflw5mpvvm9uj9',
  The7Qvlyz9Cxqznk08Pldz0Fs4ID = '7qvlyz9cxqznk08pldz0fs4id',
  The86P6Pz5Rcsdbz4Cklvfwtzrv9 = '86p6pz5rcsdbz4cklvfwtzrv9',
}

export enum StageName {
  Final = 'Final',
  GroupStage = 'Group Stage',
  QuarterFinals = 'Quarter-finals',
  SemiFinals = 'Semi-finals',
  The3RDPlaceFinal = '3rd Place Final',
  The8ThFinals = '8th Finals',
}

export interface TournamentCalendar {
  id: TournamentCalendarID;
  startDate: StartDate;
  endDate: EndDate;
  name: string;
}

export enum EndDate {
  The20210711Z = '2021-07-11Z',
  The20221218Z = '2022-12-18Z',
  The20240714Z = '2024-07-14Z',
}

export enum TournamentCalendarID {
  Cnqwzc1Jx33Qoyfgyoorl0Yqx = 'cnqwzc1jx33qoyfgyoorl0yqx',
  The2A8Elwzsufmguwymxbshcx756 = '2a8elwzsufmguwymxbshcx756',
  The4Lp7Vq583C95Jwjhaohqbl9G4 = '4lp7vq583c95jwjhaohqbl9g4',
}

export enum StartDate {
  The20210611Z = '2021-06-11Z',
  The20221120Z = '2022-11-20Z',
  The20240614Z = '2024-06-14Z',
}

export interface Venue {
  id: string;
  neutral: Neutral;
  longName: string;
  shortName: string;
}
