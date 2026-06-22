# Web Interface Guidelines

> Adapted from Vercel's Web Interface Guidelines (https://vercel.com/design/guidelines)
> for this repo: **Gatsby + TypeScript + styled-components**, light/dark theming.
>
> Treat every checkbox as a rule to satisfy or consciously waive — not a suggestion.
> Some of these are enforced automatically (see "Enforcement" at the bottom).

## How to use this in a PR

Before opening a PR that touches anything under `src/`, run the relevant section
below as a checklist. A change that violates one of these without a stated reason
should be fixed, not merged.

---

## Interactivity

- [ ] Hit targets ≥ 24px (≥ 44px on mobile). Expand small visual targets with padding or a pseudo-element, don't shrink the click area.
- [ ] No dead zones: the whole visual extent of an interactive element is clickable.
- [ ] `touch-action: manipulation` on tappable elements to kill the 300ms mobile tap delay.
- [ ] `-webkit-tap-highlight-color` set intentionally (transparent unless the design wants the flash).
- [ ] Use `:focus-visible`, not `:focus`, for focus rings — keyboard users get the ring, mouse users don't.
- [ ] Every focusable element has a **visible** focus ring. Never `outline: none` without a replacement.
- [ ] Keyboard-operable: every flow works without a mouse, following WAI-ARIA Authoring Patterns.
- [ ] Disabled/destructive actions get confirmation or undo.

## Animation & motion

- [ ] **Never `transition: all`** — list only the properties you animate.
- [ ] Animate `transform` / `opacity` only (GPU). Avoid animating `width`, `height`, `top`, `left`, `background-size` for performance-critical paths.
- [ ] Provide a `prefers-reduced-motion: reduce` variant. There is a global guard in `src/globalStyles.tsx`; still take per-component care.
- [ ] CSS animation > Web Animations API > JS libraries, in that order.
- [ ] Animations are interruptible by user input; no autoplay-driven motion.
- [ ] SVG: apply transforms to a `<g>` wrapper with `transform-box: fill-box`.

## Typography

- [ ] Curly quotes (" ") over straight; `…` over `...`.
- [ ] `font-variant-numeric: tabular-nums` anywhere numbers are compared or change in place (counts, stats, timers).
- [ ] `&nbsp;` between a number and its unit (`10&nbsp;MB`).
- [ ] Tidy rag — avoid widows/orphans in headings.

## Color & contrast

- [ ] `color-scheme` set to match the active theme (so native scrollbars/form controls match). Bound globally to `theme.name`.
- [ ] `<meta name="theme-color">` matches the page background per theme (set in `src/ThemeProvider.tsx`).
- [ ] Interactive states (hover/active/focus) have **more** contrast than rest.
- [ ] Don't rely on color alone — pair with text/icon/shape.
- [ ] On non-neutral backgrounds, tint borders/shadows/text toward the same hue.

## Forms (when we add any)

- [ ] Every control has a `<label>` (or `aria-label`).
- [ ] Inputs are ≥16px font on mobile (or set `maximum-scale`) to prevent auto-zoom.
- [ ] Never disable paste; never block typing; show validation instead of pre-disabling submit.
- [ ] `autocomplete` + meaningful `name`; `autocomplete="one-time-code"` for OTP.
- [ ] Spellcheck off for emails, codes, usernames.
- [ ] Errors shown adjacent to the field; focus first error on submit.

## Content & state

- [ ] Design empty, sparse, dense, long, and error states — not just the happy path.
- [ ] Skeletons mirror final layout to avoid shift; set explicit image dimensions.
- [ ] No dead ends — every screen offers a next step or recovery.
- [ ] Page `<title>` reflects current context.
- [ ] Anchored headings set `scroll-margin-top` so deep links don't hide under sticky headers.
- [ ] `translate="no"` on brand names and code tokens.

## Accessibility

- [ ] Semantics first: `button` / `a` / `label` / `table` before `role`/`aria-*`.
- [ ] Hierarchical `<h1>`–`<h6>`; provide a skip link (the content layout has one).
- [ ] Icon-only buttons get a descriptive `aria-label`.
- [ ] `aria-live="polite"` for async toasts / inline validation.

## Performance

- [ ] Virtualize large lists; `content-visibility: auto` for long static content.
- [ ] Preload critical fonts; subset via `unicode-range`.
- [ ] Explicit image dimensions to prevent CLS (Gatsby Image handles most of this — verify).

---

## Enforcement

The mechanical rules are encoded as ESLint `no-restricted-syntax` checks in
`.eslintrc.js` and fail CI on regression:

- `transition: all` is banned.
- bare `:focus` (use `:focus-visible`) is banned.
- `outline: none` / `outline: 0` is banned (add a visible focus replacement, or
  disable the rule on that line with a justification).

Everything else in this file is reviewed by humans (and agents — see
`design-engineer.md`). The aim over time is to push more of this list down into
lint rules, a `/design-review` check, and CI gates (axe, Lighthouse budgets).
