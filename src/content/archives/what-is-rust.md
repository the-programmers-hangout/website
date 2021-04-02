## What is Rust?

"Rust is a systems programming language that runs blazingly fast, prevents segfaults, and guarantees thread safety."
In other terms, Rust is a language that offers the performance of C or C++ along with some higher level constructs
that let the compiler figure out whether or not your code is safe.
But what is safe? Safe here means that your program shouldn't leak memory, access uninitialised or undefined
memory, or yield odd results because of race conditions in your code. Rust, similar to C++, offers what
are called "Zero-cost" abstractions, which in essence means that the idiomatic/ pretty way of writing a piece
of code will be as performant as writing your own code.

## How is Rust safe?

Rust adds an extra layer of safety by having a concept of ownership at the type level, and by
strongly distinguishing mutability over immutability. By keeping track of where a resource is owned,
the compiler can figure out at compile time when that resource can safely be destroyed, thus preventing
a large class of bugs related to manual memory management.
Rust also uses this ownership system to keep track of resource management across threads, thus preventing
data races.

Like C and C++, Rust doesn't have any garbage collection, but unlike C, and to a lesser extent C++,
Rust doesn't have manual memory management. Because of this ownership system, the compiler figures
out when to safely drop resources. Unlike in C, where you could leak memory by forgetting to free
some resource, or crash your program by using memory that has already been freed, Rust avoids errors like
these by keeping track of who owns what resource at compile time.

## What high level constructs does Rust offer?

Rust comes with a very good standard library, if you're not building on an embedded platform, of course.
The standard library allows you to work with vectors and arrays using concise .maps and .filters instead
of your standard for loop. In addition to constructs provided by the standard library, the language itself
has common modern language features, such as modules, structs, and anonymous functions (closures).
One of the more unique Rust features is Traits, which are like Interfaces, but in reverse. Instead of a Struct
inheriting from an Interface when it's defined, a Trait is defined after a Struct, and then the implementation of
that Trait for the Struct may be defined. This allows you to create new interfaces and have pre-existing types
adhere to them. This offers a bit more extensibility than the traditional interface system.

Another newer feature Rust has is pattern matching, which allows you to match not and branch code not only
on the simple value of data, but also on its structure. For example instead of matching on a simple integer value,
you can match on a hashmap with a certain value at a certain key.

One of the external aspects that makes the language easy to work with is the build tool "Cargo". Cargo
makes fetching dependencies for a project and building a project a breeze!

## Where do I get Rust?

Installation instructions can be found here: https://www.rust-lang.org/en-US/install.html

## Where do I learn more?

Rust has a great book for learning the language, that can be found here (online book): https://doc.rust-lang.org/book/second-edition/index.html

## Code Examples

### Hello World

```rust
fn main() {
    println!("Hello World!");
}
```

### Pattern Matching Example

```rust
fn main() {
    let p = Point { x: 0, y: 7 };

    match p {
        Point { x, y: 0 } => println!("On the x axis at {}", x),
        Point { x: 0, y } => println!("On the y axis at {}", y),
        Point { x, y } => println!("On neither axis: ({}, {})", x, y),
    }
}
```

### Sum of Squared Odd Numbers under 1000

```rust
fn is_odd(n: u32) -> bool {
    n % 2 == 1
}

fn main() {
    println!("Find the sum of all the squared odd numbers under 1000");
    let upper = 1000;

    // Imperative approach
    // Declare accumulator variable
    let mut acc = 0;
    // Iterate: 0, 1, 2, ... to infinity
    for n in 0.. {
        // Square the number
        let n_squared = n * n;

        if n_squared >= upper {
            // Break loop if exceeded the upper limit
            break;
        } else if is_odd(n_squared) {
            // Accumulate value, if it's odd
            acc += n_squared;
        }
    }
    println!("imperative style: {}", acc);

    // Functional approach
    let sum_of_squared_odd_numbers: u32 =
        (0..).map(|n| n * n)                             // All natural numbers squared
             .take_while(|&n_squared| n_squared < upper) // Below upper limit
             .filter(|&n_squared| is_odd(n_squared))     // That are odd
             .fold(0, |acc, n_squared| acc + n_squared); // Sum them

    println!("functional style: {}", sum_of_squared_odd_numbers);
}
```

### Traits Example

```rust
pub trait Summary {
    fn summarize(&self) -> String;
}

pub struct NewsArticle {
    pub headline: String,
    pub location: String,
    pub author: String,
    pub content: String,
}

impl Summary for NewsArticle {
    fn summarize(&self) -> String {
        format!("{}, by {} ({})", self.headline, self.author, self.location)
    }
}

pub struct Tweet {
    pub username: String,
    pub content: String,
    pub reply: bool,
    pub retweet: bool,
}

impl Summary for Tweet {
    fn summarize(&self) -> String {
        format!("{}: {}", self.username, self.content)
    }
}

fn main() {
    let tweet = Tweet {
        username: String::from("horse_ebooks"),
        content: String::from("of course, as you probably already know, people"),
        reply: false,
        retweet: false,
    };

    // 1 new tweet: horse_ebooks: of course, as you probably already know, people
    println!("1 new tweet: {}", tweet.summarize());
}
```
