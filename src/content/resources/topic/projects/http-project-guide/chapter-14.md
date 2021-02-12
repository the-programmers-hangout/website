---
authors:
  - "Kibb#0001"
created_at: 2020/06/08
title: "Chapter 14: Security"
---

## Chapter 14: Security.

Unless you have spotted it (if you have then well done!) there is already a security risk in our HTTP server.

Lets look at that now.

```txt
GET /../config.yaml HTTP/1.0

```

This request is a relative path. So your server accepts the path. Goes up one directory from the `www` directory.
Reads your _config_ and sends it to the attacker.

This is real bad. Imagine if your config had database passwords in it?
Imagine if someone requested `../../../../etc/passwd` and your server replied with it!

This is where security comes in.

You need to find a way to isolate the `www` directory we created so nobody can read stuff outside of it.

- You could use some sort of filesystem sandbox like chroot / jails
- You could manually work out if `..` will take you above the `www` directory.
- You could make the http server run as a different user and only give that user permission to read `www` directory.

This is just one of many possible attacks against your web server.

You should look through guides for your language of choice and find ways to harden your application.

## Goals

- Solve the ability to read files outside of your `www` directory.

## Bonus goals

- Audit your code for other issues.
