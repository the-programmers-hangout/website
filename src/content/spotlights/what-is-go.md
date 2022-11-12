---
authors:
  - "Krypton#7331"
  - "elkell#6226"
  - "TwiN#0001"
created_at: "2022/03/08"
title: What is Go?
---

## What is Go?

Go is a statically typed, compiled programming language designed at Google. Syntactically Go is very similar to C, with memory safety, garbage collection, structural typing and many other advantages. For many developers coming from other languages, Go can be very easy to learn, and to dive into.

## Why has Go been created?

Go is a language designed by engineers at Google, and has evolved to meet the needs for their products at massive scale. Today, you will find Go being used in cloud and network services, command line applications, web development, and DevOps and SRE.

There are numerous open source applications that can be found demonstrating the power of Go. Some of the more popular ones are Docker, Kubernetes, CockroachDB, InfluxDB, Hugo, or Terraform. Go is massively popular in backend development as well, powering the backends of companies like Google, Netflix, Twitter, Twitch, and Cloudflare.

## Why is Go so good?

Go has a strong ecosystem of tools and APIs. Furthermore, the concurrency model in Go is really easy to use (in fact, it takes adding just 2 characters to launch a function in a different goroutine). Applications that interact with networking and handle lots of data benefit greatly from concurrency, making Go an obvious choice.

Furthermore, Go’s simplicity makes it another great contender for large applications where many developers need to work together. Not only in the language specification of Go itself, (which is small enough to be read in a single afternoon!), but also with the tooling. The Go build tool is fast, has built-in dependency management, cross compiles to dozens of platforms, and formats your code consistently. Even when cross compiling Go code with a dozen or so dependencies, Go is miles ahead any other compiled language.

Go has a very comprehensive Standard Library, sometimes enabling projects which require 0 third-party dependencies. The standard library with a built-in ready to use HTTP server and client, tools for JSON and XML encoding, error handling, testing and even benchmarking your own software.

Interfaces in Go are significantly more powerful compared to most other languages. There is no keyword required to make a type or struct implement an interface (such as implements). Go’s interfaces are used to easily mask abstractions through functionality and decouple implementation from code that uses consumes interfaces, which is pleasantly unique to work with.

The implicit nature of interfaces make it possible for the types and structs written by other libraries to also implement your own interfaces, which is a a very powerful that can be used for mocking, and splitting out your code cleanly.

## Is Go Difficult?

This is a question that is often asked by programmers deciding whether or not to learn a new language. Go is designed to be simple. It (intentionally) does not have many language features you may find in in X (where X is your favorite programming language), and strives to keep the language specification tiny. Go’s Language Specification can be read in a single afternoon.

Go does have a slightly unique design system and pattern, which may not be immediately obvious, especially when learning Go after programming in another languages first. Fortunately, it is not very difficult to learn, and you can get started with a taste for it in the Tour of Go.

## Go’s “Hello world!”

A hello world is often included when you explain what a language is, so here it is:

```go
package main

import "fmt" // Import the standard library for printing to the console.

func main() {
    fmt.Println("Hello world!")
}
```

## Did I hear web server?

Correct! Go is widely used for web servers and/or APIs. This can go from a very basic REST API to using Websockets. In comparison to other languages, Go does not need some overcomplicated web framework, Go’s standard library already has this implemented and ready for us. Of course there are third party libraries that implements some additions.

To create a very basic web server we need to import only two standard libraries like the following:

```go
import (
    "fmt"
    "net/http"
)
```

Now we can create a simple handler that will listen to the port 1337 and register a new /hello route.

```go
func handleHello(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello from the Gopher side!")
}

func main() {
    http.HandleFunc("/hello", handleHello)
    http.ListenAndServe(":1337", nil) // Start on port 1337.
}
```

Starting the web server is as simple as running go run main.go.

You can visit http://localhost:1337/hello to see your wonderful HTTP server in action.

In less than 10 lines of code, we managed to create a basic web server that displays some text! Now it’s up to you to make your creative projects :).

