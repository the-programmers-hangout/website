// This script will be ran periodically through CI
// don't touch it
const Discord = require("discord.js")
const fs = require("fs")
const { Readable, Writable } = require("stream")

const client = new Discord.Client()

const { BOT_TOKEN } = process.env
const TPH = "244230771232079873"
const DESTINATION = "./users.json"

if (!BOT_TOKEN) {
  throw Error("Missing BOT_TOKEN environment variable")
}

const writeS = (content, dest) => {
  const source = new Readable()
  source.push(JSON.stringify(content))
  source.push(null)
  return source.pipe(dest)
}

client.once("ready", async () => {
  // tslint:disable-next-line no-console
  console.log("Bot ready, fetching user list...")
  const tph = client.guilds.cache.get(TPH)
  if (!tph) {
    throw Error("Bot is not in TPH, cannot fetch users")
  }
  const members = await tph.members.fetch()
  const memberInfo = members.map(member => ({
    avatar: member.user.displayAvatarURL(),
    identifier: member.tag,
  }))
  const wrs = fs.createWriteStream(DESTINATION)
  // tslint:disable-next-line no-console
  console.log(`Fetched ${memberInfo.length} users, writing to ${DESTINATION}`)
  writeS(memberInfo, wrs).on("finish", () => {
    // tslint:disable-next-line no-console
    console.log("Finished writing list")
    process.exit(0)
  })
})

// tslint:disable-next-line no-console
console.log("Attempting to log in...")
client.login(process.env.BOT_TOKEN)
