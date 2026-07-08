import type { Author } from "../appTypes"

// Ported from scripts/buildHelpers.js — resolve an Author tag ("name#hash")
// to an avatar, falling back to a default Discord avatar when the User
// (from users.json) is not found.

const DEFAULT_AVATAR_MODULO = 5

export interface DiscordUser {
  identifier: string
  avatar: string
}

function splitHash(identifier: string): [string, string] {
  const hashLocation = identifier.lastIndexOf("#")
  if (hashLocation === -1) {
    // Some tags are already just a display name (new Discord usernames).
    return [identifier, "0"]
  }
  const name = identifier.slice(0, hashLocation)
  const hash = identifier.slice(hashLocation + 1)
  return [name, hash]
}

function getDefaultAvatar(hash: string): string {
  const avatar = (Number(hash) || 0) % DEFAULT_AVATAR_MODULO
  return `https://cdn.discordapp.com/embed/avatars/${avatar}.png`
}

export function resolveAuthor(
  users: DiscordUser[],
  author: string
): Author {
  const target = users.find((user) => user.identifier === author)
  const [name, hash] = splitHash(author)
  const avatar = target ? target.avatar : getDefaultAvatar(hash)

  return { avatar, hash, name }
}

export function resolveAuthors(
  users: DiscordUser[],
  authors: string[] = []
): Author[] {
  return authors.map((author) => resolveAuthor(users, author))
}
