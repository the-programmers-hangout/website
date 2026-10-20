// The bots page (/bots). Interactive bots are the ones members use directly;
// passive bots work on their own in the background.

export interface BotCommand {
  // Shown as code: a slash command, a prefixed command or an emoji reaction.
  usage: string
  description: string
}

export interface Bot {
  name: string
  description: string
  // GitHub URL, or null when the source is private.
  source: string | null
  // Shown instead of the link when there is no public source.
  sourceNote?: string
  prefix?: string
  prefixNote?: string
  // Plain sentences shown under the description.
  notes?: string[]
  // JudgeBot's escalation scale.
  scale?: { points: number; outcome: string }[]
  commands?: BotCommand[]
  commandsNote?: string
  // A second, named list of commands (Polly's macros).
  extraCommands?: { title: string; note?: string; commands: BotCommand[] }
}

export const botsIntro = [
  "These are the bots you can talk to on the server. Others run on their own, or are only for staff.",
  "Type `/` in any channel to browse the slash commands of most of them.",
]

export const interactiveBots: Bot[] = [
  {
    name: "JudgeBot",
    description:
      "Our main moderation bot. If you receive a warning or an infraction, JudgeBot is the one that DMs you.",
    notes: [
      "Each infraction adds points, and points decay over time. A warning is 5 points; a strike is usually 10, more in exceptional cases.",
    ],
    scale: [
      { points: 10, outcome: "1-hour mute" },
      { points: 20, outcome: "12-hour mute" },
      { points: 30, outcome: "7-day mute" },
      { points: 40, outcome: "30-day mute" },
      { points: 50, outcome: "Permanent ban" },
    ],
    source: "https://github.com/the-programmers-hangout/JudgeBot",
    prefix: "/",
    commands: [
      {
        usage: "/selfhistory",
        description: "DMs you your infraction history.",
      },
      {
        usage: ":stop_sign:",
        description:
          "React to a message with this emoji to alert staff. Use it on anything that might break the rules.",
      },
    ],
  },
  {
    name: "DocsBot",
    description: "Looks up documentation for you.",
    source: "https://github.com/the-programmers-hangout/tph-docs-bot",
    prefix: "/",
    commands: [
      { usage: "/djs", description: "Search the discord.js documentation." },
      { usage: "/mdn", description: "Search MDN Web Docs." },
    ],
  },
  {
    name: "FormatBot",
    description: "Formats code snippets through interactions.",
    source: "https://github.com/tatupesonen/formatbot",
    prefix: "/",
    commands: [
      {
        usage: "/format",
        description: "Formats the message given as an argument.",
      },
      { usage: "/tex", description: "Formats LaTeX." },
    ],
  },
  {
    name: "HangoutBot",
    description:
      "A general-purpose bot that took over some of HotBot's features.",
    source: "https://github.com/the-programmers-hangout/HangoutBot",
    prefix: "/",
    commands: [
      {
        usage: "/help",
        description: "Shows help for the bot or for one command.",
      },
      {
        usage: "/productivemute",
        description: "Mutes every non-productive channel, such as #hangout.",
      },
      { usage: "/remindme", description: "Sets a reminder." },
      { usage: "/selfmute", description: "Mutes every channel." },
      { usage: "/details server", description: "Shows server information." },
      {
        usage: "/details avatar <userid>",
        description: "Shows a user's avatar.",
      },
      {
        usage: "/details user",
        description: "Shows information about a user.",
      },
    ],
  },
  {
    name: "Keeper",
    description:
      "Bookmarks messages for you: react to a message with :bookmark: to save it.",
    source: "https://github.com/ddivad195/keeper",
    prefix: "/",
  },
  {
    name: "ModMail",
    description:
      "Lets you contact the staff team privately. DM it to start a conversation.",
    notes: ["All you need to do is send a message. Staff see your edits too."],
    source: "https://github.com/JakeJMattson/ModMail",
  },
  {
    name: "Mimic",
    description:
      "Talks like you. If you opt in, it saves your messages and builds Markov chains to generate sentences that sound like you and other members.",
    source: "https://github.com/itsHobbes/mimic",
    prefix: "mimic!",
    commands: [
      {
        usage: "mimic!about",
        description: "Shows bot information and the source link.",
      },
      {
        usage: "mimic!all",
        description:
          "Generates sentences from every opted-in member's messages.",
      },
      {
        usage: "mimic!allstats",
        description: "Shows statistics for every member.",
      },
      {
        usage: "mimic!channels",
        description: "Lists every registered channel.",
      },
      {
        usage: "mimic!help",
        description: "Lists every command, or details one.",
      },
      {
        usage: "mimic!opt-in",
        description: "Opts in, so Mimic reads your messages.",
      },
      {
        usage: "mimic!opt-out",
        description: "Opts out and removes all your messages.",
      },
      {
        usage: "mimic!rand",
        description: "Generates sentences from a random member's messages.",
      },
      {
        usage: "mimic!self",
        description: "Generates sentences from your own messages.",
      },
      {
        usage: "mimic!start",
        description:
          "Give it the start of a sentence, in quotes, and Mimic finishes it.",
      },
      {
        usage: "mimic!stats",
        description: "Shows statistics for your messages.",
      },
    ],
  },
  {
    name: "Polly",
    description: "Our macro bot.",
    source: "https://github.com/the-programmers-hangout/Polly",
    prefix: "++",
    prefixNote: "+ for a message that deletes itself",
    commands: [
      { usage: "/listmacros", description: "Lists every available macro." },
    ],
    extraCommands: {
      title: "Common macros",
      note: "Any macro also works as /macro <name>.",
      commands: [
        {
          usage: "++ask",
          description:
            "For someone asking for DMs or waiting for “experts” instead of asking their question.",
        },
        {
          usage: "++beginners",
          description:
            "Points someone to the beginners channel, which has probably answered their question.",
        },
        {
          usage: "++bin",
          description: "Hastebin links for long code snippets.",
        },
        { usage: "++bots", description: "Links to this page." },
        {
          usage: "++cc",
          description: "A reminder of the controversial content rule.",
        },
        { usage: "++faq", description: "Links to the FAQ page." },
        {
          usage: "++hire",
          description:
            "Points someone to #projectlistings or #open-source-contributions.",
        },
        {
          usage: "++how2ask",
          description: "For a question that is missing detail.",
        },
        {
          usage: "++imageofcode",
          description:
            "Images of code are hard to read: asks for the code as text.",
        },
        {
          usage: "++noresearch",
          description:
            "Encourages research before asking, and asks what they found.",
        },
        {
          usage: "++patience",
          description: "A reminder not to pester people in channels.",
        },
        {
          usage: "++techchoice",
          description: "For a general “X or Y?” technology question.",
        },
        {
          usage: "++voice",
          description: "Explains why someone can't see the voice channels.",
        },
        {
          usage: "++wrapmini",
          description: "Shows how to wrap code in a code block.",
        },
      ],
    },
  },
]

