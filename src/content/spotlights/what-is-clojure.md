---
authors:
  - "vishon05#4039"
  - "SlashDevSlashRandom#2112"
created_at: "2021/08/08"
title: What is Clojure?
---

## What is Clojure?

Clojure is a dynamically typed high level lisp designed with interactive development in mind. As a lisp it has features such as homoiconicity, so code as data, macros which let you manipulate the Abstract Syntax Tree of the program itself, and lots and lots of parentheses. This language emphasises concurrency and functional programming.

## Clojure features

- Immutability by default: on creation, you cannot change the value of a variable or data structure. this has a few benefits: you know the value of the variable at any point, references can be shared safely as they don't usually modify the value, and of course it is great for concurrency as shared mutable state is minimised.
- Immutable persistent data structures: data structures that cannot be changed after creation, that preserves previous versions. This type of data structure will use a set of core functions to modify and yield a new updated version, and as they are immutable previous versions can be re-used between data structures, so they are not incredibly memory inefficient.
- Host platform interoperability: a major downside to many great languages is the lack of libraries that will attract a userbase and promote development in the language. Luckily for us, this is not the case with Clojure as the language is made to be fully interoperable with the host machine languages, so you can use Java libraries in JVM targetted Clojure code, .NET libraries in CLR targetted code and JS libraries and frameworks in ClojureScript. The benefits of this are immeasurable and allow so much more freedom when using Clojure.
- Java: the main Clojure compiler targets the JVM, and allows programmers to use any Java libraries (or even other JVM language libraries) to harness the full potential of Clojure. There is the option to use the libraries directly, for example JavaFX, or using a Clojure wrapper for the library, such as CLJFX, which can make interop code more idiomatic.
- .NET: Clojure has a ported compiler called clojure-clr, which targets the .NET runtime. This allows programmers to use C# and other .NET libraries, including OpenGL. Although this port is not as used, it is still relatively similar to the main compiler.
- ClojureScript: this is a Clojure compiler targetting JavaScript, again with full interoperability with JS, allowing web apps and websites to be built in Clojure. This compiler uses the Google Closure Optimizing Compiler, meaning that the JavaScript code produced is very efficient and performant. There are many wrappers for JS frameworks and libraries, such as Reagent (a minimalistic React interface).
- Concurrency models:
  - Software Transactional Memory and Atoms: Clojure has atoms built into the language, which are what store a state. STM will make a copy of the global variable being modified or referred to, and allow any operations to be performed on said data. After the changes are made the global variable is checked for any changes since the copy was made, and if the original copy and new copy are identical, the global is updated. Otherwise, the current changes are discarded, a new copy of the global is obtained and this process repeats. A key point is to not perform side effects with atomic changes.
  - Asynchronous Agents: Clojure also has another concurrency model, using agents that are bound to a single location for their lifetime, and require an action to mutate its the location to a new state. An agent should have an immutable state, and will be able to be read without coordination. An action will be dispatched by a send function which will return, and then later on the action (which is a function) will be applied to the agent's state. The return value of this function will be sent to be validated, and if validation succeeds or there is no validator, the agent's state will be updated, and any watchers will be notified. Any other actions dispatched later will be added to the action queue to be applied once the agent's state has changed.
- Lazy sequences: lazy sequences are a feature that allows element evaluation to be deferred by computing the sequence at runtime, which allows infinitely long sequences to be created with little overhead, with the option to forcefully evaluate elements if required.
  ⠀

## Tools

Clojure has many different tools that make it an amazing language to work with, the most prominent of these being the REPL. The Clojure compiler already comes with a REPL built in, but there are also others, such as nREPLs (network REPLs) and socket REPLS. More about those here: https://lambdaisland.com/guides/clojure-repls/clojure-repls#org44377fd

As for editors and extensions, there is CIDER, which is an Emacs IDE for Clojure supporting interactive REPL development via nREPLs, debugging, testing, docs lookup and more. There is also a similar environment called CALVA for visual studio code, which includes inline code evaluation, structural editing, intellisense and more. See these links: https://github.com/BetterThanTomorrow/calva https://github.com/clojure-emacs/cider

Now there are many more tools and libraries for Clojure which are included in this handy toolbox website: https://www.clojure-toolbox.com/

## Code Examples

```clj
Hello World 1
(println "Hello World")
```

```clj
Hello World 2 (using Java entrypoint)
(ns foo.core
    (:gen-class))

(defn -main
    "docstrings go here"
    [& args]
    (println "Hello World"))
```

Further code examples:
https://pastecord.com/ukycegasab.clj

## Resources

- Getting started: https://clojure.org/guides/getting_started
- Special characters: https://clojure.org/guides/weird_characters
- Community docs: https://clojuredocs.org/
- Libraries: https://clojure.org/community/libraries
