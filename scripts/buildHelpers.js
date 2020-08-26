/* globals module */
const DEFAULT_AVATAR_MODULO = 5

module.exports = {
  findMarkdownLink(absolutePath) {
    // We're assuming this path isn't going to change
    const start = absolutePath.lastIndexOf("src/content")

    if (!start) {
      throw Error(`Markdown file ${absolutePath} is outside of src/content`)
    }

    const route = absolutePath.slice(start)
    // Same as this
    return `https://github.com/the-programmers-hangout/website/tree/master/${route}`
  },
  splitHash(identifier) {
    const hashLocation = identifier.lastIndexOf("#")

    if (hashLocation === -1) {
      throw Error(`Invalid name format ${identifier}`)
    }

    const name = identifier.slice(0, hashLocation)
    const hash = identifier.slice(hashLocation + 1)
    return [name, hash]
  },
  getDefaultAvatar(hash) {
    const avatar = hash % DEFAULT_AVATAR_MODULO
    return `https://cdn.discordapp.com/embed/avatars/${avatar}.png`
  },
  resolveAuthor(users, author) {
    const target = users.find((user) => user.identifier === author)
    const [name, hash] = this.splitHash(author)
    const avatar = target ? target.avatar : this.getDefaultAvatar(hash)

    return {
      avatar,
      hash,
      name,
    }
  },
  resolveAuthors(users, authors) {
    return authors.map((author) => this.resolveAuthor(users, author))
  },
}
