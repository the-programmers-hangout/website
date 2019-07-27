// This script will be ran periodically through CI
// don't touch it
import Discord from "discord.js"
import fs from "fs"
import { Readable, Writable } from "stream"

const client = new Discord.Client()

const { BOT_TOKEN } = process.env
const TPH = "244230771232079873"

if (!BOT_TOKEN) {
  throw Error("Missing BOT_TOKEN environment variable")
}

const writeS = <T>(content: T[], dest: Writable) => {
  const source = new Readable()
  source.push(JSON.stringify(content))
  source.push(null)
  source.pipe(dest)
}

client.once("ready", async () => {
  const tph = client.guilds.get(TPH)
  if (!tph) {
    throw Error("Bot is not in TPH, cannot fetch users")
  }
  const members = await tph.members.fetch()
  const memberInfo = members.map(member => ({
    identifier: `${member.user.username}#${member.user.discriminator}`,
    avatar: member.user.displayAvatarURL({ size: 32 }),
  }))
  const wrs = fs.createWriteStream("./users.json")
  writeS(memberInfo, wrs)
})
client.login(process.env.BOT_TOKEN)
