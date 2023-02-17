---
authors:
  - "Zwack010#0001"
created_at: "2022/05/07"
title: What is Replit?
---

## What is Replit?
Replit is an online IDE which provides a platform for people to write, run, and share code all within their browser. Replit can run over 80 programming languages, and the option for users to add more languages thanks to the Nix package manager.

## Why has Replit been created?
Replit was created to solve an important problem when it comes to programming: accessibility. Currently, programming is more or less restricted to people with access to laptops and PCs. Replit’s goal is to lower that barrier for entry, while also creating convenient and efficient tools for developers that already have access to powerful resources.

## How does Replit work?
Replit operates very similarly to cloud tools such as Google Docs, except instead of creating documents it creates a development environment. Environments on Replit are called a “Repl”, which stands for “read-eval-print-loop”. The environments are Ubuntu 18, and support all Nix packages. Along with an environment, a Repl comes with an editor and LSP. The editor will change if the environment starts running a web server or GUI application, and a window will open to display the respective apps. 

## How much does Replit cost?
Even though Replit is a for-profit company, it's still free. Anyone can create an account, with no ads, and Replit does not sell your data. Replit currently makes money through its hacker plan subscription, and educational / business licenses. Hacker accounts and accounts under educational or business licenses run on more powerful machines.

## Can you give me an example?
Sure! Let's take [“The Programmer's Hangout”](https://github.com/the-programmers-hangout/website) website and turn it into a Repl!. When creating a Repl, select “Import from Github”, and paste the Github link. Replit will set up a new environment with the Github code in it. 

Then select the language the repo uses the most, which Replit will try to guess automatically. Then for this repo, we want it to run the command yarn run develop –host 0.0.0.0 when the green “Run” button is clicked. The reason for this is because the TPH website uses yarn to run the web server. So after we put that command in and click done, you can click “run” and the website will start getting set up!” Here's a fork of the website put together by Zwack: https://tph-website.21natzil.repl.co/ 
![Image](https://i.imgur.com/8hMtCSn.png)

## Can I use Replit as a server?
Yes, and no. You can run code, and it will continue to run even when you’re not visiting the Repl in your browser. However, if your code is not “pinged” within 5-10 minutes, it will close. Pinging is done by setting up a webserver on a Repl, and sending HTTP requests to it every few minutes. This keeps your Repl running, absolutely free. Users with the hacker plan can enable “Always On”, which as you might expect keeps the Repl online without the need for pings. With that said, Repls will reset every 48 hours or so, even when pinging or if “Always On” is active. In addition, data like logs will not be saved for non-hackers, as when the machine is reset only code written by the user will remain the same.

## So can I run my Minecraft server on Replit?
You actually can, but it’s not recommended. https://replit.com/@21natzil/Paper
Using paper and ngrok it's possible, but Replit does not yet have the option to add enough resources to provide a good user experience to people playing on the server.

## Can I run my personal website on Replit?
Absolutely! In fact, you can link domains you own to your Repl, either by adding CNAME records or a Cloudflare proxy. If you’re ok with your service briefly resetting every once in a while, like for blogs, applications, even small discord bots, then hosting on Replit is a free option.
![Image](https://i.imgur.com/bqoinld.png)

## Replit is used in schools too!
Outside of being used by your everyday developer, Replit is also largely used by schools across the world. Teachers can create free COPPA and FERPA compliant classrooms on Replit, which help bring students into the real world of development. Teachers can provide Repl templates and set up automatic tests to simplify grading. So instead of being restricted to block programming or javascript without most features, teachers can teach whatever language or tools they want. Even if teachers don’t have time to create their own curriculum, Replit has a bunch of resources already written! https://docs.replit.com/teaching-curriculum/intro-teaching-curriculum

## Can I use Replit with other people?
Yes! Replit has a robust code collaboration tool called Multiplayer. Multiplayer allows programmers to invite other people (either directly through Replit or via a link) to share a Repl. Each person can edit and view other people’s changes as they happen, and communicate either via the chat, or on threads attached to segments of code. One programmer could create a thread and explain a bug on a highlighted line of code. Then a separate person either synchronous or asynchronous can fix the bug, and resolve the thread. To try it out, @Zwack would like to challenge TPH to build anything in this Node.js multiplayer Repl they have made: https://replit.com/join/mnbzeddjnm-21natzil
