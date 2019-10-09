---
authors:
  - "Xetera#0001"
created_at: "2019/07/26"
title: Simplifying Promises
---

-- placeholder --

The first naive attempt, using new Promise for something that already returns a promise.

```js
function doAsync(number) {
  return new Promise(function(resolve, reject) {
    doDatabase().then(function(dbResult) {
      otherDbFunction(dbResult).then(function(secondResult) {
        resolve(secondResult + 10);
      });
    });
  });
}
```

Turns out you don't need new Promise if you're working with a function that
already returns a promise, you can just return the original thing.

```js
function doAsync(number) {
  return doDatabase().then(function(dbResult) {
    otherDbFunction(dbResult).then(function(secondResult) {
      return secondResult + 10;
    });
  });
}
```

You also don't have to nest `.then` functions, the whole point of promises
is that they allow you do chain them sequentially.

```js
function doAsync(number) {
  return doDatabase()
    .then(function(dbResult) {
      return otherDbFunction(dbResult);
    })
    .then(function(secondResult) {
      return secondResult + 10;
    });
}
```

you also don't have to create a new function just to pass in one
variable, you can pass in the entire function itself to the then block

```js
function doAsync(number) {
  return doDatabase()
    .then(otherDbFunction)
    .then(function(secondResult) {
      return secondResult + 10;
    });
}
```

And you don't need those returns if you just have ES6 arrow functions

```js
const doAsync = number =>
  doDatabase()
    .then(otherDbFunction)
    .then(secondResult => secondResult + 10);
```

Wow, that last one looks a lot cleaner to me than the first. Keeping that in mind, maybe we could be making some of our other functions cleaner as well
