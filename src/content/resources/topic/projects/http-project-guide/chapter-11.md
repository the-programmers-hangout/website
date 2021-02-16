---
authors:
  - "Kibb#0001"
created_at: 2020/06/08
title: "Chapter 11: Headers and bodies"
---

## Chapter 11: Headers and bodies.

We are almost there, we can almost complete an entire request. But before we can finish a request, we need to
read the last few parts of an entire request.

We have already read the `GET /resource HTTP/1.0\r\n` line parsed.

The next line following this will be a header line.
Headers are just key value pairs that repeat until you read an empty `\r\n` line.
You split on the `:` and treat the left hand side as the key, and the right hand side as the value.

This is an example request from curl.

```txt
GET / HTTP/1.1
Host: localhost:9995
User-Agent: curl/7.67.0
Accept: */*

```

This breaks down into the following information.

- Method: GET
- Resource: /
- Headers
  - Host: localhost:9995
  - User-Agent: curl/7.67.0
  - Accept: _/_

That's all the information contained in this request.

There are hundreds of different headers and browsers / clients will often define their own.
For a list of common headers look [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

Some client requests will send a body. This will be included after the header block.
For now this is not important.

## Goals

- Read an entire request including all the headers.

## Bonus goals

- Handle malformed headers.
