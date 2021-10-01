---
authors:
  - "Kibb#0001"
created_at: 2020/06/08
title: "Chapter 3: Creating a socket"
---

## Chapter 3: Creating a socket.

Finally some actual code. Lets get started!

The goal of this chapter is to create a socket and have it listen for connections. This will lay the ground work for future
chapters in the project

The first step is to create a socket in your language.

Different languages will expect you to set it up in different ways, you should check the documentation for your given
network bindings, something like this.

```js
var socket = new Socket();
```

Once we have that socket we can then bind it to an interface.
The interface is what IP network / device it is going to listen on, the port is the port it will bind to.

Whenever you see a connection like `127.0.0.1:6789` the IP address comes first, then `:` then the port number.

In the pseudo code this would be the required code to bind the socket. You can pick any port number for this, I chose `6789`

```js
socket.bind("127.0.0.1", 6789);
```

Now that the socket is bound, we can put it into listening mode. Listening mode implies that people will be connecting
to this socket. The parameter is _usually_ the backlog of connections you want to allow.

```js
socket.listen(1);
```

Once we have set the socket up in listen mode we can finally accept an incoming connection.

```js
var conn = socket.accept();
```

This will accept a connection and hold it.

You will need to make sure your program doesn't exit prematurely so you might want to have it ask for some standard input or wait on a condition.

```js
var socket = new Socket();
socket.bind("127.0.0.1", 6789);
socket.listen(1);
var conn = socket.accept();

stdin.read(); // to stop the program just exiting.
```

If you are using windows you can use [Putty](https://www.ssh.com/ssh/putty/putty-manuals/0.68/Chapter3.html#using-rawprot) to create a raw connection.

On linux you can use `netcat` or `nc` to make network connections,
you can see if your server is listening properly by running a command like this

```sh
nc -v -v localhost <port>
```

where `<port>` is the port number you picked earlier on.

If it works you should see some output like

```sh
localhost [127.0.0.1] 6789 (radg) open
```

If something has gone wrong then you will get a different message.

When you have completed the goals for this chapter you will have created a socket, bound it, listened for connections and accepted a connection.

You should try experimenting with connecting twice and seeing what happens. This could be something to do with that backlog referenced earlier.

## Goals

- Create a socket.
- Bind it to an interface and port.
- Listen for a single connection.

## Bonus goals

- Allow for a backlog of connections.
