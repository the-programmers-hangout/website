# The Programmers Hangout Website

The public, statically-generated (Gatsby) website for The Programmers Hangout, a
programming community on Discord. Its purpose is to present the community and to
publish community-authored educational content. All content originates as
Markdown/MDX files under `src/content`.

## Content

**Resource**:
A community-authored educational article, sourced from a Markdown/MDX file under
`src/content/resources`. Every Resource belongs to exactly one Language or Topic.
_Avoid_: Article, doc, post, tutorial (for the outbound-link sense, see External Reference).

**Language**:
A resource category named after a programming language (e.g. JavaScript, Python).
One of the two kinds of resource category.
_Avoid_: Lang.

**Topic**:
A resource category named after a subject area that is not tied to a single
language (e.g. web-development, cryptography, bot-development). The other kind of
resource category.
_Avoid_: Category, subject, section.

**Spotlight**:
A short "What is X?" feature article introducing a single technology, tool, or
framework. Sourced from `src/content/spotlights`. Distinct from a Resource: it is
a standalone introduction rather than a categorised teaching article.
_Avoid_: Feature, highlight, showcase.

**External Reference**:
An outbound link (text + href) attached to a Resource under
`external_resources`, pointing at authoritative material elsewhere on the web.
_Avoid_: Resource, link (both are ambiguous — a Resource is our own content).

**Recommended Reading**:
An internal cross-link from one Resource to another, listed under
`recommended_reading`. Points only at other Resources on this site.
_Avoid_: Related, see-also.

## People

**Author**:
A community member credited on a Resource or Spotlight, written in frontmatter as
a Discord tag (`name#hash`). The identity as it appears in content.
_Avoid_: Writer, contributor, creator.

**User**:
A Discord guild member of The Programmers Hangout, fetched from the Discord API
into `users.json`. Users exist only to resolve an Author's tag to a real avatar;
when no matching User is found, a default Discord avatar is used.
_Avoid_: Member, author (an Author is a credit; a User is a Discord account).

**Role**:
A Discord role, rendered inline in content as a coloured pill. Refers to the
community's Discord roles, not to any website permission.
_Avoid_: Badge, tag, permission.

## Presentation

**Layout**:
The page-shell variant a page renders inside, chosen from `home`, `resources`,
`spotlights`, and `regular`. Determines sidebar and chrome, not content.
_Avoid_: Template, theme.
