---
authors:
  - "@veksen"
created_at: "2019/07/27"
---

# Iterative vs Functional array helpers

-- placeholder --

## find

```js
const users = [
  { name: "Joe", age: 25 },
  { name: "John", age: 17 },
  { name: "Jane", age: 16 },
]
```

Iterative way:

```js
let foundUser = null
users.forEach(user => {
  if (user.name === "John") {
    foundUser = user
  }
})
```

Functional way:

```js
const foundUser = users.find(user => user.name === "John")
```

## filter

```js
const users = [
  { name: "Joe", age: 25 },
  { name: "John", age: 17 },
  { name: "Jane", age: 16 },
]
```

Iterative way:

```js
const youngerUsers = []
users.forEach(user => {
  if (user.age < 18) {
    youngerUsers.push(user)
  }
})
```

Functional way:

```js
const youngerUsers = users.filter(user => user.age < 18)
```

## map

```js
const users = [
  { name: "Joe", age: 25 },
  { name: "John", age: 17 },
  { name: "Jane", age: 16 },
]
```

Iterative way:

```js
const userNames = []
users.forEach(user => {
  userNames.push(user.name)
})
```

Functional way:

```js
const userNames = users.map(user => user.name)
```

## reduce

```js
const users = [
  { name: "Joe", age: 25 },
  { name: "John", age: 17 },
  { name: "Jane", age: 16 },
]
```

Iterative way:

```js
let totalAge = 0
users.forEach(user => {
  totalAge += user.age
})
```

Functional way:

```js
const totalAge = users.reduce((acc, user) => acc + user.age)
```

## some

```js
const users = [
  { name: "Joe", age: 25 },
  { name: "John", age: 17 },
  { name: "Jane", age: 16 },
]
```

Iterative way:

```js
let hasYoungUsers = false
for (let i = 0; users.length > i; i++) {
  if (user > 18) {
    hasYoungUsers = true
    break
  }
}
```

Functional way:

```js
const hasYoungUsers = users.some(user => user.age < 18)
```

## every

```js
const users = [
  { name: "Joe", age: 25 },
  { name: "John", age: 17 },
  { name: "Jane", age: 16 },
]
```

Iterative way:

```js
let allUsersAreOldEnough = true
for (let i = 0; users.length > i; i++) {
  if (user.age > 18) {
    allUsersAreOldEnough = false
    break
  }
}
```

Functional way:

```js
const hasYoungUsers = users.some(user => user.age < 18)
```

## inludes

```js
const pets = ["cat", "dog", "bat"]
```

Iterative way:

```js
let found = false
pets.forEach(pet => {
  if (pet === "dog") {
    found = true
  }
})

// or most of the time done with indexOf
pets.indexOf("dogs") > 0
```

Functional way:

```js
pets.includes("dogs")
```
