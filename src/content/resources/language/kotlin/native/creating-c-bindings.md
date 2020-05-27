---
authors:
  - "supergrecko#3434"
created_at: "2019/08/23"
title: "Creating C bindings with Kotlin/Native"
external_resources:
  - text: KotlinLang.org C-interop reference
    href: "https://kotlinlang.org/docs/reference/native/c_interop.html"
  - text: Kotlin releases on GitHub
    href: "https://github.com/JetBrains/kotlin-native/releases"
---

## Interoperability with C

Kotlin/Native supports interoperability with the C programming language. This article will show you how to create bindings between C and Kotlin/Native.

### Setup

This guide assumes you already have the Kotlin compiler and the GCC C compiler installed on your computer.

If you do not have the Kotlin compiler installed on your computer you can download it from the GitHub releases linked above.

### Creating our C library

We will be creating a very simple library to demonstrate linking.

This is our `App.h` file

```c
#ifndef APP_H
#define APP_H

void run();

#endif
```

And this is our `App.c` file

```c
#include <stdio.h>
#include "App.h"

void run() {
    printf("Hello, from C");
}
```

### Compiling our C library

First of all we will need to compile our C sources.

```bash
gcc -c "-I$(pwd)" App.c -o App.o
```

The `"-I$(pwd)"` flag translates to the gcc -I flag with our current working directory as its parameter. You can also type out the full path if you want to.

We now have our compiled C code in `App.o`. Now we have to turn the compiled output into a static library.

We'll save our compiled static library in a file named `App.a`

```bash
ar rcs App.a App.o
```

### Compiling our bindings

Now we need to create a `App.def` file for the Kotlin cinterop tool

The minimal requirements for a `.def` file is some headers. We will include our header file here.

```def
headers = App.h
```

We will run the `cinterop` command to generate the Kotlin bindings for our C library.

```bash
cinterop -def App.def -compilerOpts "-I$(pwd)" -o App.klib
```

We're now ready to create a Kotlin file to interact with our C library so let's do that. Let's name this file `App.kt`

```kotlin
import App.run

fun main() {
    println("Hello, from Kotlin/Native")
    run()
}
```

We'll print out a hello from Kotlin, and then the hello from C.

### Executing our Kotlin

There is only one more step before we can run our Kotlin application, we need to compile our Kotlin, so let's do that.

Using the konanc compiler we will bundle our C library with our Kotlin file.

```bash
konanc -l App.klib App.kt -linker-options App.a -o App.kexe
```

We can now run our executable so let's do that.

```bash
./App.kexe
```

This should be the program output:

```text
Hello, from Kotlin/Native
Hello, from C
```
