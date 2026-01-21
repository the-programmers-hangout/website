---
path: /bots
---

This page details the bots you will see in our server.
Below are the bots you can interact with. There are other bots within the server, but they are strictly for usage by staff or are automatic in their nature. [Click here to jump to the passive bots](#passive-bots).

By typing `/` you can pop up a scrollable list of the commands of some, but not all, of the bots.

## JudgeBot

**Description** Judgebot is our main moderation bot. If you receive any warnings or infractions, JudgeBot will be the one to DM you.

Judgebot has a 50-point system. Each infraction gives you points, and points decay over time. Warnings give 5 points. Strikes typically give 10 but can give more in exceptional circumstances.

- 10 points: 1-hour mute
- 20 points: 12-hour mute
- 30 points: 7-day mute
- 40 points: 30-day mute
- 50 points: permanent ban

**Source:** https://github.com/the-programmers-hangout/JudgeBot

**Prefix:** `/`

### Commands

`/selfhistory` - Will DM your infraction history.

`:stop_sign:` - Reacting to a message with this emote will alert staff to it. Use it if you see any potentially rule breaking content.

## DocsBot

**Description:** DocsBot can retrieve documentation for discord.js

**Source:** https://github.com/the-programmers-hangout/tph-docs-bot

**Prefix:** `/`

### Commands

`/djs` - Search discord.js documentation.

`/mdn` - Search MDN Web Docs.

## FormatBot

**Description:** FormatBot is a bot that uses interactions to format code snippets.

**Source:** https://github.com/tatupesonen/formatbot

**Prefix:** `/`

### Commands

`/format` - Formats a message that's given as an argument.

`/tex` - Formats LaTeX.

## HangoutBot

**Description:** HangoutBot is a general usage bot, replacing some of the functionality of HotBot.

**Source:** https://github.com/the-programmers-hangout/HangoutBot

**Prefix:** `/`

### Commands

`/help` - Displays help information for the bot or a command.

`/productivemute` - Mutes all non-productive channels. (e.g hangout)

`/remindme` - Sets a reminder.

`/selfmute` - Mutes all channels.

`/details server` - Displays server information.

`/details avatar <userid>` - View the avatar of a user.

`/details user` - Displays info for a user.

## Keeper

**Description:** Keeper is a bot that allows you to bookmark messages by adding the `:bookmark:` emote reaction to a message.

**Source:** https://github.com/ddivad195/keeper

**Prefix:** `/`

### Commands

N/A

## ModMail

**Description:** This bot lets you privately contact the staff team. DM it to start a discussion!

**Source:** https://github.com/JakeJMattson/ModMail

**Usage:** All you need to do is send a message. We'll see any edits you make to your message too!

## Mimic

**Description:** Mimic is a bot that talks like you! If you opt-in it will save your messages and build markov chains in order to generate sentences that mimic how you and other users type!

**Source:** https://github.com/itsHobbes/mimic

**Prefix:** `mimic!`

### Commands

`mimic!about` - Displays bot information and source link.

`mimic!all` - Generate a random number of sentences from all opted in user messages!

`mimic!allstats` - Display statistics for all users

`mimic!channels` - Lists all channels registered

`mimic!help` - show all commands or detailed help of one command

`mimic!opt-in` - Opt-in for your messages to be read.

`mimic!opt-out` - Opt-out for all messages to be removed.

`mimic!rand` - Generate a random number of sentences from random user's messages!

`mimic!self` - Generate a random number of sentences from your own messages!

`mimic!start` - Provide the start of a sentence and let mimic finish it! Use quotations around your sentence!

`mimic!stats` - Display statistics of your messages

## Polly

**Description:** Polly is our macro bot.

**Source:** https://github.com/the-programmers-hangout/Polly

**Prefix:** `++` or `+` for a self destructing invocation

### Commands

#### Help

`/listmacros` - Lists all of the available macros

#### Here are some commonly used macros

_Note: macros can also be invoked using `/macro <name of macro here>`_

`++ask` - If a user is looking for DMs, waiting for "experts", or anything else to delay asking their question use this.

`++beginners` - Redirect a user to the beginners channel. Their question has probably been answered there.

`++bin` - Hastebin links for long code snippets.

`++bots` - Displays a link to this page.

`++cc` - Remind a user of the controversial content rule.

`++faq` - Displays a link to the FAQ page.

`++hire` - Redirect a user to #projectlistings or #open-source-contributions.

`++how2ask` - If a user isn't providing enough detail use this.

`++imageofcode` - Images of code can be really hard to read, let people know they should post the code as text instead.

`++noresearch` - Research is an important part of programming. Encourage people to research _then_ ask! Ask them what they found if anything.

`++patience` - Remind users not to pester others in channels.

`++techchoice` - If a user is asking between X and Y tech in a general case, use this.

`++voice` - Inform a user why they cannot see voice channels.

`++wrapmini` - Instruct a user to wrap their code.

## Passive bots

Below are the bots you will see in the server but you will not need to interact with them. They automatically do their job!

## Clerky

**Description:** Clerky manages our voice group channels. If you join a voice group a new one will automatically be created for other people to use!

**Source:** https://github.com/itsHobbes/clerky

## EmbedBot

**Description:** EmbedBot allows staff to manage and post embed messages into various channels.

**Source:** https://github.com/JakeJMattson/EmbedBot

## Emourge

**Description:** Emourge tracks emote usage. We use this to help us identify the least used emotes incase we want to add some new ones!

**Source:** https://github.com/dfireBird/emourge-mongo

## Hawk

**Description:** Hawk manages nickname prefixes & suffixes. It also organises the occasional nick party!

**Source:** https://github.com/the-programmers-hangout/Hawk

## Nano

**Description:** Nano manages our AMAs. Whenever someone is accepted for an AMA, we'll give them a run down of how it works.

**Source:** https://github.com/the-programmers-hangout/Nano

## RaffleBot

**Description:** RaffleBot is a discord bot built originally for The Programmer's Hangout that focuses on managing giveaways.

**Source:** https://github.com/Abzylicious/RaffleBot

## Skadi

**Description:** Skadi manages activity roles on the server.

**Source:** This source isn't publicly available. We don't want people trying to game the system.

## Slothbot

**Description:** Slothbot manages slowmode across the server.

**Source:** https://github.com/the-programmers-hangout/slothbot

## Taboo

**Description:** Taboo makes sure only accepted file formats are uploaded.

**Source:** https://github.com/the-programmers-hangout/Taboo

## Watchdog

**Description:** Watchdog guards the gates of our server against raids and bots.

**Source:** This source isn't publicly available.