export const passiveBots: Bot[] = [
  {
    name: "Clerky",
    description:
      "Manages voice group channels. Join one and a fresh one is created for others.",
    source: "https://github.com/itsHobbes/clerky",
  },
  {
    name: "EmbedBot",
    description: "Lets staff manage and post embed messages in channels.",
    source: "https://github.com/JakeJMattson/EmbedBot",
  },
  {
    name: "Emourge",
    description:
      "Tracks emoji usage, so we know which ones to swap out for new ones.",
    source: "https://github.com/dfireBird/emourge-mongo",
  },
  {
    name: "Hawk",
    description:
      "Manages nickname prefixes and suffixes, and runs the occasional nick party.",
    source: "https://github.com/the-programmers-hangout/Hawk",
  },
  {
    name: "Nano",
    description:
      "Runs our AMAs, and walks each accepted guest through how they work.",
    source: "https://github.com/the-programmers-hangout/Nano",
  },
  {
    name: "RaffleBot",
    description: "Runs giveaways. Built for The Programmer's Hangout.",
    source: "https://github.com/Abzylicious/RaffleBot",
  },
  {
    name: "Skadi",
    description: "Hands out activity roles.",
    source: null,
    sourceNote: "Source is private, so nobody can game it",
  },
  {
    name: "Slothbot",
    description: "Manages slowmode across the server.",
    source: "https://github.com/the-programmers-hangout/slothbot",
  },
  {
    name: "Taboo",
    description: "Makes sure only accepted file formats get uploaded.",
    source: "https://github.com/the-programmers-hangout/Taboo",
  },
  {
    name: "Watchdog",
    description: "Guards the server against raids and bot accounts.",
    source: null,
    sourceNote: "Source is private",
  },
]
