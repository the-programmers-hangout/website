/* globals require, process, console */
/* eslint-disable @typescript-eslint/no-var-requires */
// This script will be ran periodically through CI
// don't touch it
const Discord = require("discord.js")
const fs = require("fs")
const { Readable } = require("stream")

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function execute() {
  const client = new Discord.Client()

  const { BOT_TOKEN } = process.env
  const TPH = "244230771232079873"
  const DESTINATION = "./users.json"

  const writeS = (content, dest) => {
    const source = new Readable()
    source.push(JSON.stringify(content))
    source.push(null)
    return source.pipe(dest)
  }

  client.once("ready", async () => {
    console.log("Bot ready, fetching user list...")
    const tph = client.guilds.cache.get(TPH)
    if (!tph) {
      throw Error("Bot is not in TPH, cannot fetch users")
    }
    const members = await tph.members.fetch()
    const memberInfo = members.map((member) => ({
      avatar: member.user.displayAvatarURL(),
      identifier: member.user.tag,
    }))
    const wrs = fs.createWriteStream(DESTINATION)
    console.log(`Fetched ${memberInfo.length} users, writing to ${DESTINATION}`)
    writeS(memberInfo, wrs).on("finish", () => {
      console.log("Finished writing list")
      process.exit(0)
    })
  })

  console.log("Attempting to log in...")
  client.login(BOT_TOKEN)
}

// TODO: restore me once intents are implemented
if (process.env.BOT_TOKEN) {
  console.log("skipped until intents are implemented")
  // execute()
} else {
  console.log("BOT_TOKEN missing, skipping.")
}
