![](badge.svg)

# @reuters-graphics/sportlich

[![npm version](https://badge.fury.io/js/%40reuters-graphics%2Fsportlich.svg)](https://badge.fury.io/js/%40reuters-graphics%2Fsportlich) [![Reuters open source software](https://badgen.net/badge/Reuters/open%20source/?color=ff8000)](https://github.com/reuters-graphics/)

## Quickstart

```bash
yarn add @reuters-graphics/sportlich
```

## CLI

### Build instructions

Build using npm:

```
npm run build
```

Alternatively, to support iterative development, run in watch mode to automatically rebuild on save:

```
npm run watch
```

To run after the cli has been built:

```
node dist/cli.js
```

### Usage

In general, the CLI works by running `sportlich <sportname> <command> [options]`. To get a list of available sports APIs, run:

```
$ sportlich --help
```

To get a list of all available commands within a particular sport, run

```
sportlich <sportname> --help
```

### Common options

All CLI commands generally interface with the Opta API, which returns a JSON response. There are convenience options to make working with this JSON data more manageable:

| Option           | Description                                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `-s, --skeleton` | Show only one value for each array in the response JSON. This is useful for quickly gleaming the overall structure without getting a jumble of thousands of rows.                                      |
| `-r, --raw`      | Show the full prettified JSON value (as returned by JSON.stringify). Without this option, the JSON is printed using Node's default formatter, which can truncate data or apply undesired highlighting. |
| `-f, --filter`   | Filter the JSON response using a JMESPath filter. Refer to [jmespath.org](https://jmespath.org/) for the language specification and examples.                                                          |
| `-c, --cache`    | Cache API calls in a static file. Future calls to the same exact endpoints/params will use the cached result without relying on the network/API (unless the `--nocache` parameter is set; see below).  |
| `-n, --nocache`  | Do not utilize the API cache. (In general, the cache can be cleared by running `sportlich clean`.)                                                                                                     |

### Examples

Some soccer-specific examples (since that's currently the most fleshed out API).

To get a list of all tournaments

```bash
sportlich soccer tournamentcalendar
```

To filter and only show US tournaments

```bash
sportlich soccer tournamentcalendar -c -f 'competition[?contains(`["USA"]`, countryCode)]'
```

To get the schedule for a particular tournament and only show the first result of each array in the response JSON:

```bash
sportlich soccer tournamentschedule 3pgp7unogn1qfsg93jmi7x10q -s
```

To store a particular match within a tournament:

```bash
MATCH=$(sportlich soccer tournamentschedule 3pgp7unogn1qfsg93jmi7x10q -f "matchDate[0].match[0].id")
```

To grab more information about that match (now that it's in an environment variable):

```bash
sportlich soccer match $MATCH
```

Get the most recent match from the EPL

```bash
# Get the EPL
TOURNAMENT=$(sportlich soccer tournamentcalendar -f 'competition[?competitionCode == `"EPL"`] | [0].tournamentCalendar[0].id')

# Get the most recent match in the schedule
MATCH=$(sportlich soccer tournamentschedule $TOURNAMENT -s -f "sort_by(matchDate, &date)[::-1] | [0] | sort_by(match, &date)[::-1] | [0].id")
```

Useful tournament constants

```bash
# Tournaments
EUROS2016=8qik857k4nxbzxbdsjjsiouz9
EUROS2020=cnqwzc1jx33qoyfgyoorl0yqx

WORLDCUP2014=2eqo5ktqlv7pjfd55819ifu74
WORLDCUP2018=bkvkz42omnou98nkjgb3dh0b9
WORLDCUP2022=2a8elwzsufmguwymxbshcx756
```

### Module

[TODO: module docs]

## Adding new API routes

You need to modify code in 2 places:

### `src/apis/{sportname}.js`

Links in the actual code to pull from Opta's API

For instance, to add a soccer route for `/soccerdata/match/{outletAuthKey}`, I would edit `src/apis/soccer.js` and add an async class method to the main `Soccer` class (with a parameter `fixtureUuid` taken from reading the "User Guide" in Opta's documentation):

```javascript
  async match(fixtureUuid) {
    return await this.getUrl(
      `/soccerdata/match/<auth>/${fixtureUuid}/`
    );
  }
```

Here, `<auth>` gets replaced with the `outletAuthKey` automatically.

### `src/clis/{sportname}.js`

Hooks in CLI support for the command

Using our `match` route example from above, we would edit `src/cli/soccer.js` and add an element to the main exported array that looks like this:

```javascript
  [
    "match <fixtureUuid>",
    "Get a fixture or fixture list with match details, such as date, start time, contestants, competition, season, score, result and lineups.",
    (soccer) => soccer.match,
  ],
```

The first element of this subarray is the actual command as recognized by the [`sade`](https://github.com/lukeed/sade) package we use to operate the CLI (notice it has a parameter `<fixtureUuid>` which will get passed to the API). The second element is a description of what the command does (I just copy this word-for-word from Opta's user guide about the particular command in the subtitle). The third element takes a soccer class instance as parameter and returns the function that will run the API code (with no arguments since this is an abstraction).
