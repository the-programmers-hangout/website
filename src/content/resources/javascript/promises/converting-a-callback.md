---
authors:
  - "veksen#1060"
created_at: "2020/05/20"
title: Converting a callback
recommended_reading:
  - javascript/promises/intro
  - javascript/promises/async-await
---

It's still pretty common to be forced to use an API that doesn't support promises. While a promise API is often preferred, it's not always available.

Before anything check:

- If your library might support both callbacks and API, in the documentation, or README from Github
- If there is not another library that does the same thing, but supports promises.

## From a callback

Let's look at a conventional, but fictional callback API:

```js
getWeather("Los Angeles", (error, result) => {
  if (err) throw err;

  console.log(result); // "sunny"
});
```

## To a promise

If we want to use it as a promise, we'll need to wrap a promise around it:

```js
function getWeatherAsync(city) {
  return new Promise((resolve, reject) => {
    getWeather(city, (error, result) => {
      if (err) reject(err);

      resolve(result);
    });
  });
}
```

Which we can now use:

```js
getWeatherAsync("Los Angeles")
  .then((weather) => {
    console.log(weather);
  })
  .catch((error) => {
    console.log(error);
  });

// or using async/await
const weather = await getWeatherAsync("Los Angeles").catch((error) => {
  console.log(error);
});

console.log(weather);
```
