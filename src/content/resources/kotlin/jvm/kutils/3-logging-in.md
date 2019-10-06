---
authors:
  - "Hayden#5036"
created_at: "2019/09/06"
title: 3 - Logging in
---

## The main() function

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

## Goodbye, println, hello KUtils!

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

Next guide, we'll go into making your own commands and commandGroups!
