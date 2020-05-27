---
authors:
  - "Aiden#8627"
title: "Spread operator"
created_at: 2019/08/10
external_resources:
  - text: MDN Spread Operator
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
  - text: Javascript.info Spread/rest
    href: "https://javascript.info/rest-parameters-spread-operator"
  - text: Freecodecamp.org Spread/rest
    href: "https://www.freecodecamp.org/news/spread-operator-and-rest-parameter-in-javascript-es6-4416a9f47e5e/"
---

Spread operator (or spread syntax) is a powerful feature in Javascript which allows you to do such things as merging or copying objects, expanding an array into function arguments and a lot more. In this post, we are going to cover most of its use-cases.

## Copying an object

In Javascript, every primitive is copied when passed around. However, objects (arrays are also objects), gets their reference copied. Which means that if you're modifying an object, the original one is modified too. For example:

```js
const a = { x: 5 };
const b = a;
b.x = 10;
console.log(a.x); // 10
```

Sometimes this is not what you want as it can introduce nasty side-effects. Thankfully, you can copy an object easily with spread operator:

```js
const a = { x: 5 };
const b = { ...a };
b.x = 10;
console.log(a.x); // 5 - Not modified!
console.log(b.x); // 10
```

You can also do it with arrays:

```js
const a = [1, 2];
const b = [...a];
b[0] = 10;
console.log(a[0]); // 1 - Not modified!
console.log(b[0]); // 10
```

> Note: This is just a shallow copy, which means that if you have nested objects, they won't get copied!

## Merging objects

Spread operator also allows you to merge objects:

```js
const a = { x: 5 };
const b = { y: 10 };

console.log({ ...a, ...b }); // { x: 5, y: 10 } - Merged!
```

With arrays:

```js
const a = [1, 2];
const b = [3, 4];

console.log([...a, ...b]); // [1, 2, 3, 4] - Merged!
```

Here's a real-world example. Imagine that you're making a function which accepts an `options` object as argument, but you also want to have default values for this object. Here's a not so good way to do it without spread operator:

```js
const f = (opts) => {
  const options = {};
  options.foo = opts.foo || "default value";
  options.bar = opts.bar || "default value";
  options.x = opts.x || 10;
  // ...
};
```

This works, but here's a better way:

```js
const f = (opts) => {
  const defaults = {
    foo: "default value",
    bar: "default value",
    x: 10,
  };

  const options = { ...defaults, ...opts };
  // ...
};
```

## Expanding an array as function arguments

Spread operator also allows you to expand an array as function arguments. Each element of the array will be an argument of the function. For example:

```js
const numbers = [2, 4, 8, 10, 11, 14];
console.log(Math.max(...numbers)); // 14
```

The array gets expanded like so: `Math.max(2, 4, 8, 10, 11, 14)`

## Variadic functions

A variadic function is a function which accepts an arbitrary amount of arguments (called rest parameters in Javascript). For example:

```js
const f = (...args) => {
  console.log(args);
};

f(1, 2, 3, 5); // [1, 2, 3, 5]
```

As you can see, you can call the function with an infinite number of arguments and it will receive them as an array. Keep in mind that rest parameters must always be at the end.
