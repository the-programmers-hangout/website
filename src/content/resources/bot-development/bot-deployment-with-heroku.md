---
authors:
  - "Chill#4048"
created_at: "2020/04/22"
title: "Deploying discord bots written in Kotlin to Heroku"
external_resources:
  - text: Getting Started on Heroku with Java
    href: "https://devcenter.heroku.com/articles/getting-started-with-java#introduction"
  - text: Java Sample (on GitHub)
    href: "https://github.com/heroku/java-sample"
---

Over my time in TPH, I have noticed that a common woe aspiring bot developers have is that they are unable to host
 their Discord bot online as they may not have access to a credit card. 

## Introducing Heroku!

While the official Discord bots used in TPH - like HotBot - is hosted via paid platforms, there are free alternatives
 to deploying your bot online. This is where Heroku comes into the picture!

> Heroku is a cloud platform that lets companies build, deliver, monitor and scale apps — we're the fastest way to
> go from idea to URL, bypassing all those infrastructure headaches.

Heroku's free tier does not require any credit card information and has sufficient uptime for your basic bot
 development needs and it is a great starting place to understand hosting.

## How does Heroku work?

Before diving into setting up a Discord bot on Heroku, it is best to explain how Heroku is used. Heroku relies on the
 Git version control system (VCS) to manage an application. This means that it integrates well with any existing projects 
 that already use Git. Do not fret, even if your application does not use Git, the configuration and setup for Heroku is 
 still simple.

By using Git, Heroku receives the project files directly and it is responsible for building the project. This is unlike
 other hosting platforms where you would often only supply the final executable - a `.jar` file in our case - to the 
 hosting platform to run.

In order for Heroku to understand how it will build and deploy your application, you must provide a `Procfile`. 

The `Procfile` is comprised of two key components - the dyno to run the application on and the commands to run your 
 application.

