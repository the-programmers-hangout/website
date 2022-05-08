---
authors:
  - "Dreameh#0001"
  - "YOHWLLO#9962"
  - "Drac#9999"
created_at: "2022/04/08"
title: What is Linux?
---

## The History of Linux / What is Linux?
The story of Linux starts back in 1969 when Ken Thompson and Denis Richie were creating the Unix operating system which was loved by businesses and universities. But there was a problem, the code was owned by a company called AT&T, but was all fine and dandy until the fire nation attacked Berkeley University decided to make their own operating system called BSD. Which caused AT&T sue them, and that was the start of the Unix Wars which put limitations on Unix development. A couple years later Richard Stallman started the GNU project which was meant to be a Free and open alternative to Unix.

However Unix is large and complex with hundreds if not thousands of applications so replacing it was no easy task. So for the next few years the project created the tools which we know and love today (Emacs, Grep, Bash, Grub, etc). By the early 90’s GNU had tons of software but was missing something, something vital to software. What could it be?

It was missing the “Operating System Kernel”, which basically sits between the hardware & software turning your commands, and system calls into actual actions on the hardware. On August 25th 1991 a 21 year old named Linus Torvalds decided to make an operating system, just as a hobby. Then fast forward a few years and it became one of the most important projects in the history of computing. This software was called “Linux”. Linux was built upon the principle that software should be free and open.

When it was first released it had limits on commercial use, but by 1993 it was released under GPL (GNU General Public License), and this gave birth to GNU + Linux, or Linux as most know it. The following year hundreds of developers jumped onto it and started adapting GNU to work on Linux. The beauty of Linux was that it was like Unix but you could do whatever you want and not get sued.

This led to some of the first Linux distributions like Slackware, Yggdrasil, and Soft Landing, to name a few. Many of these older distros are no longer maintained and are considered historical artifacts (except Slackware, which led to OpenSUSE).

## What are Linux distributions?
When people say Linux “distributions” or simply, “distros”, they usually mean operating systems which use the Linux kernel. There are various types of distros suited specifically for personal home use (PCs), workstation, embedded devices, etc. They’re basically different versions of Linux, they are all packaged differently with different pieces of software (out of the box, you can usually download other pieces of software).

These distros come with their own package managers, window managers and/or desktop environments which can also be further customized by the user. Certain Linux distros allow for a great degree of customization which is rare to see in other operating systems.

Something to keep in mind when using Linux is, anything and everything can be changed and switched out. Let’s say you want your Debian install to look like Garuda you don’t have to install Garuda, rather you can just install what Garuda used to make it look well like Garuda.

Obviously, with this much freedom, it can be pretty intimidating to choose one. No worries at all, we’ve all been there with our first distro choice. But don’t worry if you can’t choose one though, many people “distro hop” which is regularly hopping from one Linux distro to the next.

Below you can find a link which might help you in your quest to have the Linux distribution which fits your morals and lifestyle the best.
https://distrochooser.de/en/

## How to install a Linux distribution?
Now that you have picked up your distribution of choice, it’s time to finally get going and install it!

The first step is the choice of whether to only have Linux or dual boot with another operating system such as Windows. Both ways require certain steps to be made before the Linux distribution installation can be initiated.

## The steps are as following:

• Go to the distro’s website and download the distribution, often in the form of a ISO file.
• Always remember to backup everything beforehand which you might wanna save.
• Get yourself a USB stick and use a image flasher such as Balena Etcher or Rufus, which can turn the USB stick into a bootable USB used for installing the distribution.
• Continue following the instructions from the distribution’s website, as most have a very good guide on how to install the distribution of choice.

