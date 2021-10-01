---
authors:
  - "leduyquang753#3761"
created_at: "2021/01/13"
title: Cannot read property "abc" of null/undefined
---

When running JavaScript code, a very common error that occurs is:

```none
console.log(someRandomThing.abc)
                            ^

TypeError: Cannot read property "abc" of undefined.
```

This is a very basic error, yet people who are new to JavaScript (and maybe
programming) often either gloss over or misunderstand the problem being
presented in their code, and come to _The programmer's hangout_ to seek an
explanation.

## Causes

### Direct cause

When the JavaScript engine complains about "Cannot read property `abc` of
`null`/`undefined`", it means that the thing whose property `abc` is being
retrieved is either `null` or `undefined`.

```js
$ node
> let someRandomThing;
undefined
> console.log(someRandomThing.abc);
//            ---- Owner ----|Property
Uncaught TypeError: Cannot read property "abc" of undefined.
```

The most important thing to note here is it's the "_owner_" that is being
`null`/`undefined`. A common mistake is to interpret the error message as that
the "property" is `null`/`undefined` instead.

### Possible behind causes

For a variable to come up containing `null` or `undefined` (most commonly
`undefined`) so that the "Cannot read property" error can arise later, the code
must have done something wrong beforehand. This section lists some common
bugs and mistakes.

#### `undefined` from nonexistent object property

By default, when accessing an object's property in JavaScript, if the object in
question doesn't have such property, it will return `undefined` as the default.
This applies to nonexistent array indices as well.

```js
> let keyMapping = {
    moveUp: "KeyW",
    moveDown: "KeyS",
    moveLeft: "KeyA",
    moveRight: "KeyD"
};
undefined
> keyMapping.mvoeDown
//            ^^ Typo, oops. The object doesn't have key "mvoeDown".
undefined
```

```js
> let randomNumbers = [16, 57, 3];
//              Index:  0   1  2
undefined
> randomNumbers[3] // ! The array does not have index 3.
undefined
```

#### `null` from failed queries

Some functions, for example `getElementById` from the browser API, return
`null` if the function failed to find any result matching what is requested.
If left unchecked and the returned value is used in other places, the "Cannot
read property" error might arise.

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="paragraph-1">Welcome to <i>The programmer's hangout</i>.</p>
    <p id="paragraph-2">
      This is the place for programmers of any skill level to, well, hangout
      with other fellow programmers. Whether you have just written 5 lines of
      code or been a code nerd for 15 years, you are always welcome!
    </p>
    <script>
      let element = document.getElementById("paragraph-3");
      // The one writing this might think this will add another paragraph to
      // the page, which is not how it works.
      // The browser, failing to find any element with ID "paragraph-3" from
      // the page, returns null.
      element.innerText = "When joining, make sure you read the rules.";
    </script>
  </body>
</html>
```

```none
Uncaught TypeError: Cannot set property "innerText" of null
    at tph-welcome.html:16
```

#### `undefined` from uninitialized variables

When declaring a variable without an initializer, JavaScript defaults the value
of the variable to `undefined`. If nothing else is assigned to it later, the
error will show up.

```js
> let payload; // Defaults to undefined.
undefined
> let testValue = 6;
undefined
> if (testValue > 10) payload = { id: 167503, message: "Welcome to TPH." };
// As the condition does not satisfy, "payload" doesn't get assigned
// and remains undefined.
undefined
> console.log(payload.message)
Uncaught TypeError: Cannot read property "message" of undefined.
```

#### `undefined` from missing parameters

If a function accepts a number of parameters, but the calling code passes fewer
than that, the missing parameters are defaulted to `undefined`.

```js
> function getValue(object) {
... return object.value;
... }
undefined
> getValue({ value: 15 })
15
> getValue() // ! No value is given to "object", defaults to undefined.
Uncaught TypeError: Cannot read property "value" of undefined.
```

## Fixing

The way to fix the "Cannot read property `abc` of `null`/`undefined`" error is
of course, to make sure what is being retrieved properties from is not either
`null` or `undefined`. Based on the reason behind the error, the programmer
determines how the issue shall be fixed.

#### Make sure a property exists

Through either checking or reading the documentation for the correct property,
one can make sure what is in their hands isn't JavaScript's default
`undefined`.

```js
async function onCommand(channel, arguments) {
    // Assuming the command is not empty and
    // there is always the first argument.
    let commandName = arguments[0];
    switch (commandName) {
        // ...
        case "getUser":
            if (arguments.length < 2)
                throw "Usage: /getUser <username>";
            // It is guaranteed now that "arguments" has at least 2 elements
            // and thus there is an index 1.
            let username = arguments[1];
            let user = await botClient.fetchUser(username);
            channel.send(JSON.stringify(user);
            break;
        // ...
    }
}
```

#### Handle a failed query

If a query for something fails and returns `null`, the programmer needs to make
sure that situation is handled properly.

```js
async function getUserID(username) {
  // Assuming "username" is guaranteed to be a string.
  let user = await botClient.fetchUser(username);
  if (user == null) throw "There is no user with that name.";
  // It is guaranteed now that "user" isn't null.
  return user.id;
}
```

#### Make sure a variable contains an actual value

By either initializing the variable or guaranteeing the variable will
ultimately receive a value, the error won't be able to occur.

```js
let payload;
let rolledValue = Math.random();
if (rolledValue > 0.5) payload = { id: 169323, message: "Welcome to TPH." };
else payload = { id: 173205, message: "TPH has been waiting for you." };
// In either case, "payload" is guaranteed to be assigned an actual value.
botClient.sendMessage(serverJoiner, payload.message);
```

#### Make sure a function is called correctly

When calling a function, make sure enough parameters are passed as required, or
provide default values for function arguments, if applicable.

```js
function sendEmbed(content, options = { color: "#888", dismissable: false }) {
  let embed = botClient.createEmbed();
  embed.setContent(content);
  embed.setColor(options.color);
  embed.setDismissable(options.dismissable);
  botClient.sendEmbed(embed);
}

sendEmbed("The programmer's hangout: https://theprogrammershangout.com", {
  color: "#763989",
  dismissable: true,
});

sendEmbed("Example site: https://example.com");
// No value is passed to "options" by the caller,
// defaults to the value specified in the function declaration.
```
