---
authors:
  - "Hayden#5036"
created_at: "2019/09/06"
title: 2 - Installation
---

## Setting up our IDE

So, for this guide, I'll assume that you're using IntelliJ IDEA. It comes with Kotlin bundled, after all! Open it up, smash that 'New Project...' button, and click on the Maven category. Use the Kotlin archetype and hit next. Give your project a `groupId` and `artifactId`, but version isn't really necessary to edit.

## Setting up Maven.

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
