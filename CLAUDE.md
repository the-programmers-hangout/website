# CLAUDE.md

Guidance for AI agents (and humans) working in this repository.

## Stack

Gatsby + TypeScript + styled-components, with light/dark theming. Content lives in
`src/content/` (Markdown); UI in `src/components`, `src/layouts`, `src/templates`.

## Before you touch the UI

Read **`docs/design/web-interface-guidelines.md`** — a per-PR checklist covering
interactivity, motion, accessibility, color, and performance — and
**`docs/design/design-engineer.md`** for how we approach design work here.

Two rules that matter most:

1. **Don't change the visual design without sign-off.** Behind-the-scenes quality
   (accessibility, motion safety, performance, semantics, mobile feel) is fair
   game. Anything that alters layout, color, type scale, or spacing is a design
   change — confirm first.
2. **Ship green, one improvement per commit.** `npm run lint` and `npm run build`
   must pass. Use conventional commit messages.

## Enforced automatically

`.eslintrc.js` blocks, in styled-components CSS, `transition: all`, bare `:focus`
(use `:focus-visible`), and `outline: none/0` without a focus replacement. CI runs
`npm run lint`.

## Commands

- `npm run develop` — local dev server
- `npm run build` — production build (the CI/Netlify gate)
- `npm run lint` / `npm run lint:fix`
- `npm run format` — Prettier
