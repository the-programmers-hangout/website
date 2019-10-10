---
authors:
  - "Hayden#5036"
created_at: "2019/09/06"
title: Getting Started with KUtils
---

## What is KUtils?

According to the [GitLab repo](https://gitlab.com/aberrantfox/kutils), KUtils is "A comprehensive wrapper over the discord API using JDA in Kotlin". Which is completely believable, because not only does it provide a command handler, but it also provides things like argument handling, services, embed menus, and much, much more.

When it comes to making your first KUtils-powered bot, the task can seem fairly daunting. But make no mistake, it's definitely easier than it looks.

## Installation

### Setting up our IDE

So, for this guide, I'll assume that you're using IntelliJ IDEA. It comes with Kotlin bundled, after all! Open it up, smash that 'New Project...' button, and click on the Maven category. Use the Kotlin archetype and hit next. Give your project a `groupId` and `artifactId`, but version isn't really necessary to edit.

### Setting up Maven.

You're not _quite_ off to the races though, only some minor paint splashes yet. You've gotta actually _add_ KUtils as a Maven dependency. So open up the file in your project's root called `pom.xml`, and find the `properties` tag. Inside, you want to add this line of code:

```xml
<kutils.version>0.11.2</kutils.version>
```

This will be used in a minute or two. Next, we need to tell Maven where to find KUtils. It's on the JitPack repository, so put this code in below it.

```xml
<repositories>
  <repository>
    <id>jitpack.io</id>
    <url>https://jitpack.io</url>
  </repository>
</repositories>
```

Let's break that down. `repositories` is a collection of `repository` tags. `repository` tags tell Maven where to look to find packages. By default, it'll look in "Maven Central", which is like the official NPM registry or Docker Hub. But we're configuring it to look in the JitPack repository. So we give it an ID to remember the repository by, in our case we just named it `jitpack.io`, and then we tell Maven what URL to look up to find the packages. In this case, that's [https://jitpack.io](https://jitpack.io).

Alright, so now we know what _that_ did, let's move on to finally including KUtils.

Head down to the `dependencies` section. In here, we're going to set up our reference to KUtils, so that Maven knows to download it when we build the bot into its final form. Pop this little tidbit of code in:

```xml
<dependency>
  <groupId>com.gitlab.aberrantfox</groupId>
  <artifactId>Kutils</artifactId>
  <version>${kutils.version}</version>
</dependency>
```

So here, we're declaring that Maven needs to grab the `dependency` with the `groupId` of `com.gitlab.aberrantfox`, and the `artifactId` of `Kutils`. But wait a second, what's that? That looks like some weird JavaScript string literal! Well, it's similar. You remember when we put `<kutils.version>` in our `properties` tag? Well, putting text in between `${` and `}` makes Maven get the property you set matching that text. So in our case, it'll swap `${kutils.version}` for `0.11.2`.

That should be all, you should now have a blank Maven-enabled, Kotlin-powered, KUtils-backed canvas to spray your art at like some deranged lunatic with a complex or two.

## Setting up the bot

### The main() function

In Kotlin, we define where our app will start from by using the `main` function. In your codebase, there should be a file called `App.kt` or something similar. It should just be a file on its own with the `.kt` extension. If you open that, you'll see this code:

```kotlin
fun main(args: String[]) {
  println("Hello, world!")
}
```

If you hit run (the little green play icon) in the top right-hand corner (for IntelliJ users), after a little while of it building, a window will pop up at the bottom of the screen and in it, the text `Hello, world!` will come out. If you think that's awesome, then great! Maybe the [Kotlin documentation](https://kotlinlang.org) would be a cool place to have a look around before following this guide further.

If, however, you're kind of bored, and wish I'd get on with the damned tutorial---

Then I've got news for you.

Because that's what we're doing.

### Goodbye, println, hello KUtils!

So, let's swap out that measly little `Hello, world!` for a KUtils login, shall we?

So, gut the contents of `main`, and replace them with this:

```kotlin
startBot("your-bot-token-goes-here") {
  configure {
    prefix = "!"
    reactToCommands = true
    deleteMode = PrefixDeleteMode.None
  }
}
```

Now, don't worry, if IntelliJ complains that it can't find any of the things there, click on where it goes red, and hit <kbd>alt+enter</kbd> until there are none left. Now let me break this down.

- `startBot` calls KUtils' start function, using the string we're passing it there (which you need to replace with a Discord bot token. If you don't know what that is or how to get it, use some Google-fu.)
- `configure` is a KConfiguration safe type constructor, which we use to configure the bot's features.
- `reactToCommands` tells the bot to give us a little set of emoji eyes whenever we use a command to tell us it's recognised it.
- `deleteMode` isn't important, and the reasoning for it being there isn't either.

So, is that it? Well, yeah. It is. If you hit run again, you should be greeted with a set of warnings and messages in the output window again. However, if you invite the bot to a server, you'll see that it's now online! Awesome!

Go into that server and type `!help`, and you should be greeted with a cute little embed telling you how the help command works!

## Commands

### Oi! Don't be so bossy with those command words!

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
@CommandSet("Utility")
fun utilityCommands() = commands {
  command("Ping") {
      description = "Pong!"
      execute {
          it.respond("Pong!")
      }
  }
}
```

...which creates a command called "Ping", with the description of "Pong!", and which, when it runs, will respond by saying "Pong!". Try it! Restart the bot and run `!ping`.

That's all she wrote, folks. That's how you make commands and groups of them in KUtils.

So thus far, you can basically make a basic (ah? ah? basically basic? ah? no? nevermind) Discord bot. And (minus reading time (**_hopefully if you actually read this_**, looking at you, skim-reders)) it only took about 5-10 minutes to set up! That's cool, isn't it?

Well, stay tuned, because coming up are some tutorials about setting up arguments, services, preconditions and more!
