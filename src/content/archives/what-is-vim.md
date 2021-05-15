## What is Vim?
Slated as the 'ubiquitous text editor', "Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient." according to its website at <https://www.vim.org>. It is a command-based text editor, so instead of menus and icons, it relies solely on keybinds and commands a user can type into it.

## Where can I get Vim?
See the official Vim website, at <https://www.vim.org/download.php>
Note: If you are using a UNIX-like operating system, you are very likely to have Vi (the precursor to Vim) installed, some GNU/Linux distributions alias vim-lite or vim.tiny to be vi. You can use Vi if you’re in a pinch and can’t install Vim, but it will not be as customizable as Vim

## Why should I use Vim?
Vim is a very powerful tool that can increase your productivity and efficiency when writing anything on your computer. There *is* a common misconception about Vim being difficult to use, and confusing to learn. However, Vim is surprisingly easy to pick up once you start to develop muscle memory, and even then, it is very simple to remap commands and such to other keybinds.

## Some of the benefits of using Vim include:
- As the website suggests, Vim is *very* configurable and extensible. With a wealth of extensions and very easily picked-up configuration/scripting language, it can become any type of text editor you need.
- Once you start to develop muscle memory for it, you can become incredibly quick at editing, especially when compared to something like Emacs, as the default keybinds are simple, like "dd" to delete a line.
- Vim has plugins for everything from fuzzy search to code completion to prose editing, but even then, provides a lot of features you would want out of the box.
- Vim is very light and will run on basically any computer from the last 25 years

## What are Modes?
Vim is a “modal” editor, as opposed to a “non-modal” editor like Emacs, or Notepad. Vim’s “modes” are meant to act as finely tuned tools for interacting with documents. Some examples of modes include but are not limited to:
- Normal mode: Where you will type in your commands and do most of your keybinds
- Insert mode: The mode in which you can input text into the currently opened file
- Visual mode: Allows you to make selections in your files and perform actions on them, like running commands in normal mode, but for groups of text.

## But how do I exit this thing?!
Exiting is actually incredibly simple. First, get into normal mode, you’ll know you’re in normal mode when the h,j,k, and l keys move the cursor around the document, you should try to use those keys instead of your arrow keys to navigate. If you are not in normal mode, simply press the escape (Esc) key on your keyboard.  In normal mode, simply type `:q`.

If you want to save and exit, type`:wq`.
If you want to forcibly save and exit, type `:wq!`.

So yes, people who post *that meme* are wrong. Exiting vim is easy.
If any of this confuses you, press Control-C twice and follow what the prompt tells you. 

## Configuring your Vim
While Vim comes with some reasonable defaults out of the box, a lot of people will no doubt find issues with them, and seek to modify/disable certain features. Luckily for those people, Vim is shockingly easy to configure.

For example, to enable line numbering, you can simply add `set number` to your vimrc
(`~/.vimrc` or `~/.config/nvim/init.vim` on UNIX-like operating systems depending on if you’re using Vim or Neovim)

## Some examples of configuration options:
```viml
set number “ enables the line number column
set relativenumber “ makes the numbers in the number column be relative to the cursor
set shiftwidth=2 tabstop=2 expandtab “ use 2-space indents with <tab>
```
If you want plugins, there's a large amount of ways to install those, too. Vim 8 comes with its own package manager as standard, but you can also any of the many community-built plugin managers out there like [vim-plug](https://github.com/junegunn/vim-plug) and [Vundle](https://github.com/VundleVim/Vundle.vim).

If you want code completion, you can try packages like the humorously-named Coc.nvim (which stands for "Conquer of Completion", and can be found at https://github.com/neoclide/coc.nvim), or the more robust and well-known (though slightly less able) [YouCompleteMe](https://github.com/ycm-core/YouCompleteMe).

## Try out vim without trying out vim
Vim has been around for such a long time that the ideas exist in a plethora of tools outside this editor. Many modern IDEs/Text Editors like VSCode and Jetbrains have vim plugins available (called VSCodeVim, IdeaVim emulate key vim features), and whilst they’re not a complete set of what vim does, it has most of the core bindings and it goes to show the sheer community support available once you learn this tool. Emacs has a vast array of EVIL (Extensible Vi Layer) plugins, including popular vim plugins like vim surround.

Forks of vim also exist that tackle certain issues like async, such as Neovim (which you can look at here: https://github.com/neovim/neovim). Even popular web browsers have vim extensions. Google Chrome has vimium, that has navigational style single-key commands, and you can exclude certain websites from using it. Firefox has vimperator, and Safari has Vimari. Certain apps have vim style bindings like the feedly RSS app and Todoist on google chrome with the todoist-shortcuts extension (https://github.com/mgsloan/todoist-shortcuts).

In fact, if you use Neovim, some editors even allow you to embed it into them, running your own configuration & using your customizations. For example, the VSCode extension “Neo Vim”.

## Resources
- Vim's built-in vimtutor is great for learning the basics, which you can access by calling `:vimtutor` from within the editor.
- https://github.com/kevinSuttle/learn-vim
- https://www.youtube.com/channel/UC8ENHE5xdFSwx71u3fDH5Xw (high energy vim enthusiast who does a ton of tutorial videos for it)
- http://users.ece.utexas.edu/~adnan/vimqrc.html
- https://www.openvim.com/
- https://vimawesome.com/
- https://vim-adventures.com/quiz/ (this is a test to see if you know vim well to cleanup this board in the least keystrokes possible)

## Paid Resources
- Modern Vim: https://pragprog.com/titles/modvim/
- Vim Adventures: https://vim-adventures.com/