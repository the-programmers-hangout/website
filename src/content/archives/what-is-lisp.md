## What is Lisp?
Originally specified in 1958, Lisp is the second oldest high level programming language in use today. (Only younger than FORTRAN by one year!). There have been many different dialects of Lisp that have come and gone over the ages. In the modern day, some of the most known and used Lisp dialects (lisps) are Common Lisp, Clojure/ClojureScript, Racket and Scheme. The name "Lisp" was derived from "LISt Processor", and the list data structure is at the core of the language. Many recognizable language features were first developed in Lisp; dynamic typing, garbage collection, the read-eval-print loop, and more.

## How hard are Lisps to learn?
The basics are not very difficult (especially because there aren't that many basics to learn). Experience with functional programming translates well. Most Lisps have a very small set of keywords and syntax rules, and rich libraries constructed atop those simple essentials. A lot of newcomers to Lisps are initially put off by a lot of parentheses, but most of those newcomers come to accept, and in some cases, admire the simplicity provided by, those parens. For example, Lisps usually have no concept of 'operator precedence' - the innermost parens are evaluated first.

If you know python, this document may be of particular interest to you: http://norvig.com/python-lisp.html. Even if you don't know python, the second paragraph under the heading "Introducing Python" explains some Lisp philosophy of use.

## What are some key features?
- Homoiconicity: Lisps treat data and code similarly - that is to say, the code you write is in the form of lisp data structures (arbitrarily nested lists) that the lisp interpreter reads and evaluates. While this can feel awkward at first, it allows for what might be the simplest metaprogramming constructs.

- Macros: Macros let you expand and redefine the syntax of the language itself. Think of it as having a hook into the interpreter... you get to write what feel like functions that return lisp expressions, and the interpreter will expand those macros, and then evaluate the code that the macro expands to. This is only possible because lisp code is written as s-expressions (lists enclosed in parens). As a result, you don't find any grunt-work in lisp. No need to type semi-similar chunks of code over and over again when you can just invent new syntax for it. How powerful are macros? As one example, Clojure's function and macro definition operators are both macros that use the 'special form' (roughly a keyword) "def".

- REPL: Some dialects emphasize this more than others, but REPL-based development can provide an accelerated feedback loop.

- Other key features can vary between lisps, and sometimes even within one lisp (for example, Clojure and Racket are both "fundamentally" dynamically-typed, but they have capabilities for enabling type declarations and compile-time type checking).
  Some Dialect-specific features and philosophy:
- Common Lisp:

  - Multi-paradigm. Fairly liberal/unopinionated.
  - Can write in an imperative style, functional, OOP, whatever. Can mix and match as you please.
  - Lineal descendent of the original Lisp.
  - C Interop (FFI)

- Clojure(Script):

  - Opinionated. Emphasis on functional programming and concurrency.
  - Concurrency "channels" heavily inspired by golang.
  - Mutating of bindings (references) is strongly discouraged.
  - Provides full interop with host platforms/ecosystems (JVM/JS/CLR).
  - Support for lazy sequences - compute/evaluate only the chunks of a collection that you actually need. Potential for data structures of infinite size.
  - Thread-safe semantics for mutable values, including an implementation of Software Transactional Memory - perform ACID (not durable because it's in memory), database-like transactions on variable values. An alternative to explicit lock-based synchronization.
  - ClojureScript targets Google's Closure Compiler for compiling to JS, including whole program optimization. This can result in much smaller JS file delivery.

- Racket:
  - Promotes itself as a "programming-language programming language", provides facilities for defining other languages (general purpose or domain specific) through Racket, and then writing programs in those languages to be compiled by Racket

## Build systems, repos, notable libraries and other operational tooling:

- Common Lisp:

  - Quicklisp (package manager)
  - Clack (webserver)
  - Bordeau threads

- Clojure(Script):

  - Leiningen: https://leiningen.org/
    New to clojure? Stick to this for now.
    'lein uberjar' will kick out a JAR file. Devops already knows how to deal with these.
  - Boot: https://github.com/boot-clj/boot
    Build system on steroids.
    For when you want total control over your build process
  - For web development, make sure to look at the Ring, Compojure and Hiccup libraries.
  - Categorized library directory: https://www.clojure-toolbox.com/
  - Libary repository: https://clojars.org/
  - For browser-based development in ClojureScript with real hot-loading: https://github.com/bhauman/lein-figwheel

- Racket:
  - Racket ships with raco, a build tool that creates modules, standalone executables, documentation, etc

## What platforms can Lisps run on?

- Common Lisp: Various implementations, interpreted, compiles to native.
- Clojure(Script): JVM/JS/CLR.
- Racket: Runs on Windows, MacOS, and Linux, by building native binaries

## Learning resources, blogs, sources of information:

### Common Lisp:
  - Practical Common Lisp (book available online): http://www.gigamonkeys.com/book/
  - Land of Lisp: http://landoflisp.com/
  - Common Lisp Hyperspec: http://clhs.lisp.se/
  - Lisp koans: https://github.com/google/lisp-koans
  - Planet Lisp (blog aggregation): http://planet.lisp.org/
  - Common Lisp Wiki: https://cliki.net/
  - Simplified common lisp reference: http://jtra.cz/stuff/lisp/sclr/index.html
  - Learning Lisp fast: https://cs.gmu.edu/~sean/lisp/LispTutorial.html
  - Articulate common lisp (a website that tries to cover beginner topics with fewer hard opinions): http://articulate-lisp.com/
  - State of the common lisp ecosystem, 2015: http://borretti.me/article/common-lisp-sotu-2015
  - Lisp subreddit: https://www.reddit.com/r/lisp/
  - Wikipedia article on CAR and CDR (a central concept in lisp lists): https://en.wikipedia.org/wiki/CAR_and_CDR
  - http://random-state.net/files/nikodemus-cl-faq.html
### Clojure(Script):
  - "Clojure for the Brave and True", a book somewhat akin to 'Automate the boring stuff', but aimed at Clojure: https://www.braveclojure.com/
  - Clojure Homepage: https://clojure.org/api/cheatsheet
  - Clojure GitHub: https://clojure.github.io/clojure/
  - Katas: https://github.com/marshallshen/clojure-katas
  - Koans: https://github.com/functional-koans/clojure-koans
  - 4Clojure - a set of 150+ problems for practicing clojure, with interpretting and tests on the page: https://www.4clojure.com/
  - Clojure subreddit: https://www.reddit.com/r/Clojure/
  - Stand up a simple web app in Clojure: http://clojure-doc.org/articles/tutorials/basic_web_development.html
  - An article explaining the basics of laziness available in Clojure: http://clojure-doc.org/articles/language/laziness.html
### Scheme:
  - Probably the de facto guide to Scheme is known as SICP - "Structure and Interpretation of Computer Programs". This is a book written by a couple of MIT professors, which was used as a textbook for introductory programming courses. It uses Scheme to teach principals of programming. It should probably be noted that this book and these courses are not focused on teaching Scheme (they cover the majority of the Scheme language in the first lecture/chapter) - they're focused on teaching computer programming concepts, and Scheme is just the language used to express those concepts.
    - The SICP book online (freely available): https://mitpress.mit.edu/sites/default/files/sicp/index.html
    - 2004 MIT SICP course playlist (higher quality, standalone video): https://www.youtube.com/playlist?list=PL7BcsI5ueSNFPCEisbaoQ0kXIDX9rR5FF
    - The 2010 UC Berkeley SICP course (recorded in classroom, somewhat lower fidelity): https://www.youtube.com/playlist?list=PLhMnuBfGeCDNgVzLPxF9o5UNKG1b-LFY9
### Racket:

  - The jumping-off point for Racket info (documentation, tools, getting started, etc) is https://racket-lang.org/.

### IDEs/editors:

  - Lisps in general: Emacs - Emacs has been called "a great operating system, lacking only a decent editor". The Emacs community has a lot of lispers, partially because Emacs plugin are written mostly in ELisp - a dialect of Lisp that is at the core of Emacs' extendability. As such, many Lisps have Emacs packages for editing, running, debugging, project maintenance, etc, and Emacs has packages for version control, file/directory management, and even things like personal organization (basically all done in text buffers).

  - Common Lisp: Emacs with SLIME, Vim with SLIMV, Portacle (kinda), LispWorks, Allegro CL.

  - Clojure: Nightcode, Light Table, IntelliJ Cursive, Eclipse with counterclockwise, Emacs with CIDER, VIM with Fireplace.

  - Racket: By default, Racket comes with DrRacket, an IDE with extensive documentation of the language

## Other resources:

- A couple of talks given by Rich Hickey, creator of Clojure
  - Simple Made Easy - an examination of the definitions of simple, easy, and complex, and some of the powers of simplicity: https://www.infoq.com/presentations/Simple-Made-Easy
  - Clojure, Made Simple - a talk about shortcomings and incidental complexity associated with OO programming, and Clojure's responses to them: https://www.youtube.com/watch?v=VSdnJDO-xdg

## Code examples:

### Hello World

Common Lisp:

```clojure
(print "Hello, World!")
```

Scheme:

```clojure
(print "Hello, World!")
```

Clojure (as a JVM program entry point):

```clojure
(defn -main
  "A documentation string for my hello world function"
  [& args]
  (println "Hello, World!"))
```

Racket:

```clojure
#lang racket

(println "Hello, World!")
```

ALGOL60, as implemented in Racket (to demonstrate the flexibility offered by Racket):

```clojure
#lang algol60

begin
  printsln(`Hello, World!')
end
```

### Take two numbers as input, add them, and format an output string

Common Lisp:

```clojure
(let ((first (block a (write-line "first number:") (read)))
     (second (block b (write-line "second number: ") (read))))
  (format t "The sum of ~A and ~A is ~D" first second (+ first second)))
```

Scheme:

```clojure
(let ((first (begin (display "first number:") (read)))
     (second (begin (display "second number: ") (read))))
  (format #t "The sum of ~s and ~s is ~s" first second (+ first second)))
```

Clojure:

```clojure
(let [first (do (println "first number: ") (Integer/parseInt (read-line)))
      second (do (println "second number: ") (Integer/parseInt (read-line)))]
  (printf "The sum of %d and %d is %d" first second (+ first second)))
```

Racket:

```clojure
#lang racket

(let ((first (begin (print "first number:")(read)))
      (second (begin (print "second number:") (read))))
  (printf "The sum of ~s and ~s is ~s" first second (+ first second)))
```

A very basic macro in Clojure:

```clojure
;; definition - we'll take an expression, evaluate it once, print the formatted string, and then return the result

(defmacro log-call [form]
  `(let [outcome# ~form]
     (do
       (println "The evaluation of '" '~form "' resulted in:" outcome#)
       outcome#)))

;; usage
(log-call (reduce + (range 10)))
;; prints this: The evaluation of ' (reduce + (range 10)) ' resulted in: 45
;; and returns 45
```

A really simple Clojure web site using the ring and compojure libraries:

```clojure
;; define a namespace for our functions, and import routing and default request handling functions
(ns hello-web.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

;; define the route for the root page
(defroutes app-routes
           (GET "/" [] "Hello, World!")
           (route/not-found " Not Found "))

;; and this is our "ring handler" function that returns a handler (our routes) wrapped in some vaguely secure defaults
(def app
  (wrap-defaults app-routes site-defaults))
```

Memoizing pure functions in Clojure:

```clojure
(defn expensive
  [number]
  (Thread/sleep 1000)
  (inc number))

(defn memoization-demo
  "Memoization keeps track of what the args to a function were. Caches the results."
  []
  (let [memo-expensive (memoize expensive)]
    (println "Starting memoization tests. First run:")
    (dotimes [i 5]
       ;; these calls take one second each
      (time (println "Uncached function call" (memo-expensive i))))
    (println "Memoization test, second run:")
    (dotimes [i 5]
       ;; these calls take a fraction of a millisecond
      (time (println "Cached function call" (memo-expensive i))))
    (println "Memoization caches the output of functions, so that expensive pure functions can be computed once.")))
```

Lazy sequences in Clojure:

```clojure
(defn fib-seq
  "Returns a lazy sequence of Fibonacci numbers. Copied from http://clojure-doc.org/articles/language/laziness.html"
  ([]
   (fib-seq 0 1))
  ([a b]
   (lazy-seq
    (cons b (fib-seq b (+ a b))))))

(defn lazy-fib-seq-demo
  []
  (println "The first 20 fibonacci numbers, obtained from a lazy sequence:" (take 20 (fib-seq))))
```

Collatz sequence in Scheme:

```clojure
(define (collatz n)
  (cond
  [(equal? n 1)(format #t "1")]
  [(even? n) (begin (format #t "~s -> " n)(collatz (/ n 2)))]
  [else (begin (format #t "~s -> " n) (collatz (+ 1 (* 3 n))))]))

```

FizzBuzz from 1 to n using lazy evaluation in Racket:

```clojure
#lang lazy

(define fizzes (cycle "" "" "Fizz"))
(define buzzes (cycle "" "" "" "" "Buzz"))
(define words (map string-append fizzes buzzes))
(define (fizzbuzz n)
  (!! (take n
            (map (lambda (word number) (if (string=? "" word) number word))
                 words (build-list n (λ (x)(+ x 1)))))))
```
