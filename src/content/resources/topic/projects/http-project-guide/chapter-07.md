---
authors:
  - "Kibb#0001"
created_at: 2020/06/08
title: "Chapter 7: Testing"
---

## Chapter 7: Testing.

Im assuming most of the testing has been done by hand up to this point but this isn't really
scalable as a long term solution. This is where unit testing comes in, all projects should have tests that cover
at least the bare minimum of cases that are expected. This project is no different.

Pretty much all languages have some sort of unit test functionality, to make connections and assert things.
We will need to write a bit of code to be able to facilitate the unit testing. You will now need to create a
tcp client that can connect and you can send and receive lines via, this will help with testing the project as
a whole.

```js
fun test_get_definition() {
    var client = connect("127.0.0.1", 5678);
    client.send("GET word\n");
    var line = client.recv(4096);
    assert(line == "ANSWER something interesting here\n");
}
```

The idea here is to try and test all the functionality of your program and use the above tests to identify what may be going wrong.

Coverage is a reasonably good metric for establishing if your code is well tested. Coverage is identifying what lines
are covered by unit tests and what lines are not.

## Goals

- Unit test any verbs defined in the previous chapter.

## Bonus goals

- Reach a 90% test coverage.
