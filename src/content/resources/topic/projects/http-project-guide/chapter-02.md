---
authors:
  - "Kibb#0001"
created_at: 2020/06/08
title: "Chapter 2: So what are we building?"
---

## Chapter 2: So what are we building?

The actual final end goal is going to remain a mystery for the time being, but what I can tell you is that we are going
to be building a server!

What is a server? It's a program that accepts incoming connections, reads and writes to that connection and closing
it eventually.

You will hear the term socket used a lot in this project. Sockets are a way of connecting two devices on a network together.
One socket listens, the other socket connects.

The main design of sockets in the unix world is [Berkeley Sockets](https://en.wikipedia.org/wiki/Berkeley_sockets) and
on windows it's [Winsock](https://www.wikiwand.com/en/Winsock).

This project will mostly be using berkeley sockets but if you want to use windows APIs feel free.

In general there is a flow for sockets. On the client you follow a flow like this;

```txt
    +---------+
    | Connect |
    +---+-----+
        |
    +---v--+
+---> Send |
|   +---+--+
|       |
|   +---v--+
+---+ Recv |
    +---+--+
        |
    +---v---+
    | Close |
    +-------+
```

First the client connects. Then the client can send and receive (recv) data until the connection is finally closed.

On the server the flow is slightly more involved.

```txt
+------+   +--------+   +--------+   +------+   +------+   +-------+
| Bind +---> Listen +---> Accept +---> Recv +---> Send +---> Close |
+------+   +---^----+   +---+----+   +--^---+   +--+---+   +-------+
               |            |           |          |
               +------------+           +----------+
```

When a server starts up and creates a socket, it binds that socket to an interface and a port.
The server will then set the socket to listening for connections,
when a connection comes in it needs to accept that connection.
Once a connection has been accepted it can receive and send to the socket the same as the client and eventually close it.

This overview is brushing over a few details and you are encouraged to do your own research

## Goals

- Read up on sockets.
- Find the documentation on your languages bindings for sockets.
