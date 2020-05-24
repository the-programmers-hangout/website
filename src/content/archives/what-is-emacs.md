### Table of Contents

- [What is Emacs?](#what-is-emacs)
- [Where to get Emacs?](#where-to-get-emacs)
- [Note](#note)
- [Why Emacs?](#why-emacs)
- [Emacs Basics](#emacs-basics)
- [Other General Points](#other-general-points)
- [Distributions](#distributions)
- [Resources](#resources)
- [Fun Facts](#fun-facts)

### What is Emacs?

Emacs is a Lisp interpreter. It is commonly used as a **text editor** for reading and writing code, although you can use
it to write academic documents or do your taxes, if that is more your style. It has a very rich history and it is almost
certainly the most flexible text editor that is publicly available. As such, it tends to be the case that one dev’s use
of Emacs is **very** different than another’s.

### Where to get Emacs?

- MacOS:
  - [Instructions from WikEmacs](http://wikemacs.org/wiki/Installing_Emacs_on_OS_X)
- Windows:
  - [Instructions from EmacsWiki](https://www.emacswiki.org/emacs/MsWindowsInstallation)
  - You may want to look into WSL as well
- Linux:
  - [Instructions from WikEmacs](http://wikemacs.org/index.php/Installing_Emacs_on_GNU/Linux)
  - [Instructions for Snap](https://snapcraft.io/install/emacs/elementary) (26.3, stable and recommended if you choose snap)
- Catchall:
  - Build from source [(GitHub Mirror)](https://github.com/emacs-mirror/emacs)

### Note

This spotlight has a tendency to change tenses and focuses. This is because it was written by 5 separate people. Emacs
also has quite a bit to offer. This spotlight was written to share and introduce Emacs, not necessary make experts nor
convert everyone. There wasn't a need to go into the nitty grity details until the free Q&A portion of the spotlight. If
you have any remarks or fixes, feel free to make a pull request
[here](https://github.com/the-programmers-hangout/website/issues/new). If you require some help or clarification, the
tech champions (as well as other TPHers) are available in the [discord](https://discord.gg/programming) on the
`#editors` channel. Feel free to drop by and say hi. There are a few memes that kept us sane scattered around.

### Why Emacs?

Many people look at how poor the out of the box experience with Emacs is, compare it to VS Code and dismiss Emacs as an
option, stating that it’s simply too difficult to use, it’s ugly, and that concludes their experience with Emacs. I’m
going to attempt to persuade you for a few moments of the following points:

1. The out of the box experience with Emacs doesn’t have to be so barebones.
2. The learning curve is actually substantially lower than you might think it is.
3. Emacs is capable of much more than any other editor is, generally speaking.

Let’s address these points in order.

#### Point one: The Emacs out of the box experience

It is absolutely true that Emacs seems to be barebones and archaic when first used. Let’s take the example average user:
They download VS Code first and attempt to use it, it has syntax out of the box, you open a JavaScript file and it says
“Hey, do you want to download X, Y and Z plugins?”, they click “yes” and they’re ready to edit some JavaScript. Then
they download Emacs, they run it, they are presented with some screen about how Emacs is “one component of the GNU
operating system” and a bunch of links. Immediate questions:
- How do I open a file?
- How do I “do things”?
- Why are the blue links in my face and a handbook link?
- Why isn’t the window full screen?

This is not how Emacs should be used. Emacs is not a text editor, it is only incidentally a text editor. Emacs is much
more like an application framework, inside of which you have control over everything. This application framework is
controlled by *Lisp*, in specific, Emacs Lisp. You know nothing of Emacs Lisp or Emacs and you just opened Emacs up, how
can you expect to be anything *except* confused?

So we have this apparent complexity issue with Emacs, and we want to be pragmatic in the same way that we were when we
opened VS Code, without any extra information, we started coding. We’re going to have to sacrifice a small amount here,
in that we need to install an extra thing in order to get that same kind of out of the box experience.

(For the savvy people, we're going to use [spacemacs](https://www.spacemacs.org/) as our clutch since most of use are
using custom configuration. We highly recommend looking into other distributions like [Doom
Emacs](https://github.com/hlissner/doom-emacs), especially if you want to give Emacs a second shot and see how fast it
can get).

Open a terminal and execute the following command:

```bash
git clone https://github.com/syl20bnr/spacemacs ~/.emacs.d
```

**Note:** For Windows users, you will need to point the last part of the command `~/.emacs.d` to wherever you have set
your home directory to. (A neat treat to check where to install: open emacs as is [yes yes, we're sorry your eyes burn];
type in `M-x user-emacs-directory RET`; where `M` is your meta key which tends to the alt key, `M-x` is pressing meta
key and `x` key at the same type, you type out `user-emacs-directory`, and `RET` is enter; this should show you the path
you'll want in place of `~/.emacs.d`).

This will install **Spacemacs** for you. Spacemacs is an out of the box experience for Emacs, which you will need to
configure and change very little. When you first open Spacemacs, it’ll ask you some questions, one of the questions is
do you want to use Holy or Evil mode. If you are familiar with vim, select evil mode. If not, select holy mode (Holy
mode is the regular, default Emacs, without evil mode, sometimes referred to as “vanilla” Emacs. Evil is vim
keybindings).

What this will do is install a sane, default configuration for you. There is very little learning that goes into
learning Spacemacs initially. We’ve documented it later. If a good out of the box experience is super key for you, it’s
recommended that you use a distribution like Spacemacs, as that is the singular focus of distributions.


#### Point two: The Emacs learning curve myth

A lot of times people will associate Emacs with having a very steep learning curve. This is not true on any front
actually, even for the base, clunky, ugly Emacs you saw earlier. The reason for this is that Emacs is actually
self-documenting. It does a really good job of helping people to learn it, you just have to be *willing* to learn it. It
can take 1 - 2 days to get very familiar with all of the basics (Described in the basics section) and then maybe a
further 1 - 2 weeks to be as productive as you were before. After that, the sky's the limit. We’ve included some basic
configurations for a lot of common programming languages in `tphmacs`
[here](https://github.com/the-programmers-hangout/emacs/blob/master/.emacs.d/config.org), written in such a way that you
can just pop them into your configuration.

![Emacs Learning Curve](https://i.stack.imgur.com/7Cu9Z.jpg)

Additionally, packages like “[which-key](https://github.com/justbur/emacs-which-key)” and
“[discover-my-major](https://github.com/jguenther/discover-my-major)” can help you learn very complex packages/ plugins
very trivially. I almost never have to google stuff to figure out how to use Emacs because just asking Emacs is faster
than asking google.

![What's
googling?](https://lh3.googleusercontent.com/proxy/G6sSs4tj68tQQuM00xckwrqDKOsxOlhqN8eF386xLY5rQAtKTSJwq_yHahlle15oSFwrPGklB54VUSefL-VwMNzmfPQIjSj_iopnHx9uZPUb0he_CiDgWSKzHYDbey0Lo-z3R7SDMUSlYAcKQRDj9VJuZCDesBmnIbw)

#### Point three: [Generally] Emacs is capable of much more than any other editor

So up until this point, we’ve just been laying out the ground work which indicates what makes Emacs equal to your old
editor. It’s certainly the case that Emacs isn’t as good in some specific cases, for example, with Kotlin. This language
is quite the edge case, though, as it’s usually the case that for newer languages Emacs is very good. However, generally
speaking it’s an equal playing field, all things considered.

So what can Emacs do that your current editor might not be able to? Below you can find a short list of items that
demonstrate the raw power present within Emacs, that might help to persuade you to use it.

- Emacs can be used as a Window manager using EXWM. Say goodbye to i3wm.
- Emacs has a web browser built into it (EWW) - the name is fitting because it’s not pretty, but I’ve used it so many
times for just quickly jumping to a link from the comfort of my editor.
- Emacs allows you to write a *literate configuration file*. This means that the configuration file you have in Emacs is
super easy to understand. (Anecdote in bound) Back when I was using vim, I had a very long .vimrc which essentially
consisted of stuff that I had copy/pasted from stack-overflow, that I had no real understanding of. In Emacs, I’ve made
my entire configuration file myself, and I can understand it all, because it’s just code with associated documentation.
- Emacs has Eshell, which is actually significantly more powerful than the regular terminal you are used to. It is a
*Lisp REPL* as well as a fully fledged terminal. This can be immensely powerful. Additionally, because Eshell outputs to
just a regular text buffer inside of emacs, you can search, yank, paste, and manipulate text in the same way that you
can throughout the rest of Emacs.
- Org mode is one of the most powerful document formats available, and it requires no special encoding to use it, it’s
just a plain text file. You can hook it into pandoc, too. It’s worth noting that you can export to LaTeX and it’s much
more ergonomic than regular LaTeX.
- Vim emulation inside of Emacs is basically perfect. If you are persuaded by any promise that you can find from vim,
Emacs has the ability to use *everything* inside of vim.

### Emacs Basics

#### Keybinding Syntax Basics

**Sequence of keys:** `a b c d` represent the following sequence of key, a then b then c then d

**Key modifiers:** They are followed directly by a `-`, they represent "special" keys such as control, alt, the "windows
key" and so on.  They are meant to be used simultaneously with other keys, such that `C-x` means pressing control + x at
the same time.  The list of available modifiers:
- `C`, the control key
- `M`, the meta key, commonly bound to alt or option
- `s`, the super key, also known as the "windows key"
- `H`, the hyper key, which is usually unbound by default on most systems
- `A`, the alt key, which is also unbound, this is not the actual alt key

**Keychords:** They're represented by one or more modifiers followed by a dash and any key, such that `C-b` is control+b
and `M-s-s` is meta+super+s

#### Holy Mode Users

Humble note: commands tend to start with `C-x` or `C-c` with holy bindings. With that, here are some basic operations
everyone user needs with holy keybindings:

**Open a file:** `C-x C-f` (f is for FILE)

**Save a file:** `C-x C-s` (s is for SAVE)

**Searching:** `C-s` (s is for SEARCH) OR `C-r` to search backwards from current point (r is for REVERSE)

**Quitting Emacs:** `C-x C-c`

**Stuck in the middle of a command?:** Mash `C-g`!

#### Evil Mode Users

The first obvious question to ask here about operating an evil-mode configuration is “how close is evil mode to regular
vim”. The answer is: Very. Certainly as a long term vim user, I’ve never noticed anything out of place. So if you have
read vimtutor, all of that applies here.

#### Evil Operations

Some basic operations for you, I have taken the liberty of writing the mnemonic with them:

**Open a file:** In normal mode `:e <file name>` (e is for EDIT)

**Save a file:** In normal mode `:w` (w is for WRITE)

**Searching:** In normal mode `/<search>`

**Delete a file:** In normal mode `!rm <file.txt>` (rm is for REMOVE)

#### Some evil mode notes

Personally, I don’t use the file operations from evil mode. I just use evil mode for the text navigation and
manipulation. For searching I use swiper which I’ve bound to `C-s`, and I use Helm to find my files. Counsel with ivy is
a popular alternative to Helm. That’s the beauty of it, you can mix and match whatever makes more sense to you
personally.

### Other General Points

#### Buffers and Windows

Emacs' terminology relating to what people usually refers to as windows and buffers is different, it's important to at
least roughly know the difference between them as these terms will be used later on.

A *buffer* refers to the data
associated with a certain type of file or action, for example the content of a file, a terminal emulator or an
image. They can be hidden or displayed in a window.

A *window* refers to a panel or split inside a frame, it is used to
display a buffer.

A *frame* in emacs refers to the graphical window you are using emacs in, it contains windows, you
can have multiple frames per Emacs instances.

[Here](https://emacs.stackexchange.com/a/13584) is a more detailed explanation on stackexchange with an illustration.

#### Major and Minor modes

Modes are Emacs' way of understanding what you are doing and what you want to do.  All all time you have one active
major mode and 0 or more active minor modes.  A mode can alter the behavior of emacs in many ways, such as changing
keybindings, changing the display of the buffer, enabling auto-completion, modify an existing function, the list goes
on.

Major modes provide ways to interact with specific file types, like a file containing source code, or a specific buffer,
like an interpreter or a git interface.  Minor modes are just like major modes, but you can have multiple of them
enabled at the same time, an example of a minor mode is `line-number-mode` which displays the line numbers in your
modeline and isn't specific to a file type.

There are multiple ways to enable a mode:
- Manually, by invoking the mode like a function eg. `(line-number-mode t)`
- By using the variable `auto-mode-alist` to associate a *major* mode with a file extension, `(add-to-list
  'auto-mode-alist '("\\.py\\'" . python-mode))`
- By using *hooks*, which will run the modes like functions when the hook is triggered, `(add-hook
'prog-mode-hook#'line-number-mode)` By default, the appropriate major mode should activate automatically depending on
file extension, just like in any other editor.

#### Dired Mode

Emacs includes a _dir_ectory _ed_itor mode called `dired` that lets you view directory contents, traverse directories,
and manipulate files, just like you would in a normal shell. A cheat sheet is available
[here](https://ebzzry.io/en/emacs-dired/), and see [this section in the
manual](https://www.gnu.org/software/emacs/manual/html_node/emacs/Dired.html) for all the details.

### Eshell/Term/other terminals

Because of Emacs’ long history, there are a number of solutions for accessing terminal functionality. Further
explanations are in [stackexchange here](https://unix.stackexchange.com/q/104325).
- **M-!**: not a full-featured shell, but lets you run a single command quickly, like `!` in vim.
- **Shell**: The original Emacs terminal implementation. Because of how it runs the underlying shell, its color display
support is flaky and curses apps don’t work.
- **Term and ansi-term**: A newer terminal implementation, where everything looks and works closer to what you’d
expect. You probably want `ansi-term`, which will open a new buffer with a fresh terminal every time it’s called.
- **Libvterm**: A much more performant and customizable terminal, but needs `(use-package vterm)` and for Emacs to be
compiled using `--with-modules`.
- **Eshell**: Unlike all the other emulators, this one lets you evaluate Elisp directly at the prompt. See [this section
in the manual](https://www.gnu.org/software/emacs/manual/html_node/eshell/index.html) for how to best take advantage of
this power.

### Distributions

Setting up Emacs is hard, here are some prebuilt Emacs distributions you might want to try <https://www.spacemacs.org/>
<https://github.com/hlissner/doom-emacs> Doom is Spacemacs taken to the extreme: very opinionated, evil only, and
designed to go fast.  <http://www.emacs-bootstrap.com/> Interactively generate a config with only the languages you care
about.  If you want a non-Spacemacs experience, closer to what you’d get if you configured Emacs from scratch, but in a
literate style <https://en.wikipedia.org/wiki/Org-mode>, use our config wholesale: `git clone
https://github.com/the-programmers-hangout/emacs.git ~/tphmacs; ln -sv ~/tphmacs ~/.emacs.d`. Pull requests welcome!

### Resources

- <https://learnxinyminutes.com/docs/emacs/>
- [The GNU Emacs Reference Card](https://www.gnu.org/software/emacs/refcards/pdf/refcard.pdf)
- [Uncle Dave’s Emacs Tutorials](https://www.youtube.com/watch?v=d6iY_1aMzeg&list=PLX2044Ew-UVVv31a0-Qn3dA6Sd_-NyA1n)
- [Installing and Getting Started with Spacemacs](https://www.youtube.com/watch?v=hCNOB5jjtmc)
- [Learn Emacs Org Mode in Spacemacs](https://www.youtube.com/watch?v=PVsSOmUB7ic)
- [Zaiste’s Doom Emacs Tutorials](https://www.youtube.com/watch?v=rCMh7srOqvw&list=PLhXZp00uXBk4np17N39WvB80zgxlZfVwj)
  (in particular, the Magit videos are good and not Doom-specific)
- <https://www.masteringemacs.org/>

### Fun Facts
- Some users use vs code and whatnot, but pop open Emacs just for [Magit](https://github.com/magit/magit) because it's
  just so amazing.
- Again, some other editor users pop open Emacs just for Org-mode.
- The butterfly command from XKCD 378 exists, try `M-x butterfly RET`.

![xkcd 378](https://imgs.xkcd.com/comics/real_programmers.png)

- Some wild Emacs spottings in Tron: Legacy found by redditors
  [here](https://www.reddit.com/r/emacs/comments/ged5p/emacs_in_tron_legacy_three_images/).
- [Famous Emacs Users (that are not famous for using Emacs)](http://wenshanren.org/?p=418)
  - you'll definitely recognize quite a few names....

### End Note

Happy Emacsing!
