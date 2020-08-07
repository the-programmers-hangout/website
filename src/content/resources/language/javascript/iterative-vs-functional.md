---
authors:
  - "veksen#1060"
  - "supergrecko#3434"
created_at: "2019/07/27"
title: Iterative vs Functional array helpers
---

This article assumes that you are comfortable with the very basics of JavaScript arrays, and how they differ to objects. This article teaches you how to use the built-in functions for arrays.

Each of the functions described in this article use a callback function. If you are not familiar with callback functions I would advise you to read [this article by Mozilla](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) before continuing.

## Getting a specific element using `find()`

It's not rare to need to look for some specific element based on a criteria. `find()` makes this particularly easy. It takes a function, taking a few arguments:

- current item
- index of current item (optional)
- original array reference (optional)

The `.find()` function loops over the items, if the callback function evaluates to truthy the item is returned, and the loop ends.

If no items evaluated to truthy `undefined` will be returned.

If you're only interested in the presence of an element, consider using `some()`, which instead returns a boolean.

Conventionally, in an iterative approach, this would be done using a preset variable, and looping through our array.

```js
// given our data
const users = [
  { name: "Joe", age: 25 },
  { name: "John", age: 17 },
  { name: "Jane", age: 16 },
];

// functional way
const foundUser = users.find((user) => user.name === "John");

// iterative way
let foundUser = null;
users.forEach((user) => {
  if (user.name === "John") {
    foundUser = user;
  }
});

console.log(foundUser); // outputs { name: "John", age: 17 }
```

## Keep specific items using `filter()`

`filter()` makes it easy to keep specific items based on a criteria.

It takes a function, taking a few arguments:

- current item
- index of current item (optional)
- original array reference (optional)

`filter()` does not modify (mutate) the original array, instead, it returns a new one.

If the callback function evaluates to truthy, this specific item is pushed to the final array, otherwise it is ignored.

```js
// given our data
const users = [
  { name: "Joe", age: 25 },
  { name: "John", age: 17 },
  { name: "Jane", age: 16 },
];

// functional way
const youngerUsers = users.filter((user) => user.age < 18);

// iterative way
const youngerUsers = [];
users.forEach((user) => {
  if (user.age < 18) {
    youngerUsers.push(user);
  }
});

console.log(youngerUsers); // outputs [ { name: "John", age: 17 }, { name: "Jane", age: 16 } ]
```

## Modifying all elements of an array using `map()`

It's common to want to modify every element of an array with some logic, and `map()` makes this easy.

It takes a function, taking a few arguments:

- current item
- index of current item (optional)
- original array reference (optional)

The function loops through the array and runs the callback function on each element. Just like the `filter()` function, `map()` does not mutate the original array.

```js
// given our data
const users = [
  { name: "Joe", age: 25 },
  { name: "John", age: 17 },
  { name: "Jane", age: 16 },
];

// functional way
const userNames = users.map((user) => user.name);

// iterative way
const userNames = [];
users.forEach((user) => {
  userNames.push(user.name);
});

console.log(userNames); // outputs [ "Joe", "John", "Jane" ]
```

## Running custom logic using an array using `reduce()`

`reduce()` is often less understood, but it's not that complicated once you get the basics. Itself, it takes 2 arguments, a function, and an initial value. The function takes a few arguments:

- accumulator, that is a reference to the current value that was last returned, or the initial value
- current value, the currently looped element
- current index (optional)
- original array (optional)

The `reduce()` function returns the accumulative result after the callback has been ran on each element.

```js
// given our data
const users = [
  { name: "Joe", age: 25 },
  { name: "John", age: 17 },
  { name: "Jane", age: 16 },
];

// functional way
const totalAge = users.reduce((acc, user) => acc + user.age, 0);

// iterative way
let totalAge = 0;
users.forEach((user) => {
  totalAge += user.age;
});

console.log(totalAge); // outputs 58
```

## Checking if any element matches a condition with `some()`

`some()` is very similar to `find()`, except it returns a boolean on a match.

Conventionally, we would prepare some variable with a value of false, loop over all of the elements, and exit the loop once we find a match. The function takes a callback function which accepts some parameters.

- the current element
- the array index of the current element (optional)
- a reference to the array (optional)

```js
// given our data
const users = [
  { name: "Joe", age: 25 },
  { name: "John", age: 17 },
  { name: "Jane", age: 16 },
];

// functional way
const hasYoungUsers = users.some((user) => user.age < 18);

// iterative way
let hasYoungUsers = false;
for (let i = 0; i < users.length; i++) {
  if (user.age < 18) {
    hasYoungUsers = true;
    break;
  }
}

console.log(hasYoungUsers); // outputs true
```

## Checking if all elements match a condition with `every()`

`every()` is similar to `some()`. The difference is that `some()` test if one or more of the items match. `every()` tests if every item in the array matches.

```js
// given our data
const users = [
  { name: "Joe", age: 25 },
  { name: "John", age: 17 },
  { name: "Jane", age: 16 },
];

// functional way
const allUsersAreOldEnough = users.every((user) => user.age < 18);

// iterative way
let allUsersAreOldEnough = true;
for (let i = 0; users.length > i; i++) {
  if (user.age < 18) {
    allUsersAreOldEnough = false;
    break;
  }
}
console.log(allUsersAreOldEnough); // outputs false
```

## Checking if an array contains a value with `includes()`

The `includes()` function tests if the passed item exists inside the array. It returns a boolean value.

```js
// given our data
const pets = ["cat", "dog", "bat"];

// functional way
const found = pets.includes("dog");

// iterative way
let found = false;
pets.forEach((pet) => {
  if (pet === "dog") {
    found = true;
  }
});

// or most of the time done with indexOf
const found = pets.indexOf("dog") >= 0;

console.log(found); // outputs true
```
