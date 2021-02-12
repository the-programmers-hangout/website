---
authors:
  - "Kibb#0001"
created_at: 2020/06/08
title: "Chapter 6: What is a protocol?"
---

## Chapter 6: What is a protocol?

How do we humans communicate? Through a mutually agreed convention of a language and conventions.
Similarly, How do we make clients and servers talk to each other?
They need some sort of agreed way to ask for things and respond with replies or errors. This mutually agreed set of rules is commonly known as a protocol.

In this chapter, we are going to create a really simple protocol for getting and storing strings, a _dictionary_.
With our hypothetical protocol your server will store the definition to a series of words.
You can do this nice and simply with a map-like data structure or something more complex, your choice.

In a client-server architecture, genrally a client initiates communication by making a request to the server. In our case, the client will make a request to _get_ a definition from the dictionary server.

To _get_ a definition, the client will send this:

```txt
GET someword
```

All lines in this protocol will be terminated with `\n`

Your server will then look that word up and reply with the value stored against it.
The server will need to reply with a sensible error message if the word does not exist.

For now the reply will be either

```txt
ANSWER the description
```

or

```txt
ERROR can't find someword
```

We have created a simple reading protocol. This protocol can be extended by adding new requests of the form:

```txt
VERB args go here
```

I encourage you to experiment and add other verb based commands.

## Goals

- Read `GET word` from the client
- Reply `ANSWER definition` to the client
- Give errors on undefined words. `ERROR undefined`

## Bonus goals

- Allow clients to `SET word definition*` at runtime. Where definition might be multiple words ending in `\n`
- Add other commands like `CLEAR` to clear all definitions or `ALL` to get all words currently defined.
