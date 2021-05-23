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
| `-c, --cache`    | Cache API calls in a static file. Future calls to the same exact endpoints/params will use the cached result without relying on the network/API (unless the `--nocache` parameter is set; see below).  |
| `-n, --nocache`  | Do not utilize the API cache. (In general, the cache can be cleared by running `sportlich clean`)                                                                                                      |

### Examples

Some soccer-specific examples (since that's currently the most fleshed out API).

To get a list of all tournaments

```
sportlich soccer tournamentcalendar
```

To get the schedule for a particular tournament and only show the first result of each array in the response JSON:

```
sportlich soccer tournamentschedule 3pgp7unogn1qfsg93jmi7x10q -s
```

### Module

[TODO: Make module work]

## Testing

```
yarn test
```

[TODO: tests]
