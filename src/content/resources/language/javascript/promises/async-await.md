---
authors:
  - "ddivad#0001"
  - "veksen#1060"
created_at: "2019/10/01"
updated_at: 2020/05/20
title: Async/Await
recommended_reading:
  - javascript/promises/intro
---

## Async/Await

Async/Await is another way to handle the calling of asynchronous code and is built on top of Promises. It makes it possible to write asynchronous code that feels synchronous.

**Its usage is equivalent to resolving a promise with `.then()`**.

It is made up of 2 keywords as the name suggests: `async` and `await`. These need to be used together for this method to work.

## Async

The `async` keyword is used to show that the function is going to return a promise. **Any return values from the function will be converted to a promise automatically**, if they are not already.

```js
async function getWeather() {
  return "sunny";
}

getWeather();
// Promise {<resolved>: "sunny"}
```

This basic example will return a promise with the value of `getWeather`.

## Await

The `await` keyword is used to wait until a promise has executed and fetches the result. In order to use the `await` keyword, you **need** to be inside an `async` function.

```js
async function checkWeather() {
  const weather = await getWeather();
  console.log(weather); // "sunny"
}
```

This code will call the `getWeather()` function from above and will wait on that line until the promise returned from the `async` function has returned.

Another example to demonstrate this is if we extended the `getWeather()` function from above to add a 5 second delay.

```js
async function getWeather() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("sunny"), 5000);
  });

  const weather = await promise; // Execution waits here until promise resolves
  console.log(weather); // "sunny"
}
```

## Error Handling

As with Promises, if the Promise returns with an error, it will affect the `await` call that triggered it. When using Promises without Async / Await, the `.catch()` syntax is used, and this also exists with Aysnc / Await using the `try...catch` syntax. This can be demonstrated by making our `foo()` function throw an error.

```js
async function foo() {
  throw new Error("An Error Occurred");
}
```

This would be handled using Aysnc / Await like so:

```js
async function getData() {
  try {
    let data = await foo();
    console.log(data);
  } catch (err) {
    console.error(err); // err: An Error Occurred
  }
}
```

## Beginner Mistakes

As mentioned in the [intro](./intro.md), Promises are the highest source of confusion for beginners. Async / Await adds another layer on top of Promises, and comes with its own pitfalls.

`await` will **only** work if the function you try to add `await` to is `async`. Using `await` in top level code will not work (yet).

```js
let weather = await getWeather(); // syntax error
```

To get around this issue, you can use an declare asynchronous function anonymously, if needed:

```js
(async () => {
  let weather = await getWeather();
  console.log(weather); // "sunny"
})();
```

Top-Level-Await is something that _may_ get added to Javascript in the future, but for now wrapper functions like above are needed for this functionality.

## Real World Example

Here is a real function that gets character information from the Rick and Morty API.
You can try it in your browser if you want to test it out.

```js
async function getCharacters() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  const data = await response.json();
  return data.results;
}

// or, mixed
async function getCharacters() {
  const data = await fetch(
    `https://rickandmortyapi.com/api/character`
  ).then((res) => res.json());
  return data.results;
}

(async () => {
  try {
    let characters = await getCharacters();
    console.log(characters); // (20) [{...}, {...}, {...}]
  } catch (err) {
    console.error(err);
  }
})();
```

In this example, we are querying real data from the Rick & Morty API. This API has a lot of information regarding Rick & Morty, but here, we are trying to retrieve all the characters.

- The first thing we do is use `fetch` to retrieve the data from the API. `fetch` is a built in function in web browsers to do http requests, and returns a Promise by default. We `await` the result of this.
- When we get the response, we need to get the `JSON` value of the data. To do this, the `.json()` method from fetch is used. We then return the results.
- As `await` can only be used in an `async` function, we use the method from above to make this work. As `getCharacters()` returns a Promise due to it being `async`, we `await` the result. We surround this in a `try...catch` in case fetch returns an error. Then, if no error is returned, `characters` contains the information we want, and is logged to the console. If `getCharacters()` returns an error, that error is also logged.

### Let's also look at an example from Discord.js:

```js
client.on("message", async (msg) => {
  if (msg.author.bot) return;

  if (msg.content === "ping") {
    const message = await msg.channel.send("pong");
    message.react("⚠️");
  }
});
```

## Comparision with default Promises

Below is the same code implemented without using Async / Await as a comparision. Here, you can see the differences between the two methods, and how Aysnc / Await makes the code appear in a _more synchronous_ pattern, and can be clearer to follow.

```js
function getCharacters() {
  return fetch(`https://rickandmortyapi.com/api/character`)
    .then((res) => res.json())
    .then((res) => res.results);
}

getCharacters()
  .then((characters) => {
    console.log(characters); // (20) [{...}, {...}, {...}]
  })
  .catch((err) => console.error(err));
```
