[![npm version](https://badge.fury.io/js/%40reuters-graphics%2Fsportlich.svg)](https://badge.fury.io/js/%40reuters-graphics%2Fsportlich) [![Reuters open source software](https://badgen.net/badge/Reuters/open%20source/?color=ff8000)](https://github.com/reuters-graphics/)

An OPTA SDAPI client library for all your sportsball needs.

## Quickstart

Install it.

```bash
npm i @reuters-graphics/sportlich
```

Use it.

```javascript
import { Soccer } from '@reuters-graphics/sportlich';

const soccer = new Soccer({
  optaOutletAuth: process.env.OPTA_OUTLET_AUTH,
  optaSecretKey: process.env.OPTA_SECRET_KEY,
});

const calendar = await soccer.tournamentCalendar();
```
