import 'dotenv/config';

import { Soccer } from '../src/index.js';
import expect from 'expect.js';

const TOURNAMENT_ID = '4lp7vq583c95jwjhaohqbl9g4'; // 2024 Euros...

const soccer = new Soccer();

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
});