## Installation Resources
• [Dual booting Linux & Windows](https://opensource.com/article/18/5/dual-boot-linux)
• [Rufus](https://rufus.ie/en/)
• [Balena Etcher](https://www.balena.io/etcher/)
• [Example installation of Ubuntu](https://ubuntu.com/tutorials/install-ubuntu-desktop#1-overview)

## Installation of packages

There are a few ways to go about installing software on your newly installed operating system. One of those ways is to use the included software store applications which many distributions include for you. Examples of this is GNOME Software, Discover and Pop!_Shop.

If the software you are looking for does not exist on the store application, it might mean that it can be downloaded as a package from the application’s website (example: Minecraft for Ubuntu or Fedora), or it could be located in your distribution’s package manager (some packages can only be downloaded via commands). As a last resort, you might have to build the application yourself.

Many users might find themselves using a package manager from the command line to do their bidding when it comes to installing software, but with the other options above, it is not the only way to install software, nor is it a requirement to use a package manager from the command line.

## What is a package manager?

Many Linux distributions come with something called a “Package Manager” (like apt, dnf, or pacman) and you’ll see these get used a lot while installing apps and updating your system. A package manager, as the name implies, manages packages, software, or development kits on your system.

Now you’re probably wondering, “Why are there so many?” Back in the ye old days, there was no standard. So several were made. Back then a package manager only got a package from a repository and would attempt to install it; it wouldn’t install any dependencies. A little while later the maintainers decided to expand the functionality of package managers to also configure, and install dependencies.

On Windows or MacOS if you want to download a application (example: Google Chrome), there are several steps involved. First, you have to go to their website to download the installation package for the application, give it permission to install the application and then finally install the application. Whilst on most Linux distros (which use apt in this case), you can open up a terminal session, type the following and hit run:
```
$ sudo apt install chromium-browser
```
Using sudo before the package manager name will give elevated permissions to the package manager to install the latest version available in the repository.

To learn more about the package manager type and run:
```
$ man apt
```
This directs you to the manual page of APT. You are encouraged to look up the manuals of all commands your encounter if you need to know more about them.

Note: Neither macOS or Windows come with a package manager pre-installed. However, Homebrew is available for macOS, while Chocolatey is available for Windows to name a few.

## Introduction to the Linux Command Line
One of the superpowers of Linux is the fact that almost everything you do using a GUI (graphical user interface) can be done using a CLI (command line interface)/CUI (character user interface).

This may not be something a lot of users like to use, however - there are quite a few people who want to avoid command line interfaces because it’s intimidating - and that’s perfectly fine but as programmers on Linux, it’s only a matter of time that you finally have to use it.

To learn about them, open up the terminal app on your distro - different distros use different terminal emulators and it doesn’t really matter which one it is. There’s usually also a keyboard shortcut for that - most distros have it as Ctrl+Alt+T. The terminal emulators are an interface to interact with shells.

If you are on bash you should be welcomed with a rather plain and simple screen with your username and PC name separated by a -, your current working directory and a prompt sign ($). You should by default be in the user home directory which is denoted by the tilde sign ~. That is not the real name of the directory, though. Type pwd (print working directory) to see what the actual folder is. The tilde symbol merely points to the $HOME variable.

## The basics of the Linux Command Line
Firstly, what is a command? Well the definition of “command” is “To give orders”. When you give your computer a command you’re telling it to do something, whether it be to move a file or draw something on your screen. Now what’s a command line? A command line is a way to tell your computer commands to execute, and a way for it to tell you about things. In most if not all operating systems there is a way to issue direct commands to your computer, on mac you use “Terminal”, on windows it’s “cmd” or “PowerShell”.

@sudonym best explained the Linux command line, shell and terminal as:

The terminology here can be somewhat confusing but the program that asks for your input, interprets it, runs commands is called a “shell”. A shell is named as such because it’s the outer layer of an OS, while the inner part is called “kernel” (if you think of your computer as an acorn).

Now, a shell need not be textual, so modern day OS have a graphical shell. But they provide a text shell inside this graphical shell, which is why it is said to be an “emulator”.

## Linux command-line resources
https://ubuntu.com/tutorials/command-line-for-beginners
https://www.freecodecamp.org/news/the-linux-commands-handbook/ 

## What is bash
Now that we have all that stuff figured out, let’s move onto the interesting stuff. What are the different parts of a command? What are some keywords, and phrases I should know? What shortcuts can I use?
There are 3 (technically 4) parts to every command, it’s name, token, and parameters/arguments. The command name tells it what program to run, and where to go to find it. In bash you’re able to set an “alias” for any command. When you run let’s say git commit -m “Minor Changes” it will see git and replace “git” with /usr/bin/git (location of the git program on my computer), so it can run git. Then you have the token, which is like a keyword for whatever program you’re running. In this case it’s commit . Then you have the arguments this time it would be -m “Minor Changes”. -m is an flag which tells it to commit with the message, and my credentials, then the “Minor Changes” is an argument which tells the program what the message is. While we are talking about this we should talk about the difference between -- and -. One is used for words, another is used for one letter arguments, which varies from program to program (for example -h and --help or -v and --version/--verbose).

## Bash learning resources
https://linuxconfig.org/bash-scripting-tutorial-for-beginners
https://tldp.org/LDP/Bash-Beginners-Guide/Bash-Beginners-Guide.pdf
https://docs.microsoft.com/en-us/learn/modules/bash-introduction/
https://learnxinyminutes.com/docs/bash/

## Why use commands?
Well for one typing in a command and seeing the computer doing its thing is way more satisfying than just pressing update. Also using commands often frees up valuable system resources. Finally, you can make a script to automate something. A few months ago I was working on a project where we had to recompile the program every hour or so for testing, and compiling it required me to type in 10~ish commands every time. Instead of doing that I decided to make a script to do it for me.