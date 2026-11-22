# CLAUDE.md

Context for Claude Code sessions on this repository.

## Project

Tama'chi: a mini Tamagotchi-like mobile app in React Native. Tama, a white and ginger cat, hand-drawn and animated frame by frame.

**Goal: recruiter showcase.** The repository is public. Everything pushed must be clean and professional: code, commits, docs.

Core rules of the game: feed, play, sleep. Gauges decrease slowly with a floor. Tama never dies; the player is never punished for being away.

## Planned stack

- Expo SDK 58, TypeScript (strict)
- Expo Router, Reanimated, Zustand
- Jest for tests
- pnpm 11 as package manager
- Animation pipeline: Procreate → PNG → WebP sprite sheets

Architecture intent: the game engine is pure TypeScript (no React, no Expo imports) and fully unit-tested; UI consumes it through the store.

## Constraints

- **Mobile only** (iOS / Android). No web target.
- **No backend, no account.** No data leaves the device; persistence is local only.
- **No secrets in the repository**, ever (keys, tokens, `.env` files with real values).
- **Hardened pnpm:**
  - exact versions only (no `^` or `~`)
  - minimum release age of 7 days before installing a freshly published version (`minimumReleaseAge`)
  - dependency install scripts blocked by default; allow explicitly only when required
  - lockfile committed
  - these settings must live in the configuration file that pnpm 11 actually reads: check the official pnpm documentation at configuration time, do not assume the file or syntax
- **GitHub Actions pinned by full commit SHA** (with the version as a trailing comment), never by tag or branch.

## Maintenance notes

- The `react-dom` override in `pnpm-workspace.yaml` must match the exact `react` version. Update it on every Expo SDK change.
- Planned on 2026-11-24: update `expo` (58.0.26) and `expo-router` (58.0.32), held back by the 7-day release age rule. Run `pnpm exec expo install --fix`, re-pin exact versions, dedicated commit.

## Commit rules

- One line only, Conventional Commits format: `type(scope): description`
  (e.g. `feat(engine): add hunger decay`, `docs: rewrite README`).
- No body.
- No `Co-Authored-By` line, no tool attribution.
- English, imperative mood, lowercase description.

## Working style

- Small steps, one concern at a time.
- **Liz validates before every push.** Never push without explicit approval.
- Show changes (diff or file content) before committing.
- End every task with a short educational recap (what was done, why, how it works), written so it can be copied into a notebook.
- Conversation in French by default; code, commits and docs in English.
