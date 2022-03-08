---
authors:
  - "Calcium The Bored Penguin#2006"
created_at: "2021/11/08"
title: What is Visual Studio Code?
---

## What is Visual Studio Code?

VSCode is an open-source text editor supported by Microsoft, available for Windows, macOS, and every distro of Linux. Like all the other text editors, you can write whatever you want. 
Install an extension for the language of your choice, start writing code and run it. There, that's all you need to get started with VSCode. 
But, VSCode is much more than that. The biggest superpower of VSCode is its wide array of plugins. Plugins allow you to get different themes, functionality, language support (syntax highlighting, code snippets), etc.

## Why VSCode?

Now I hear you, you're already familiar with the software you use and are wondering why should you even bother. Well, you should. 

Not only is it one of the most popular text editors according to the stack overflow developer survey 2019, but it's also very lightweight and easy to use. Even though it's built with electron, which is notorious for high ram usage, vscode is snappy and fast. It has a simple and straightforward design, everything is where it's supposed to be and lets you just code. I personally think of it as a more beginner-friendly version of vim or emacs.

Dear advanced users who use vim and emacs, this program is heavier than them, but it can be used like vim, with less configuration, for more features.

## Lesser Known Features

### Zen Mode

This is a lesser-known feature of VSCode that should really be more popular. It's just amazing. It hides all the UI. So no activity bar, status bar, sidebar, panel. NOTHING. This allows you to just focus on your code, and finish that project you have been procrastinating on for probably over a week or in my case, working on a WSL config to get transparency working.

![Vscode Zen Mode](https://i.imgur.com/Ximmfbr.png)

it can be enabled with `ctrl + k + v` or through an extension known as "Toggle Zen Mode"

### Command Line Interface

There's actually a lot of features that vscode offers in terms of cli outside of vscode itself

`code` is the command after which various flags allow you to do different things

`.` - this allows you to launch vscode in your current working directory

![Launch vscode via terminal](https://i.imgur.com/SgfP0kg.gif)

`--diff <file1> <file2>`  - This will take in two files as input and then show the differences in split view

#### `—goto`

The full command goes like this

`code --goto <path-to-file>`

You can even specify the line and character to open at. For example,

`code --goto <path-to-file>:<line>:<character>`

For more commands and advanced usage, you can check it out at https://code.visualstudio.com/docs/editor/command-line 

### Useful keyboard shortcuts

`ctrl + G` - This lets you jump to a particular line

`ctrl + P` - This lets you jump to a particular file

`ctrl + T` - This lets you jump to a particular symbol in the file

You can edit any keyboard shortcut by going to File → Preferences → Keyboard Shortcuts

## Extension Spotlight

In this section I would like to throw a light on some lesser known extensions

### Autocomplete

- [Tabnine](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
- [Kite](https://marketplace.visualstudio.com/items?itemName=kiteco.kite)
- [Intellicode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode): different from intellisense which is the inbuilt autocomplete engine.
- [Path intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense): Autocompletes your path. Exactly what the name says. Isn't that nice.

### Syntax

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Formats your code in a very pretty fashion (hence the name)
- [Indent-Rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow): So sort of like Bracket Pair Colorizer, it rainbow colorizes the indent so you know what level of your horrible multi nested if statements. Seriously, refactor that, please
- [Better align](https://marketplace.visualstudio.com/items?itemName=wwm.better-align): Aligns your colons and your = signs etc making it all very neat looking

### Keymaps

Want to try out VSCode but don't want to learn Keybindings? Fret not, for it has plugins for those too.

- [Vim](https://marketplace.visualstudio.com/items?itemName=vscodevim.vim)
- [Atom](https://marketplace.visualstudio.com/items?itemName=ms-vscode.atom-keybindings)
- [Sublime text](https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings)

VSC has it all. 

### File Editing

- Snippets: Short phrase for expansion into a code block
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments): Allows more human readable and highlighted comments on code, such as TODOs, errors, highlighting etc
- [Markdown all in one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one): Takes care of your preview, syntax highlighting, autocomplete
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost): Shows the size of the package your importing into your project
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): Ever had a compile error because you made a grammatical error in one line? Yeah me too. This will make sure that this embarrassing reason for failed compile will never happen again
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): Ever wanted to work on a project with a buddy simultaneously, without waiting for the git commits to come? Well heres a extension that comes to the rescue

### WebDev

There's a lot of web-dev plugins so i am giving it its own special section

- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): You rename the beginning of a tag and it will edit the closing tag as well. 
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): Launches a local development server that live reloads.


### Database

Theres extensions for you folks too with database problems

- [vscode-database](https://marketplace.visualstudio.com/items?itemName=bajdzis.vscode-database): Lets you connect to MySQl Server 
- [SQLTools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools): Allows you to connect to basicly any SQL in the world 

### Git

Who can forget Git. Here's some for git usage

- [Git Lens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): It does a ton of things to supercharge your git workflow including seeing who wrote what via git blame so you can blame then when you notice bad code that shouldve been refactored. 
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory): Look at the git log and the timeline of commits so you can be proud of how many commits you make to your own code. 

### Language Specific Alternatives
Sometimes wonder whether there are better alternatives for language support than the official one? Well yeah there are

- [Rust-Analyser](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer): Its not fully stable so its not official, but the speed and features make it worth it 
- [Pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance): Its from Microsoft, and non open source. Now wait wait wait, its good. it works with the python plugin and enhances it 

### How do I install these?

Well There are three ways.

1. Going to the extention marketplace and installing from there https://marketplace.visualstudio.com/vscode
2. Searching on the extentions tab inside vscode and searching from there (basically an inbuilt version of the extension marketplace) https://i.imgur.com/e7gclf5.png
3. Open the command palette using `ctrl + shift + p` https://i.imgur.com/qm8yI0n.png And then copy paste the code found on the extension page.

## VSC Web
Wait what? Vscode on the web? You mean I can run vscode in my browser to make quick code changes wherever I am?

Well that was awfully specific, but yes!
You can go to https://vscode.dev/ in your browser for it!

Its got pretty much everything vscode has, even extensions. 
There are some limitations, which you can read more about here: https://code.visualstudio.com/docs/editor/vscode-web#_current-limitations 

Read more about the entire thing right here:
https://code.visualstudio.com/docs/editor/vscode-web