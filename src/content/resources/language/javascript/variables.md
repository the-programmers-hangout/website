---
authors:
  - "ddivad#0001"
created_at: "2019/10/06"
title: Variables
---

A `variable` in Javascript is a "named container" that can hold data. Variables are declared by giving them a name and a value - the `name` allows you to reference the variable throughout your program, and the `value` is the current value the variable represents.

Variables can be defined in the following ways:

Initialized without a starting value:

```js
let myVar;
```

Initialized with a value:

```js
let myVar = "Hello World";
```

Initialized with a value and redefined:

```js
let myVar = "Hello World";
console.log(myVar); // variable is used by referencing value with 'let'

myVar = "New value";
console.log(myVar);
```

## Dynamic Types

Variables in Javascript do not have explicit types, as some other languages (eg: Java, C++) do. This means that when declaring a variable, you only use `name = value`, and don't need to add a type as well. The type is automatically chosen based on the value.

```js
let myString = "Hello";
let myBoolean = true; // false is also valid
let myNumber = 1;
let myFloat = 1.0;
```

## Let vs Const

Javascript has two "types" of variable declaration: `let` and `const`. These behave in largely the same way, with **one important difference**:

- Let: the value of variables using `let` can be changed throughout the course of your program.
- Const: the value of variables using `const` cannot be changed after they are defined.

```js
let myVar = "Hello World";
myVar = "New Value!"; // This is ok, and myVar's value will be changed.

const myVar2 = "Hello World";
myVar2 = "New Value!"; // This will fail, as myVar2 has already been defined.
```

If the value of the variable will only ever have one value, `const` should be used to define it. This is safer, as if you try to re-assign it somewhere else you will get an error, instead of having unexpected behaviour by accidentally overwriting the value.

If the value of the variable needs to change throughout the course of a program (user input, calculations, etc...), `let` should be used to define it.

### Const Quirks:

The `const` declaration in Javascript allows you to create a variable that cannot be redeclared after it has been declared initially. This is similar to a lot of other languages.

However, in Javascript, there is an edge case to be aware of when using objects and arrays.

```js
const myArray = [1, 2, 3];
console.log(myArray); // [1,2,3]

myArray.push(4);
myArray.push(5);
console.log(myArray); // [1,2,3,4,5]

const myObj = { foo: "bar" };
console.log(myObj); // {foo: "bar"}

myObj.foo = "re-assigned";
console.log(myObj); // {foo: "re-assigned"}
```

This, however, will still not work:

```js
const myArray = [1, 2, 3];

myArray = [1, 2, 3, 4, 5]; // Error: Assignment to constant variable
```

## What about var?

As well as using `let` or `const` to define variables, there is a 3rd way that exists using `var`. Var is from older versions of Javascript from before let and const were introduced. Nowadays, using `let` or `const` is recommended over `var`.

There are a number of problems that come from using `var` to declare variables, that are fixed by using `let` or `const` instead.

### Block & Function Scoping

Var is not "block scoped" (a block is anything that contains `{}`, so functions, if, for loop, etc...) This means that variables declared using `var` are not _just_ defined in the block they are declared, but declared and can be accessible globally. This can have un-intended side effects.

```js
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // 5 as i is a 'global' variable

if (true) {
  var myVar = "test";
}
console.log(myVar); // 'test'
```

This is fixed using `let`

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // Error: i is not defined

if (true) {
  let myVar = "test";
}
console.log(myVar); // Error: myVar is not defined
```

However, if the above code was in a function, this would not be the case. In the case of a function, the variable will be scoped to the given function, and not accessible outside it. Eg:

```js
function myFunction() {
  var myVar = "test";
}
console.log(myVar); // Error: test is not defined
```

This can cause confusing behaviour, as `var` has different scoping behaviour depending on if its in a function or not. This is solved by using `let` or `const`.

### Hoisting

Variables defined using `var` are also hoisted to the top of the function they are declared in, which can cause some weird behaviour.

```js
console.log(myVar); // undefined.
var myVar = "test";
```

You may have expected the output to be "ReferenceError: myVar is not defined", but instead the output is just "undefined". This is because the variable declaration is hoisted to the top of the function (global scope in this case), and essentially looks like this at runtime:

```js
var myVar;
console.log(myVar); // undefined.
myVar = "test";
```

This also happens when declaring `var` inside a function:

```js
function myFunction() {
  myVar = "test";
  console.log(myVar);
  var myVar;
}
myFunction(); // this will work fine and log 'test'
```

The above works, because with hoisting, it is essentially the same as

```js
function myFunction() {
  var myVar;

  myVar = "test";
  console.log(myVar);
}
myFunction();
```

This creates problems when writing code using `var`, as it means that you can try to use a variable before it was given a value.

There is also weird behaviour when it comes to declarations like

```js
var myVar = "test";
```

Variable declarations get hoisted, but the assignments don't. Going back to the previous example:

```js
console.log(myVar); // undefined.
var myVar = "test";
```

Here, the declaration is hoisted to the top of the function, but the assignment of `test` to the variable happens where is appears in the code. Eg:

```js
var myVar;
console.log(myVar); // undefined.
myVar = "test"; // assignment isn't hoisted
```

In summary, using `let` and `const` is recommended when writing modern Javascript to solve these issues. Sometimes you will see `var` in old tutorials. If you come across this, it is good practice to replace it with `let` or `const` when following the tutorial, and getting into the habit of using up-to-date practices when learning.
