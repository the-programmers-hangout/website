---
authors:
  - "@Xetera"
created_at: 2019/07/26
updated_at: 2019/07/26
title: Introduction to Promises
recommended_reading:
  - javascript/callbacks
  - javascript/es6/arrow-functions
---

# A Promise to Keep

A `Promise` in Javascript represents an action that has already started, but one that will be
completed at a later time. Much like in real life, when you create a promise, you are expected
to fulfill that promise. However, sometimes things go wrong where you can no longer fulfill
a promise you made. This is essentially the main idea behind how promises work in javascript.

## Basics

When you create a Promise or call a function that returns a Promise in Javascript, you're left
with an object that can either resolve into the actual value that you were promised, or it
can reject and leave you with an error for why that promise failed.

We can access these values using the `.then` and `.catch` methods on the `Promise` object respectively.

## A Simple Example

First, let's explore a bit of a made-up example. Imagine we have a promise-returning function
called `getMembers` that retrieves all the members in a discord server. When we execute this
function we see the following result.

```js
const members = getMembers("The Programmers Hangout")
console.log(members) // Promise {<pending>}
```

Normally, we would have expected to see an array of all the members but it takes time to
get all the information about members so we're instead returned a Promise of members, rather
than the members themselves.

In order to access this information, we'll have to call the `.then` method on our `members` object
to access the actual members like so.

```js
getMembers("The Programmers Hangout").then(members => {
  console.log(members) // (32k) [{...}, {...}, {...}]
})
```

This way we are able to make sure that we only try to `console.log` when the `getMembers` function has resolved and ready to be used.

## Beginner Mistakes

Promises are possibly the #1 most common source of confusion for beginners. In order
to avoid falling in pitfalls yourself, you have to remember 2 things about Javascript when
working with promises.

1. Javascript does not wait.
2. No seriously, Javascript won't wait for your promises!

You may have tried doing something like this before.

```js
// Incorrect code, don't copy!
let results
getWeather("Los Angeles").then(weather => {
  results = weather
})
console.log(results) // undefined
```

Why is `results` undefined? Because **Javascript doesn't wait**. Whenever a Promise is created,
your code will continue to run until there's no more code left in the stack. Only then
will javascript try to run the `.then` callback of a Promise. Even if your Promise resolves
immediately you are going to have to wait until you've run all the code in the stack before
your `.then` callback has a chance to start running. This is due to the way the event loop works,
you can watch [this amazing talk](https://youtu.be/8aGhZQkoFbQ) on it to learn more.

In order to fix this problem we need to move the `console.log` inside the `.then` callback like so:

```js
getWeather("Los Angeles").then(weather => {
  console.log(weather) // Sunny, probably
})
```

## Real World Example

Here is a real function that gets character information from the Rick and Morty API.
You can try it in your browser if you want to test it out.

```js
function getCharacters() {
  return fetch(`https://rickandmortyapi.com/api/character`)
    .then(response => response.json())
    .then(response => response.results)
}

getCharacters().then(characters => {
  console.log(characters) // (20) [{...}, {...}, {...}]
})
```

Let's break down what's happening in this function

// TODO: finish this
