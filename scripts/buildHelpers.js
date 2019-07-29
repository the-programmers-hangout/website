const DEFAULT_AVATAR_MODULO = 5
module.exports = {
  splitHash(identifier) {
    const hashLocation = identifier.lastIndexOf("#")

    if (hashLocation === -1) {
      throw Error(`Invalid name format ${identifier}`)
    }

    const name = identifier.slice(0, hashLocation)
    const hash = identifier.slice(hashLocation + 1)
    return [name, hash]
  },
  getDefaultAvatar(name) {
    const [_, hash] = this.splitHash(hashLocation)

    const avatar = Number(hash) % DEFAULT_AVATAR_MODULO
    return `https://cdn.discordapp.com/embed/avatars/${avatar}.png`
  },
  resolveAuthor(users, author) {
    const target = users.find(user => user.identifier === author)
    const [name, hash] = this.splitHash(author)
    const avatar = target ? target.avatar : this.getDefaultAvatar(author)

    return {
      name,
      hash,
      avatar,
    }
  },
  resolveAuthors(users, authors) {
    return authors.map(author => this.resolveAuthor(users, author))
  },
}
