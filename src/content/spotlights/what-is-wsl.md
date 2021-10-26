---
authors:
  - "Drac#9999"
created_at: "2021/07/08"
title: What is WSL?
---

## What is WSL?

A lot of people shy away from developing on Windows under the misconception that it’s a terrible environment to develop on, instead, dual booting Windows and Linux, or even switching over to Linux entirely!
Well, WSL is here to change that.
Windows Subsystem For Linux, or simply, WSL is a compatibility layer for running Linux executables directly on Windows 10. WSL is aimed at enabling you to run Bash and core Linux command line tools on Windows. WSL does not yet support GUI applications but it's currently WIP at the time of writing this! https://devblogs.microsoft.com/commandline/whats-new-in-the-windows-subsystem-for-linux-september-2020/#gui-apps

## How is WSL different from a Virtual Machine?

By this point you might be thinking that WSL is basically a virtual machine, and I’ve seen a lot of people think the same thing when I see it being discussed but WSL and a VM are very different.
A VM is isolated, slow to boot and consumes more of your precious resources. Unlike a VM, WSL also integrates well with Windows, meaning you can use your Windows tools alongside Linux

- https://docs.microsoft.com/en-us/windows/wsl/faq#why-would-i-use-wsl-rather-than-linux-in-a-vm-

## What is the difference between WSL1 and WSL2?

WSL1 is the older version of WSL. It essentially just allows you to run Linux applications on Windows 10 _as a new Windows process_. WSL2 on the other hand allows for a far greater integration as it has a Microsoft Linux kernel which allows you to use a larger set of commands which wouldn't have been possible on WSL1.
WSL2 uses a Linux kernel built by Microsoft based on the latest stable branch of the Linux kernel with special modifications to facilitate running on Windows while keeping in mind size and performance. The kernel is open source if you want to take a look: https://github.com/microsoft/WSL2-Linux-Kernel
Generally, it is recommended that you use WSL2 rather than WSL1 but in some cases you'll be better off using WSL1 over WSL2. You can read more about which one you should use here: https://docs.microsoft.com/en-us/windows/wsl/compare-versions#exceptions-for-using-wsl-1-rather-than-wsl-2
If you're interested in the underlying technology, Microsoft's DevBlogs is a good place to start: https://devblogs.microsoft.com/commandline/a-deep-dive-into-how-wsl-allows-windows-to-access-linux-files/

## Cool! How do I install this?

WSL is really very easy to install! Follow the steps in Microsoft’s official documentation and you'll be done installing this in a couple of minutes (note the minimum requirements for running WSL2, i.e. version number and build number).

- https://docs.microsoft.com/en-us/windows/wsl/install-win10
  There are multiple distributions available on the Microsoft Store including but not limited to some versions of Ubuntu, Debian and Kali Linux.
  If you want to work with a Linux distribution not already on the Microsoft Store, follow this link: https://docs.microsoft.com/en-us/windows/wsl/use-custom-distro. You can also build your own Linux distro: https://docs.microsoft.com/en-us/windows/wsl/build-custom-distro
  Now that you are done with installing WSL, its time to start working with it! The best part of WSL is that you can use it just like you would use and work with a regular Linux command-line. It uses the same commands as Linux and it works pretty damn well.

## Working with WSL

### Launching WSL

There are various ways to launch WSL. One of them is simply by going to your Start menu and typing the name of the distribution you installed and then hitting enter. You can also use the `wsl` command in PowerShell but my preferred way is to arrange it all beautifully in Windows Terminal:

![wsl](https://i.imgur.com/AbyMc6O.png)

When you launch WSL, you’ll be in the `/mnt/c/Users/<username>` directory. This is Windows’ `C:\Users\<username>`. It is recommended that you don’t work with WSL on the Windows partition. Instead, you should work on the home (`~`) directory you know and love from the Linux file system (cd into it!). That being said, take some time to navigate around the file system and get familiar with it.

## Interoperability between Windows and Linux on WSL

The integration between Windows and Linux allows you to run Linux commands in PowerShell too. You can read about it here: https://docs.microsoft.com/en-us/windows/wsl/interop

![interop](https://i.imgur.com/Uxxtyou.png)

You can also integrate WSL with your favourite text-editor; in my case, its Visual Studio Code. You can find instructions here: <https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-vscode>
I suggest googling your favourite text editor + WSL for steps to integrate it with WSL.
If you use network applications and want to access a Linux network app from Windows (or vice-versa), give this a read: <https://docs.microsoft.com/en-us/windows/wsl/compare-versions#accessing-network-applications>
Since WSL installs a brand new filesystem separate from Windows' NTFS, you will need to install your CLI apps like git on both Windows and your WSL distro(s) if you want to use it in both places.
**Note:** if you want a cleaner and more customizable UI than PowerShell's or WSL’s (or CMD, if you use that) default terminal emulator, I recommend getting Windows Terminal from Microsoft Store: <https://aka.ms/terminal>

### Bonus Bonus Bonus - Linux GUI apps on WSL\*\*

Remember how I said WSL does not support Linux GUI apps before? Well, I _might_ have forgotten to add the word "officially" because there is a way to run Linux GUI apps on WSL. (Note that the steps below are for WSL2, not WSL1).
Text guide: <https://medium.com/@dhanar.santika/installing-wsl-with-gui-using-vcxsrv-6f307e96fac0>
Video guide: <https://www.youtube.com/watch?v=4SZXbl9KVsw>

![gui](https://i.imgur.com/yD0hk9R.gif)

I installed Emacs in my case (notice how it says `emacs@<HOST_NAME>` on the title bar to show that’s it’s running on Linux) (Vim by the side so that I don't get grilled later on). You can choose to install whatever else you want. Do note that this is a bit laggy compared to if you launched an app directly from Windows. It shouldn’t be as laggy as WSL’s inbuilt GUI app launcher to be released in the future.

Thanks for reading and happy programming ahead :slight_smile:.

## Resources

- Documentation: <https://docs.microsoft.com/en-us/windows/wsl/>
- Source code for WSL Linux Kernel: <https://github.com/microsoft/WSL2-Linux-Kernel>
- Microsoft DevBlogs: <https://devblogs.microsoft.com/commandline/>
- WSL FAQ: <https://docs.microsoft.com/en-us/windows/wsl/faq>
- WSL2 FAQ: <https://docs.microsoft.com/en-us/windows/wsl/wsl2-faq>
- Discussions/issues related to WSL: <https://github.com/microsoft/WSL>
