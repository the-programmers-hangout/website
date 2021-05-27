---
authors:
  - "Kibb#0001"
created_at: 2020/06/08
title: "Chapter 13: Config"
---

## Chapter 13: Config.

For the time being we have been hard coding all the various values like the port and the web directory,
it's about time we made this configurable.

Lets create a config file that we can set the port and the host in. Lets say this config file is called `config`
and can contain any format you want. YAML, JSON, INI, Plain text; whatever suits you and your language.

For these examples we will use YAML but they are all similar

```yaml
host: localhost
port: 9985
web_directory: ./www
```

Lets update the program to read the values from config and use those.

The whole point of making it configurable is the person deploying this in the future doesn't want to edit code or
change values in your program to get it to work to their usecase. So by providing a way to configure your application
it makes it more portable and usable in different situations.

This should be quite an easy chapter but it's a reasonably important one.

## Goals

- Replace any hard coded values with values set in a config file.

## Bonus goals

- Provide sane defaults if the values are missing
- Add your own config values.
