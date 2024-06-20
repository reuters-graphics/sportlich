import 'dotenv/config';

import { Soccer } from '../src/index.js';
import expect from 'expect.js';

const TOURNAMENT_ID = '4lp7vq583c95jwjhaohqbl9g4'; // 2024 Euros...

const soccer = new Soccer();

let tournamentCalendar: Awaited<ReturnType<Soccer['matchTournamentCalendar']>>;

describe('test Sportlich', function () {
  this.timeout(15000);
  it('Should get tournament calendar', async function () {
    const calendar = await soccer.tournamentCalendar();
    expect(calendar?.competition?.[0]?.id).to.not.be(undefined);
  });

  it('Should get tournament schedule', async function () {
    const schedule = await soccer.tournamentSchedule(TOURNAMENT_ID);
    expect(schedule?.matchDate?.[0]?.match?.[0]?.id).to.not.be(undefined);
  });

  it('Should get squads', async function () {
    const squads = await soccer.squads(TOURNAMENT_ID);
    expect(squads?.squad?.[0]?.contestantId).to.not.be(undefined);
  });

  it('Should get match tournament calendar', async function () {
    tournamentCalendar = await soccer.matchTournamentCalendar(TOURNAMENT_ID);
    expect(tournamentCalendar?.match?.[0].matchInfo?.id).to.not.be(undefined);
  });

  it('Should get standings', async function () {
    const standings = await soccer.standings(TOURNAMENT_ID);
    expect(standings?.stage?.[0]?.id).to.not.be(undefined);
  });

  it('Should get rankings', async function () {
    const rankings = await soccer.rankings(TOURNAMENT_ID);
    expect(rankings?.team?.[0].id).to.not.be(undefined);
  });

  it('Should get venues', async function () {
    const venues = await soccer.venues('tmcl', TOURNAMENT_ID);
    expect(venues?.venue?.[0]?.id).to.not.be(undefined);
  });

  it('Should get trophies', async function () {
    const competitionId = tournamentCalendar.match[0].matchInfo.competition.id;
    const trophies = await soccer.trophies(competitionId);
    expect(trophies?.competition?.[0].id).to.not.be(undefined);
  });

  it('Should get commentary', async function () {
    const playedMatch = tournamentCalendar.match.find((match) => {
      return match?.liveData?.matchDetails?.matchStatus === 'Played';
    });
    if (!playedMatch) throw Error('No played matches found');
    const commentary = await soccer.commentary(playedMatch.matchInfo.id);
    expect(commentary?.messages?.[0]?.message).to.not.be(undefined);
  });

  it('Should get match stats', async function () {
    const playedMatch = tournamentCalendar.match.find((match) => {
      return match?.liveData?.matchDetails?.matchStatus === 'Played';
    });
    if (!playedMatch) throw Error('No played matches found');
    const stats = await soccer.matchStats(playedMatch.matchInfo.id);
    expect(stats?.liveData?.lineUp?.[0]?.formationUsed).to.not.be(undefined);
  });

  it('Should get top performers', async function () {
    const topPerformers = await soccer.topPerformers(TOURNAMENT_ID);
    expect(
      topPerformers?.playerTopPerformers?.ranking?.[0].player?.[0].id
    ).to.not.be(undefined);
  });
});
