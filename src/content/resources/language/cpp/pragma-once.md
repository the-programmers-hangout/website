---
authors:
  - "sudonym#8623"
created_at: 2019/10/6
title: "pragma once"
---

## What is `#pragma once`?

The `#pragma once` directive tells a compiler to only include and parse a header file _once_ even if it is included multiple times in the same source file.
They provide a cleaner alternative to [include-guards](https://en.wikipedia.org/wiki/Include_guard) that are conventionally used for this purpose.

### Is it portable ?

No. `#pragma` directives are used to control _implementation-defined_ behavior and are thus compiler-specific.

### Why should I use it ?

1.  Less typing if your IDE/editor doesn't do it for you ¯\\\_(ツ)\_/¯
2.  Faster compiling, as the compiler can now completely ignore processing/loading this file, it'd have to load it all if you were using a header guard.
3.  You find header guards icky.

### Why should I not use it ?

1.  You want to be standards-compliant
2.  You want to follow CppCoreGuidelines: <https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md#Rs-guards>
3.  You use a `compiler:version` which doesn't support `pragma once` or has a buggy implementation (see the section on compiler support)

### Why not both?

![Why not both](https://i.imgur.com/DBcUtoo.png)

Some people/projects do this, so that you can both be standards-compliant (since unrecognized pragmas will be ignored) _and_ get that speed bonus.
I can't tell you if you should either use pragma, header guards or both, that's just one of those opinion topics nobody agrees on.

### What compilers support it?

Virtually all popular and modern compilers.
See [this list](https://en.wikipedia.org/wiki/Pragma_once#Portability) for more information.