According to the [Heroku documentation on dynos](https://www.heroku.com/dynos), dynos are containers that are used to 
 run and scale all Heroku applications. Rather than worrying about configuring your build environment or OS, you can
 focus on building your applications and allowing Heroku to take over the build and deployment process. For all 
 Discord bots, we will use a **worker** dyno.

The build commands we supply correspond to the build commands we use to run our bots locally.

As Heroku uses the project files to determine the type of tools we are using, we do not need to specify the 
 instructions to create the executable. In our case, since we are using Maven, it can intelligently detect the 
 `pom.xml` file and create the `.jar` accordingly. This leaves us with only the run commands to include in our `Procfile`.

Finally, to tighten security, we will store all bot tokens in Heroku's 
 [config vars.](https://devcenter.heroku.com/articles/config-vars) From a code perspective, these config vars are simply
 environment variables available to our applications. This allows us to load our bot token during runtime and prevent
 the bot token from being leaked.

Thus, we can define our deployment plan as such:

1. Initialise the codebase as a Git repository
2. Create a Heroku application for the bot
3. Create a `Procfile` to supply instructions for Heroku to run the bot
4. Store the bot token as a config var to be used by your bot

What I have just presented is a general overview of Heroku as a hosting platform. I will be diving into the implementation
 in the following sections.

## Getting started

For this article, I will be using a very simple Discord bot written in Kotlin. I have chosen to use JDA as the focus of 
 this guide is to understand Heroku. The code repository can be found
 [here.](https://github.com/woojiahao/discord-heroku-deployment-demo)

If you wish to follow along, you can get the repository via

```bash
$ git clone https://github.com/woojiahao/discord-heroku-deployment-demo ping-bot
$ cd ping-bot/
```
 
Aside from that, basic understanding of the following is good to have to understand the technical details of this guide. 

1. [Git](https://git-scm.com/book/en/v2) - version control system that integrates with Heroku to enable easy deployments
2. [Maven](http://maven.apache.org/guides/getting-started/maven-in-five-minutes.html) - build tool for Kotlin to
 manage application dependencies

In Kotlin/Java, we are looking to create a `.jar` file. This `.jar` file can be thought of like a `.exe` file. 
 Essentially, it bundles the application and allows us to run our bot without having to fire up an IDE.
 
To create this `.jar` file, we will use Maven. For more information about using Maven to create `.jar` files, refer to 
 [this](http://tutorials.jenkov.com/maven/maven-build-fat-jar.html) guide.

With the formalities out of the way, let's get down to deploying our bot.

## Installing Heroku

You will have to install Heroku onto your machine to execute the following commands in the command line. You can find
 the installation instructions for Heroku [here](https://devcenter.heroku.com/articles/heroku-cli).

To ensure that you have installed Heroku successfully, run `heroku --version`. My version of Heroku is 
 `heroku/7.39.2 linux-x64 node-v13.12.0`

## Setup a Git repository

As mentioned earlier, we need to ensure that our application is a Git repository for Heroku to work.

While it is recommended to [publish your repository to GitHub](https://help.github.com/en/github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line) (or any other version control website), it is not necessary 
for deploying your applicaiton to Heroku.

If you are using the sample bot, it is already a Git repository.

If you are deploying your own bot, initialise a repository by using the following command inside the root folder of your
 codebase.

```bash
$ git init
```

## Create a new Heroku application

Then, we want to create a Heroku application.

```bash
$ heroku create [project name]
```

The project name is optional and will be automatically generated if not provided. It is recommended that you give a name 
 to be organised.

To ensure that the Heroku application has been created, run the `git remote -v` command to list the remotes of your
 repository. Should your application have been created successfully, you will see a new remote added linking to a Heroku 
 Git remote.

```
$ git remote -v
heroku  https://git.heroku.com/chill-ping-bot.git (fetch)
heroku  https://git.heroku.com/chill-ping-bot.git (push)
```

With the Heroku application created, we can begin configuring our repository to deploy to Heroku.

## Creating a Procfile

As explained earlier, the `Procfile` acts as a build instruction manual for our application. It instructs Heroku how we
 want to run our application. Heroku takes over the rest and helps with managing our build environment.

For my sample bot, the `Procfile` looks like this:

```
worker: java -jar target/Bot.jar
```

Let's breakdown this file. We first declare the dyno type as `worker`. Then, we specify the command to run our `.jar` 
 file. 

Heroku is able to intelligently detect that our Kotlin application uses Maven as a build tool and runs the 
 `mvn clean install` command to create our `Bot.jar` file. Then, it will use the commands in the `Procfile` to run the
 application.

## Securing Discord bot tokens

A Discord bot requires a token to run.

You can obtain this bot token when you make a new Discord bot from the Discord
 [developer dashboard](https://discordpy.readthedocs.io/en/latest/discord.html). 
 However, you do not want to expose this token in your repository as this would mean that others could launch and 
 access your bot. 

As mentioned earlier, we will make use of Heroku's [config vars](https://devcenter.heroku.com/articles/config-vars) to
 safely store and access this token.

We will add our bot's token as an environment variable and use `System.getenv()` method to retrieve this value.

```bash
$ heroku config:set BOT_TOKEN=<bot token>
```

Inside the `Bot.kt` file, you will find the following lines in the `main()` function. 

```kotlin
val token = System.getenv("BOT_TOKEN")
  ?: throw Exception("Must include bot token in environment variable for bot to run")
```

This will retrieve the corresponding environment variable that we have stored in Heroku. If there is no environment
 variable present, we will stop the bot from launching and display an error.

An additional benefit of storing our bot tokens as an environment variable is that we are able to store the bot token
 locally as an environment variable which streamlines our development process as we could have a separate token used
 for a development/testing bot.

## Launching the bot

After configuring everything, commit all the changes to your project, and push it to the `heroku` remote. 

```bash
$ git add .
$ git commit -am "Setup Heroku"
$ git push heroku master
```

If you encounter a problem with pushing to the `heroku` remote, use the command `heroku logs --tail` and find the 
 latest error messages to debug any errors.

After pushing the changes, Heroku will build your application. However, it is not online yet as you have to scale
 your application. This tells Heroku how many instances of your application you wish to run. For our case, we can go 
 with one worker dyno.

```bash
$ heroku ps:scale worker=1
```

You can now invite your bot to a server and test it out. If you're using the sample PingBot, you can use `!ping` and
 expect the bot to respond with `Pong!`.

## Now what?

Congratulations! You have just deployed a Discord bot onto Heroku! When you make changes to the bot, you are free to
 commit and push those changes to the `heroku` remote to update the bot that is online.

Here are some tips for developing with Heroku.

1. While working on your development copy of the bot, it is recommended that you obtain a seprate bot token and 
    attach it as an environment variable to your local development environment. Doing so allows you to maintain your
    bot's uptime while making changes.
2. If you encounter any errors or your bot is not responding, use the `heroku logs --tail` command to view the logs
    of your application. Doing so allows you to check if there were any errors while running your project.
3. If you require persistent storage, Heroku comes with a free tier plugin for 
    [PostgreSQL.](https://www.heroku.com/postgres) Heroku - by default - has ephemeral storage, meaning it does not
    maintain new files after each build.

## Conclusion

Heroku offers a free alternative to many hosting platforms and is a perfect platform for aspiring bot developers to begin.

More resources on hosting JVM-based applications on Heroku:
- [Getting Started on Heroku with Java](https://devcenter.heroku.com/articles/getting-started-with-java#introduction)
- [Java Sample (on GitHub)](https://github.com/heroku/java-sample)

