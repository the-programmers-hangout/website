---
authors:
  - "Hayden#5036"
created_at: "2019/09/06"
title: 4 - Commands
---

## Oi! Don't be so bossy with those command words!

So, if you've followed the guides thus far, you might be shouting, "Oi! Hayden! Get off your lazy bum and tell me how to make my own commands!"

Alright, alright, simmer down. We'll do that now.

So, to get started, find the folder your bot's main `.kt` file is in, and right click, go to 'New', then 'Package'. Type 'commands' in the box and smash that enter key like your finger is a missile. (although... not if you're on a laptop... that... that could end badly.)

Make a new Kotlin Script in that folder called `UtilityCommands`. We're gonna first off declare that we're making a set of commands.

```kotlin
@CommandSet("Utility")
```

This creates a new CommandSet called "Utility". Although you may notice it's got a red line under it. That's just IntelliJ screaming at you because you don't have a function containing all the sweet, sweet commands it has to run. So let's give it one.

```kotlin
@CommandSet("Utility")
fun utilityCommands() = commands {

}
```

Note how this has a weird ending. It doesn't go straight into a function, this goes into a `commands` block. Huh. Well, believe me, it makes it very simple. Because now all you need to do is add this:

```kotlin
command("Ping") {
    description = "Pong!"
    execute {
        it.respond("Pong!")
    }
}
```

...which creates a command called "Ping", with the description of "Pong!", and which, when it runs, will respond by saying "Pong!". Try it! Restart the bot and run `!ping`.

That's all she wrote, folks. That's how you make commands and groups of them in KUtils.

So thus far, you can basically make a basic (ah? ah? basically basic? ah? no? nevermind) Discord bot. And (minus reading time (**_hopefully if you actually read this_**, looking at you, skim-reders)) it only took about 5-10 minutes to set up! That's cool, isn't it?

Well, stay tuned, because coming up are some tutorials about setting up arguments, services, preconditions and more!
