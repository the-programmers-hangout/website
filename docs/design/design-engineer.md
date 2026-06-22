# Design Engineer — operating principles

> Adapted from Vercel's "Design Engineer" page (https://vercel.com/design/engineer).

## Mindset

- **Obsess over usefulness.** Solve a real problem; make the solution feel obvious.
- **Own the whole surface.** Strategy, interface, code, docs, and follow-up are one job.
- **Understand constraints before choosing.** Users, product, code, and business shape the right answer.
- **Design across skill, ability, and context.** Advanced capability is available, never mandatory.
- **Scope small enough to execute excellently.** A tight slice done with craft beats a broad one done roughly.
- **Push back when clarity, craft, performance, or trust is at risk.**
- **Be kind, direct, low-ego.** Share early, give specific feedback.
- **Convert recurring feedback into better defaults and systems** — fix the class, not the instance.

## How that translates to THIS repo

This is a Gatsby + styled-components content site. "Design engineering" here means
raising baseline quality on every surface we touch without redesigning it:

1. **Don't change the visual design without sign-off.** Behind-the-scenes craft
   (a11y, motion safety, performance, semantics, mobile feel) is fair game and
   should be improved continuously. Anything that alters layout, color, type
   scale, or spacing is a design change — confirm first.
2. **Fix the class via shared primitives.** Prefer a fix in `globalStyles`,
   `src/design/`, or a shared component over the same fix copy-pasted into N
   component `styles.tsx` files.
3. **Every change ships green.** `npm run lint` and `npm run build` pass; one
   logical improvement per commit with a conventional message.
4. **Leave the guideline checklist greener than you found it.** See
   `web-interface-guidelines.md`.

## Enforcement ladder (weakest → strongest)

Prose like this file is the *weakest* form of enforcement — agents must choose to
read it. Stronger, in order:

1. **Context injection** — `CLAUDE.md` references these files so they load every session. ✅ done
2. **Lint rules** — the mechanical rules (`no transition: all`, `:focus` → `:focus-visible`, `outline: none` guard) are ESLint `no-restricted-syntax` checks in `.eslintrc.js`, so CI blocks violations. ✅ done
3. **A `/design-review` skill / check** — runs the non-mechanical checklist (hit-target sizes, contrast, empty/error states) against a diff. ⬜ todo
4. **CI gates / visual regression** — block merge on lint + a11y (axe) + Lighthouse budgets. ⬜ todo

The goal: turn as many of the prose checklist items as possible into items 2–4,
and keep the existing violations at zero.
