---
authors:
  - "Kibb#0001"
created_at: 2020/06/08
title: "Chapter 8: Multiple connections at once"
---

## Chapter 8: Multiple connections at once.

Up until now we have only had one server, one client.

If you try to run the server from earlier and connect to it twice you will get one of two things happen. Either the client
fails to connect because the server is busy and refuses the connection, or the connection will hang waiting in the backlog
to be accepted.

Now we are going to move to support multiple connections at the same time.

There are a number of ways to do this; threads, processes, actors, async/await, promises, callbacks, select, iocp. The list can
go on for hours. Each language will have different bindings and ways of doing these things, you will need to do some research as to
what the best option is for you.

Both epoll and select are common in most languages a few other suggestions include.

- Threads in C/C++/Rust
- NIO / Threads in Java.
- Asyncio / Threads in Python.
- Goroutines in Go.
- Callbacks / Handlers in Javascript
- Actors in Elixir/Erlang

## Goals

- Support multiple connections at once.

## Bonus goals

- See how many connections you can have concurrently using something like [wrk](https://github.com/wg/wrk)
