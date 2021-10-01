---
authors:
  - "Kibb#0001"
created_at: 2020/06/08
title: "Chapter 12: Replying"
---

## Chapter 12: Replying.

Servers have a number of responses they can make to a request. These range from "OK" to "Not Found" a list can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

The ones we will focus on in this chapter is

- 200 - OK
- 400 - Bad Request
- 404 - Not Found

Lets work through an example

```txt
GET /test.txt HTTP/1.1
Host: localhost:9995
User-Agent: curl/7.67.0
Accept: */*

```

Lets start by replying to the request given above.

For this we need to have a directory for our web hosting files to live in. Lets call this `./www`.
Create the directory and add a test file in it called `test.txt` this file should contain some text of your choice.

Now the request that came in asked for the `test.txt` file we are hosting.
So to answer the request we must first check we have that resource, in this case we do.
So we are going to reply with the most common HTTP response. OK.

The first line of the response looks like this. We include the version we support, the status number, and the human readable
description of that status number.

```txt
HTTP/1.0 200 OK
```

Once we have sent that line we can send any headers we want to send.
There are no mandatory headers but there are some suggested ones we will cover later.

Then we send an empty `\r\n` to indicate we are done sending the headers. Now we can send the body.

We read the `test.txt` file in and we write that as the body.
Once we are done sending we can simply close the connection to indicate we are done sending the body.

The entire response might look something like this

```txt
HTTP/1.0 200 OK

Etiam bibendum sapien ut est posuere pretium. Vestibulum a justo at sapien pharetra sagittis in eget lacus.
Sed ullamcorper quam sed nulla molestie interdum. Vestibulum hendrerit, est vel tristique
luctus, urna nibh pulvinar ligula, vel scelerisque nisi orci ac mauris. Nam tempor, orci nec rutrum sodales,
nulla diam imperdiet enim, id pellentesque leo nibh et urna. Vivamus non tortor dapibus, efficitur ex sed,
blandit odio. Vivamus volutpat, nunc sed pulvinar pellentesque, ipsum ante vestibulum sem, vitae malesuada
dui odio ut erat.
```

Boom. Done.

There are other replies we might send though, for example lets say someone requests `missing.txt` and we don't have that.
We need to inform the client it doesn't exist. We do this by sending a 404. It's mostly the same as the previous but we change
the number and message to something different

```txt
HTTP/1.0 404 Not Found

Sorry we don't have that file!
```

The final response is a generic response when the client sends you something that doesn't make sense.

Imagine the client sent

```txt
GasdasET /test.txt
!!!!!!
WHAT/1.1

```

That doesn't look like a valid request so we should tell them that by sending a Bad Request response.

```txt
HTTP/1.0 400 Bad Request

Im sorry I just don't understand.
```

We can look at once more example this time with headers in the response.

Lets say we reply and we also want to provide information about the http server that was used. We might send

```txt
HTTP/1.0 200 OK
Server: my-awesome-server

This is my content here.
```

This is an example of the `Server` header, there are other common headers as listed in the link at the top.

## Goals

- Read the file asked for by the request and reply with the contents
- Add other resources and maybe support directories like `/subdirectory/file.txt`
- Reply with a 404 if you can't find the file requested.

## Bonus goals

- Implement the `Content-Length` header
- Implement the `Server` header
- Implement the `Content-Type` header
