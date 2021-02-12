---
authors:
  - "Kibb#0001"
created_at: 2020/06/08
title: "Chapter 10: Methods and resources"
---

## Chapter 10: Methods and resources.

If you haven't guessed by now, we are writing a HTTP server. Not against the entire specification (though you can if you want)
just against a limited subset that _should_ work with a browser if you have done it correctly.

HTTP is a line delimited protocol. The idea being that a client will request content from a server and the server will
deliver it.
Each time one side delivers a line to the other it should be delimited by `\r` and `\n` which is carriage ret and line feed.

The start of a HTTP request is as follows.

```txt
[method] [resource] [http-version]\r\n
```

### Methods

The methods are `OPTIONS` or `GET` or `HEAD` or `POST` or `PUT` or `DELETE` or `TRACE` or `CONNECT`
Some of these you might have experienced before, others are a bit more unusual.

`GET` is the simplest with "GET me this resource". Get is also considered idempotent which means the act of doing it again
should have identical results, cause _no_ side effects, it can also be cached.

`PUT` is "PUT something at this resource". This method is also considered idempotent and is usually used to create or update a resource.

`HEAD` is identical to `GET` but doesn't return the resource, only the headers (more on headers and responses in the next chapter) and start of the request. It is also idempotent.

`POST` post is explicitly to create new entries at the located resource. It should not be cached and should not be considered idempotent.

`DELETE` deletes the resource given. It should be repeatable and is considered idempotent.

`OPTIONS` is kind of a query to see what is allowed on a given resource, it should reply with what methods are supported and any other information.

`TRACE` and `CONNECT` we are going to ignore these two as they are not commonly used anymore and wont be of much use to us.

### Resource

A resource is just something identified by a URL. An example of a resource could be `/index.html` or `/api/person`
These are both resources, it's down to the server to decide what these resources mean. In a web application they might
correspond to a controller, or as a file on disk.

### Version

The version tells the server what http version the client is using and can support, and the server replies with the same.

## Goals

- Process an incoming request (you can use curl, wget, your browser to send requests)
- Read the first line and break it into a method, a resource and the version and then close the connection.

## Bonus goals

- Log when a request is invalid (unknown method)
