---
authors:
  - "Kibb#0001"
created_at: 2020/06/08
title: "Chapter 4: Writing to the socket"
---

## Chapter 4: Writing to the socket.

We have a server, but it doesn't really do anything. That isn't very useful really.

In this chapter we will take it a step further and actually write a message to the connection.

Given our pseudo code from the last chapter,

```js
var socket = new Socket();
socket.bind("127.0.0.1", 6789);
socket.listen(1);
var conn = socket.accept();
```

We now want to be able to write something to this connection.

Most network bindings will have a `send` or a `write` method. We can call this to send data to the client.

```js
conn.send("Hello Joe!\n");
conn.close();
```

When testing this with netcat we should see that when someone connects it prints out `Hello Joe!` in the terminal,
then closes the connection.

For the time being we are going to stick to hard coded responses, but you can change that message to whatever you want.

You can always send a message to a client that is _not_ closed.

```js
conn.send("hi ");
conn.send("my name ");
conn.send("is ");
conn.send("slim shady\n");
conn.close();
```

This code will send `hi my name is slim shady` to anyone that connects.
Notice it doesn't have to be all in one single send method

## Goals

- Write a hello message to a client.

## Bonus goals

- Send a message to the client every X seconds.
