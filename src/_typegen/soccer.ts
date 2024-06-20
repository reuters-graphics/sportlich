import 'dotenv/config';

import { TYPE_ROOT, generateTypes } from './utils/genTypes';

import { Soccer } from '../apis/soccer';
import flatten from 'lodash/flattenDeep';
import { generateIndex } from './utils/genIndex';
import path from 'path';

const TOURNAMENT_EUROS_2020 = 'cnqwzc1jx33qoyfgyoorl0yqx';
const TOURNAMENT_WORLD_CUP_2022 = '2a8elwzsufmguwymxbshcx756';
const TOURNAMENT_EUROS_2024 = '4lp7vq583c95jwjhaohqbl9g4';

const maxAge = 60 * 60 * 24 * 365;

const soccer = new Soccer({ cache: true });

const genTypes = async () => {
  const calendar = await soccer.tournamentCalendar({ maxAge });
  await generateTypes([calendar], 'tournamentCalendar', 'soccer');

  const schedules = [
    await soccer.tournamentSchedule(TOURNAMENT_EUROS_2020, { maxAge }),
    await soccer.tournamentSchedule(TOURNAMENT_WORLD_CUP_2022, { maxAge }),
    await soccer.tournamentSchedule(TOURNAMENT_EUROS_2024, { maxAge }),
  ];
  await generateTypes(schedules, 'tournamentSchedule', 'soccer', {
    inferEnums: true,
  });

  const ALL_TOURNAMENT_CALENDAR_IDS = schedules.map(
    (sked) => sked.tournamentCalendar.id
  );

  const ALL_COMPETITION_IDS = schedules.map((sked) => sked.competition.id);

  const ALL_MATCH_IDS = flatten(
    schedules.map((schedule) => {
      return schedule.matchDate.map((matchDate) => {
        return matchDate.match.map((match) => match.id);
      });
    })
  );

  const ALL_PAST_MATCH_IDS = flatten(
    schedules.map((schedule) => {
      return schedule.matchDate
        .filter((matchDate) => {
          const now = new Date();
          const awhileAgo = new Date(now);
          awhileAgo.setDate(now.getDate() - 1); // At least a day old...
          return awhileAgo.getTime() > new Date(matchDate.date).getTime();
        })
        .map((matchDate) => {
          return matchDate.match.map((match) => match.id);
        });
    })
  );

  const matches = await Promise.all(
    ALL_MATCH_IDS.map((id) => soccer.match(id, { maxAge }))
  );
  await generateTypes(matches, 'match', 'soccer', { inferEnums: true });

  // const detailedMatches = await Promise.all(ALL_MATCH_IDS.map(id => soccer.matchDetailed(id, { maxAge })));
  // await generateTypes(detailedMatches, 'matchDetailed', 'soccer', { inferEnums: true });

  const tournamentCalendars = await Promise.all(
    schedules.map((sked) =>
      soccer.matchTournamentCalendar(sked.tournamentCalendar.id, { maxAge })
    )
  );
  await generateTypes(tournamentCalendars, 'matchTournamentCalendar', 'soccer');

  const matchStats = await Promise.all(
    ALL_PAST_MATCH_IDS.map((id) => soccer.matchStats(id, { maxAge }))
  );
  await generateTypes(matchStats, 'matchStats', 'soccer');

  const matchStatsDetailed = await Promise.all(
    ALL_PAST_MATCH_IDS.map((id) => soccer.matchStatsDetailed(id, { maxAge }))
  );
  await generateTypes(matchStatsDetailed, 'matchStatsDetailed', 'soccer');

  const matchPreview = await Promise.all(
    ALL_PAST_MATCH_IDS.map((id) => soccer.matchPreview(id, { maxAge }))
  );
  await generateTypes(matchPreview, 'matchPreview', 'soccer');

  const commentary = await Promise.all(
    ALL_PAST_MATCH_IDS.map((id) => soccer.commentary(id, { maxAge }))
  );
  await generateTypes(commentary, 'commentary', 'soccer', { inferEnums: true });

  const venues = await Promise.all(
    ALL_TOURNAMENT_CALENDAR_IDS.map((id) =>
      soccer.venues('tmcl', id, { maxAge })
    )
  );
  await generateTypes(venues, 'venues', 'soccer');

  const squads = await Promise.all(
    ALL_TOURNAMENT_CALENDAR_IDS.map((id) => soccer.squads(id, { maxAge }))
  );
  await generateTypes(squads, 'squads', 'soccer');

  const team = await Promise.all(
    ALL_TOURNAMENT_CALENDAR_IDS.map((id) => soccer.team(id, { maxAge }))
  );
  await generateTypes(team, 'team', 'soccer');

  const standings = await Promise.all(
    ALL_TOURNAMENT_CALENDAR_IDS.map((id) => soccer.standings(id, { maxAge }))
  );
  await generateTypes(standings, 'standings', 'soccer');

  const rankings = await Promise.all(
    ALL_TOURNAMENT_CALENDAR_IDS.map((id) => soccer.rankings(id, { maxAge }))
  );
  await generateTypes(rankings, 'rankings', 'soccer');

  const topPerformers = await Promise.all(
    ALL_TOURNAMENT_CALENDAR_IDS.map((id) =>
      soccer.topPerformers(id, { maxAge })
    )
  );
  await generateTypes(topPerformers, 'topPerformers', 'soccer');

  const trophies = await Promise.all(
    ALL_COMPETITION_IDS.map((id) => soccer.trophies(id, { maxAge }))
  );
  await generateTypes(trophies, 'trophies', 'soccer');

  const PLAYER_IDS = flatten(
    squads.map((s) => s.squad.map((s) => s.person.map((p) => p.id)))
  );

  const playerCareer = await Promise.all(
    PLAYER_IDS.slice(-10).map((id) => soccer.playerCareer(id, { maxAge }))
  );
  await generateTypes(playerCareer, 'playerCareer', 'soccer');

  await generateIndex(path.join(TYPE_ROOT, 'soccer'));
};

genTypes();
