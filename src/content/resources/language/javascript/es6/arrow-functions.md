---
authors:
  - "T0M#5956"
  - "Hayden#5036"
created_at: 2019/10/08
updated_at: 2019/10/13
title: Arrow functions
---

## Arrow Function Syntax

Brought into ES6, arrow functions are a new way to declare functions, and allow for shorter syntax. For example, below is a regular function, as usually seen before ES6.

```js
const sayHello = function () {
  console.log("hello");
};
```

The same function can be rewritten with arrow function syntax, as seen below.

```js
const sayHello = () => {
  console.log("hello");
};
```

Parameters are listed between the parentheses, in the same way a regular function does it:

```js
const sayHello = (nameOne, nameTwo) => {
  console.log(nameOne, "says hello to", nameTwo);
};
```

For a single parameter, the parentheses can be omitted:

```js
const sayHello = (name) => {
  console.log("hello", name);
};
```

Another interesting feature that also reduces the syntax within arrow functions, is that if the function is an expression, you can omit the `return` keyword and the curly braces. In arrow functions without braces, the `return` is implicit, meaning you don't need to include the `return` keyword. The following function returns "hello":

```js
const sayHello = () => "hello";
```

The same is also true of functions returning an expression using parameters, too.

```js
const sayHello = (name) => `hello ${name}`;
```

Or even...

```js
const helloObject = (name) => ({
  isGreeting: true,
  helloName: name,
});
```

This is essentially wrapping an object expression inside a grouped expression, causing it to return an object instead of expanding into a whole function body.

Long story short, we heard you liked expressions, so we put an expression inside your expression to give you nicer expressions.

## Handling of the Keyword This

The keyword `this` is handled differently in arrow functions. In an arrow function, `this` inherits its binding from the parent scope. That means that the keyword `this` inside of an arrow function references the same object that it does immediately outside of the arrow function where the arrow function is declared. On the other hand, when you use the older `function` syntax, `this` typically refers to the object that the function was called on, if the function is called as an instance method. If the function is not called as an instance method, `this` will usually be undefined (though it is possible to use functions like `call` or `bind` to manually provide a binding).

Using regular anonymous function, `this` is refers to the `HTMLButtonObject` that called it, and therefore the function outputs `[object HTMLButtonElement]` to the console.

```js
document.querySelector("#btn").addEventListener("click", function () {
  console.log(this); // outputs "[object HTMLButtonElement]"
});
```

However, if an arrow function is used, `this` would refer to `[object Window]`, as that is the object that defined the function.

```js
document.querySelector("#btn").addEventListener("click", () => {
  console.log(this); // outputs "[object Window]"
});
```
