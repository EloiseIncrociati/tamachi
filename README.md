# Tama'chi

[![CI](https://github.com/EloiseIncrociati/tamachi/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/EloiseIncrociati/tamachi/actions/workflows/ci.yml)

Meet Tama, a small white and ginger cat, hand-drawn and animated frame by frame.

> 🚧 Work in progress, built in public.

## Pitch

Feed, play, sleep. Tama's gauges drop slowly, but Tama never dies and you are never punished for being away.
A small, finished, tested React Native project with a hand-made animation pipeline.

## Scope

**What the app does**

- One creature with 4 to 5 hand-drawn animations
- Three actions: feed, play, sleep
- Gauges that decrease slowly, with a floor
- Local persistence
- A game engine written in pure TypeScript, covered by tests
- An animation pipeline: Procreate → PNG → WebP sprite sheets

**What the app does not do**

- No web version: mobile only
- No backend, no account: no data ever leaves the phone
- No ads, no in-app purchases

## Stack

Expo SDK 58, strict TypeScript, Expo Router, Reanimated, Zustand, Jest, pnpm.

## License

[MIT](LICENSE)