## Concurrency in Go

Goroutines
Python developers may know what Coroutines are, however to include them in your project you need an additional library called asyncio.

The difference with Go, is that you can easily create a goroutine to make functions run concurrently. Here’s a very easy example on how to create a goroutine:

```go
func echo(s string) {
    for i := 0; i < 3; i++ {
        time.Sleep(100 * time.Millisecond)
        fmt.Println(s)
    }
}

func main() {
    go echo("World")
    echo("Hello")
}
```

As a quite side, it is important to note that goroutines run concurrently, not necessarily in parallel. Go does support parallel execution, however it is something that is automatically handled by the Go runtime for you. Concurrency is not parallelism is an amazing video by Rob Pike, which I suggest everyone to watch.

Here, echo("World") is dispatched off in a different goroutine (a green thread managed by the Go runtime) that will run concurrently. The snippet above will immediately print Hello, and then successively every 100 milliseconds print “world” thrice. Here is the output.

> Hello world world world

## Channels

Another beautiful part of Go’s concurrency model is channels. .You can see channels as being pipes that transfer data. This is used to send values and data from one goroutine to another one, or just to get data back from a goroutine. Here’s an example:

```go
func sum(list []int, channel chan int) {
    sum := 0
    for _, value := range list {
        sum += value
    }
    channel <- sum // Here we send the sum to the channel
}

func main() {
    list1 := []int{1, 2, 3}
    list2 := []int{9, 8, 7}

    channel := make(chan int) // Here we create a channel that accepts integers
    go sum(list1, channel)
    go sum(list2, channel)
    x := <-channel // Here we receive data from the channel
    y := <-channel

    fmt.Println(x, y, x+y) // Output: 24 6 30
}
```

Here, we concurrently sum up the items in both of our lists (slices) concurrently, and then send the result back into our channel, allowing us to have easy communication between concurrent routines. While we wait for the data to be sent from the sum function, the main function simply blocks till there is data to take. The arrows such as <- simply describe from where to where the data goes, so either from the channel to the variable or from the variable in the channel.

## Does Go have objects?

Yes! There’s just one slight difference here. Go doesn’t directly have a type object, but they have a type that matches the definition of a data structure that integrates both code and behavior. It’s called a struct. Here is an example:

### Structs

```go
type Rectangle struct {
    Width  int
    Height int
}

// The `(rect *Rectangle)` before the name, defines Area as a method on Rectangle.
func (rect *Rectangle) Area() int {
    return rect.Width * rect.Height
}

func main() {
    rect := Rectangle{Width: 10, Height: 5}
    // As in most languages, methods are called on the struct type itself.
    result := rect.Area()
    // As expected, the output is 50.
    fmt.Println("Area:", result)
}
```

### Implicit interfaces

```go
type Shape interface {
    Area() float64
}

type Rectangle struct {
    Width  float64
    Height float64
}

func (rect Rectangle) Area() float64 {
    return rect.Width * rect.Height
}

func main() {
    var s Shape = Rectangle{Width: 10, Height: 50}
    fmt.Println(s.Area())
}
```

As you can see from the example above, the struct Rectangle implements the interface Shape but nowhere in the code it’s clearly written. This works for types defined in different packages, and even in different projects!

## How do I get started?

I’m glad you’re interested in learning more about Go by yourself!

## Installation

The installation is really easy regardless of the operating system you have, simply go to the Go Installation Page and follow the instructions.

## Learning resources

Here’s a really good list of learning resources. The tour is a nice place to begin, however these are all great places to improve as a Go developer.

• [Tour of Go](https://go.dev/tour/welcome/1)

• [Go By Example](https://gobyexample.com/)

• [Effective Go](https://go.dev/doc/effective_go)

• [Gopher Reading List](https://github.com/enocom/gopher-reading-list)

• [Learn Go With Tests](https://quii.gitbook.io/learn-go-with-tests/)

• [Go Proverbs](https://www.youtube.com/watch?v=PAAkCSZUG1c)

We hope to welcome you as a fellow Gopher!
