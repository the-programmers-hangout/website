## What is Discord.js?

discord.js is a powerful node.js module that allows you to interact with the Discord API very easily. It takes a much more object-oriented approach than most other JS Discord libraries, making your bot's code significantly tidier and easier to comprehend.

Usability, consistency, and performance are key focuses of discord.js, and it also has nearly 100% coverage of the Discord API. It receives new Discord features shortly after they arrive in the API.

## Preface

Programming isn't easy, trying to create a program without simple knowledge of a language is even harder. We highly suggest that you know at least some fundamentals of javascript before you try to learn or use Discord.js.
Some resources for learning Javascript can be found here: <https://theprogrammershangout.com/resources/javascript/>

## Why Discord.js?

It's open source <https://github.com/discordjs/discord.js/>
It has over 5.6 million downloads and as such there are lots of guides and support out there for it.

## Do I have to use discord.js?

No, of course not, almost every language has a library <https://discordapi.com/unofficial/comparison.html>

## Getting started

Visit <https://anidiots.guide/getting-started>, <https://discordjs.guide/preparations/> or read below

### Prerequisites

You'll need these few things to get started:
Node.js 12.0.0 or higher.
A test server (You don't want to find breaking bugs on a live server).
A bot account.

- Go to https://discord.com/developers/applications
- Create a **New Application**. Make a note of the client ID here. You'll need that later
- Go to the **bot** tab
- Click **Add Bot** and then **yes, do it**
- Copy the **token** and make a note of it. You'll need that later too.

#### TOKEN WARNING

Do not share this token, anywhere. Ever. Do not commit it to github. Keep it private.
If you do accidentally share it on github or alike its important that you regenerate it ASAP.

You now need to invite the bot to your test server, you can do so by visiting the following site:
<https://discordapi.com/permissions.html>

From here you can select specifically which permissions the bot will have on your server. Don't worry too much about this, you can always change it later.
Paste the client ID we noted earlier into the ClientID box and then click the link at the bottom of the page.
This will take you to a discord interface where you decide which server you want to invite the bot to. Select your test server.

Your bot should be on your discord server! Now let's get discord.js set up.

Create a folder, open a terminal there and run `npm install discord.js dotenv`. You'll notice a few folders and files were generated.

Now let's create a few files that we'll need.
`.env` (if on windows name it `.env.`)
`index.js`

The `.env` file here will be used to store our token. **If using git make sure you gitignore this file**
Open up the `.env` file and fill it out using the information

```env
DISCORD_TOKEN=your_token
```

For example:

```env
DISCORD_TOKEN=NzEyNTgwNDYyMzAzOTAzODA2.XsToSQ.ef6y_53oQbNCpNsDgWoWu7QSPU4
```

The `index.js` file is where all our code goes.
Lets talk through getting the core of our bot running:

```js
// Import discord.js library
const Discord = require("discord.js");

// Importing this allows you to access the environment variables of the running node process
require("dotenv").config();

// Create a new client
const client = new Discord.Client();

// When the client is ready, fire this function
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// When a message is recieved, fire this function
client.on("message", (message) => {
  // If message is from bot, return and do not run any more code
  if (message.author.bot) return;

  // If the message begins with `++ping`
  if (message.content.startsWith("++ping")) {
    // Send a response
    message.channel.send("pong!");
  }
});

// Here you can login the bot. It automatically attempts to login the bot with the environment variable you set for your bot token (DISCORD_TOKEN)
// you can also manually specify it using client.login(process.env.DISCORD_TOKEN);
client.login();
```

## Resources

An Idiot's Guide: <https://anidiots.guide/>
discord.js Guide: <https://discordjs.guide/>
Official docs: <https://discord.js.org/#/docs/main/stable/general/welcome>

## Advanced

### Command frameworks:

<https://github.com/discord-akairo/discord-akairo>
<https://github.com/discordjs/Commando>
<https://klasa.js.org/>

### Voice Support:

If you need voice support, you'll need 3 more things:

1. ffmpeg
2. The new windows build tools, to install:

```- Open an ADMIN command prompt, or PowerShell
  - Run the following command: npm i -g --production windows-build-tools
  - This installs Python 2.7 and the C++ Build Tools standalone.
```

3.  Install discordjs/opus `npm install @discordjs/opus`
