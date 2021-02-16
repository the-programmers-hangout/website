---
authors:
  - "Kibb#0001"
created_at: 2020/06/08
title: "Chapter 5: Reading from the socket"
---

## Chapter 5: Reading from the socket.

It's a good start, we have a server that can accept connections. It will write a message to the client.

But we aren't reading anything from the client. This will all change now.

Most network bindings will have a `recv` method. This method allows you to receive some bytes from the client.
There might be higher level abstractions like `recv_line` or `recv_all` or something like that but we are gonna focus
on the simplest version `recv`. The basic version of recv takes a number, and tries to read that many bytes from the
connected client. It will read as many as it can then return what it read.

Given our code from previous chapters.

```js
var client = socket.accept();
client.send("Welcome!\n");
var reply = client.recv(4096);
client.send("You said: \n");
client.send(reply);
client.close();
```

Note that you can also test your server with netcat, use netcat as a client and whatever you write in the terminal will be sent to the server.

## Goals

- Read a message from the client.
- Write that message back to the client.

## Bonus goals

- Find a method that allows you to read lines OR parse the bytes into lines yourself.
- Accept multiple lines.
