## What is Haskell?
"Haskell is a computer programming language. In particular, it is a polymorphically statically typed, lazy, purely functional language, quite different from most other programming languages. The language is named for Haskell Brooks Curry, whose work in mathematical logic serves as a foundation for functional languages. Haskell is based on the lambda calculus, hence the lambda we use as a logo." - Haskell Wiki
The above being said, if you perceive yourself to be "bad" at math, don't feed into it. If you are interested in using it and you apply yourself it will work out.

## Why should I use Haskell?
Haskell is a general purpose programming language. So you can use it for anything, from scripting to game development - that being said, it provides you with some rather unique and cool benefits not found in many other places.

- Haskell code tends to be very short and clear (See code examples below)
- Since it is very, very high level, the language is incredibly expressive (See DSL below)
- Concurrency is much better in Haskell than in many other languages (See here: https://en.wikibooks.org/wiki/Haskell/Concurrency)
- The type system is exceptionally good. Certain types of errors cease to exist (e.g. no Null pointer exception) (See here: https://softwareengineering.stackexchange.com/questions/279316/what-exactly-makes-the-haskell-type-system-so-revered-vs-say-java?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa )
- Purity. Haskell _does not allow for side affects_. In other languages, a "getMember" function might get you a member, might not. But it might also scrape a key up the side of your car. This kind of problem is not possible in Haskell thanks to purity. (See here: https://wiki.haskell.org/Functional_programming#Purity)

## Code Examples

Fizzbuzz

```hs
fizzBuzz :: Integer -> String
fizzBuzz n | n `mod` 15 == 0 = "FizzBuzz"
           | n `mod` 5  == 0 = "Fizz"
           | n `mod` 3  == 0 = "Buzz"
           | otherwise       = show n
```

An infinite list of Fibonacci numbers

```hs
fibs = 0 : 1 : zipWith (+) fibs (tail fibs)
```

An infinite list of prime numbers

```hs
primes :: [Integer]
primes = sieve (2 : [3, 5..])
  where
    sieve (p:xs) = p : sieve [x|x <- xs, x `mod` p > 0]
```
