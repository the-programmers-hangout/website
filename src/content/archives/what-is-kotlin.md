## What is kotlin?
Kotlin is a statically typed programming language that runs on the JVM (Java Virtual Machine).

## Why does kotlin exist?
Kotlin exists as a modern roll of Java - Java was built from the ground up to suit OOP, and that's a task that it does pretty well. Later, functional programming was added in, by contrast, kotlin was made with both paradigms in mind, picking the good, easy to adopt parts up and adding them all into one neat language. Kotlin also had a requirement: Allow interop with Java code - to which it does (works great on android!)

## How hard is kotlin to learn?
Well, that depends a lot on where you are coming from. If you already know Java, it'll be exceptionally easy to pick up. Everything has a very "right" feeling to it compared to the older style, it's almost like a natural progression.

If you don't know Java, that's a bit trickier to answer. You can certainly learn it, as a first language either, but there are some Java things you will need to know. If I were learning it as a first language, I'd try to heavily rely on the documentation and understand each feature that exists in kotlin, and why they exist. The most important is the concept of nullable types.

Java will allow anything to be null, but in kotlin there is a distinct separation. a `String` is very different to a `String?` - the second one can have a value of null, the first cannot. When interoping with Java code, it's always best to assume anything can be null.

## What are some key features of kotlin?
If you're a Java user, here is a comparison list made by Jetbrains: <https://kotlinlang.org/docs/reference/comparison-to-java.html>

Some key ones to point out of this list:

- Data classes (like Lombok data clases, for you java users)
- Delegation properties (Lazy evaluation, observables and more !!)
- Extension functions - great for fixing up a library class that is missing a method. No pretty print function? That's cool, just define it yourself. `LibraryClass.newFunction() = ...` (Yes, like C#)

## What platforms can kotlin run on?
Anything and everything. Let's break that down:

## The JVM
This is primary compile target, the JVM as a piece of kit allows you to write some code and have it work without separate compilations on Windows, Mac and Linux - so you've got all of your bases covered there.

## Android
Yea, it's also a first class language on android, the only other language supported by google: <https://youtu.be/d8ALcQiuPWs>

## Native
If you don't like the JVM and you're not an android dev, well, you can just target native: <https://kotlinlang.org/docs/reference/native-overview.html>

## JavaScript
Yea, you can make kotlin compile to JavaScript, see here: <https://kotlinlang.org/docs/tutorials/javascript/kotlin-to-javascript/kotlin-to-javascript.html>

Here are some extra points that don't fit into any of the headings above

- Kotlin offers a really nice editor, Intellij - you can use the community edition for free or pay for the ultimate one, both are great.
- Kotlin is backed by 2 big companies, Jetbrains and Google, so it has a lot of life blood in it.
- Kotlin has extremely good concurrency support, see here: <https://github.com/Kotlin/kotlinx.coroutines/blob/master/coroutines-guide>.
- Kotlin is fairly unopinionated, so if you're more a functional person you can go down that route most of the way, and the same for OOP, think of it as the Jack of all trades
- Kotlin allows building through both maven and gradle, two very mature build systems with a lot of libraries available - that means that you don't need to suffer the problems associated with small languages (No tools or libraries, it already has a great set of tools (intellij, maven, gradle) and a great ecosystem (it steals from Java!))

## Learning resources

- Language reference: <https://kotlinlang.org/docs/reference/>
- Introduction to kotlin <https://youtu.be/X1RVYt2QKQE>
- Kotlin books <https://kotlinlang.org/docs/books.html> - Pick your poison based on what it is you wanna do!
- Kotlin koans <https://kotlinlang.org/docs/tutorials/koans.html>
- Try it out online <https://try.kotlinlang.org/#/Examples/Hello,%20world!/Simplest%20version/Simplest%20version.kt>
- **Awesome** kotlin - <https://github.com/KotlinBy/awesome-kotlin> Many great resources and libraries here

## Hello, world!

```kotlin
fun main(args : Array<String>) {
  println("Hello, world!")
}
```

## FizzBuzz

```kotlin
fun main(args: Array<String>) {
    for (i in 1..100) {
        println(if (i % 15 == 0) "FizzBuzz" else if (i % 3 == 0) "Fizz" else if (i % 5 == 0) "Buzz" else i)
    }
}
```

## Generate some nice HTML

```kotlin
//declarations here `https://kotlinlang.org/docs/reference/type-safe-builders.html`
import com.example.html.*

fun result(args: Array<String>) =
    html {
        head {
            title {+"XML encoding with Kotlin"}
        }
        body {
            h1 {+"XML encoding with Kotlin"}
            p  {+"this format can be used as an alternative markup to XML"}

            // an element with attributes and text content
            a(href = "http://kotlinlang.org") {+"Kotlin"}

            // mixed content
            p {
                +"This is some"
                b {+"mixed"}
                +"text. For more see the"
                a(href = "http://kotlinlang.org") {+"Kotlin"}
                +"project"
            }
            p {+"some text"}

            // content generated by
            p {
                for (arg in args)
                    +arg
            }
        }
    }
```

## Create some SQL tables and do some CRUD operations with kotlin exposed (link here: <https://github.com/JetBrains/Exposed>)

```kotlin
// Declare the table structure
object Users : Table() {
    val id = varchar("id", 10).primaryKey()
    val name = varchar("name", length = 50)
    val cityId = (integer("city_id") references Cities.id).nullable()
}

//Declare another table
object Cities : Table() {
    val id = integer("id").autoIncrement().primaryKey() // Column<Int>
    val name = varchar("name", 50) // Column<String>
}

fun main(args: Array<String>) {
    Database.connect("jdbc:h2:mem:test", driver = "org.h2.Driver")

    transaction {
        //make em
        create (Cities, Users)
         val saintPetersburgId = Cities.insert {
         it[name] = "St. Petersburg"
        } get Cities.id

        val munichId = Cities.insert {
            it[name] = "Munich"
        } get Cities.id

        Cities.insert {
            it[name] = "Prague"
        }

        Users.insert {
            it[id] = "andrey"
            it[name] = "Andrey"
            it[cityId] = saintPetersburgId
        }


        Users.deleteWhere{Users.name like "%thing"}

        println("All cities:")

        for (city in Cities.selectAll()) {
            println("${city[Cities.id]}: ${city[Cities.name]}")
        }
}
```
