---
authors:
  - "itsHobbes#1985"
created_at: "2021/10/08"
title: What is Modern Java?
---

## What is Modern Java?

Java 17 is upon us! Java 17?! Wait... What happened? Did 7 ate 9, 10, 11, 12, 13, 14, 15, *and* 16!? 
No! As of Java 9, Oracle have taken Java into a fixed 6 month release schedule. Meaning every six months a new version of Java is released, and every 2 years (so 4 version) a new Long term support build will be marked by Oracle. Java 17 is the latest LTS. 

Along with this, Oracle have heavily invested in the development of the Java language. This spotlight is going to take you through some of the biggest changes to Java across the last 9 versions. Unlike most of our previous spotlights, we are going to assume that you have some base knowledge of Java already. If you don't, check out the awesome resources in our java channel!

## Local Type Inference (Java 10)

One common complaint of Java is that it can often be very verbose. Local Type Inference brings a new reserved word `var` to the Java language. There are some important points you need to know about var. 

1. `var` is **not** a keyword. In the name of backwards compatibility `var` is simply a reserved type name. You *can* still use it as a variable name but please please please do not do that.
2. `var` in java is **not** like `var` in javascript. Java is still statically typed. When you use `var` in Java you are simply letting the compiler infer the type at compile time and this type is used as a static type for the variable.
3. `var` is **not** `final` by default. If you want a `final` local variable, you still need to use the `final` keyword.
4. `var` **can only** be used for declaring local variables. This includes indexes for for-loops and resource variables for try-with-resource statements.
5. You **cannot** have an un-initialised type inferred variable. This should be fairly obvious, but in omitting the right hand side initialiser of a `var` variable the compiler has nothing to infer the type from.

Let's look at some scenarios.

```java
try (InputStream is = socket.getInputStream();
    InputStreamReader isr = new InputStreamReader(is, charsetName);
    BufferedReader br = new BufferedReader(isr)) {
        return br.readLine();
}
```

In the above example, we're using a try-with-resources block to setup up a `BufferedReader` so that we can read our socket input. You have probably already noticed a huge amount of repeated information. Each line repeats the type twice. We don't need that. Let's see how Local Type Inference can help out here.

```java
try (var is = socket.getInputStream();
    var isr = new InputStreamReader(is, charsetName);
    var br = new BufferedReader(isr)) {
        return br.readLine();
}
```

Whoa! This is so much easier to read. The noise of the previous snippet is completely gone, and yet we still retain all of the type information we, as developers, need when reading and modifying this code.

Let's look at a more complex example and bring in some type parameters. This snippet allows us to remove a max number of matching entries from a map. We can use wildcarded type bounds to increase the flexibility of this method, but it results in a very messy piece of code.

```java
void removeMatches(Map<? extends String, ? extends Number> map, int max) {
    for (Iterator<? extends Map.Entry<? extends String, ? extends Number>> iterator =
             map.entrySet().iterator(); iterator.hasNext();) {
        Map.Entry<? extends String, ? extends Number> entry = iterator.next();
        if (max > 0 && matches(entry)) {
            iterator.remove();
            max--;
        }
    }
}
```

This example has some very noisy type declarations due to the type parameters for the Iterator and Map Entry. In this situation, `var` can be very handy for inferring our type

```java
void removeMatches(Map<? extends String, ? extends Number> map, int max) {
    for (var iterator = map.entrySet().iterator(); iterator.hasNext();) {
        var entry = iterator.next();
        if (max > 0 && matches(entry)) {
            iterator.remove();
            max--;
        }
    }
}
```

Once again `var` comes to the rescue and makes this code much more readable, especially the Iterator declaration.

Local Type Inference is a great new addition to Java. If you want to read more about it, checkout:
The OpenJDK FAQ: <https://openjdk.java.net/projects/amber/guides/lvti-faq>
The OpenJDK var Style Guide: <https://openjdk.java.net/projects/amber/guides/lvti-style-guide>

_ _
**HttpClient (Java 11)**

The new HttpClient implements HTTP/2 and WebSocket natively to Java. This HTTP API supports both a synchronous and asynchronous approach. If you need a quick and easy to use HttpClient, you no longer need to bring in a new dependency to your project. Below is an example of making a POST request to an api.

```java
public CompletableFuture<String> makeRequest(MyPayload payload) {
    var client = HttpClient.newBuilder()
            .version(Version.HTTP_2)
            .followRedirects(Redirect.NORMAL)
            .connectTimeout(Duration.ofSeconds(20))
            .build();

    var request = HttpRequest.newBuilder()
            .uri(URI.create("https://my.cool.api.com/"))
            .timeout(Duration.ofMinutes(2))
            .header("Content-Type", "application/json")
            .POST(BodyPublishers.ofString(payload.toJsonString()))
            .setHeader("User-Agent", "TPH is awesome!")
            .build();
    
    return client.sendAsync(request, BodyHandlers.ofString())
            .thenApply(HttpResponse::body)
            .exceptionally(e -> e.getMessage());
}

public void listData() {
    var responseFuture = makeRequest(generatePayload());
    responseFuture.theAccept(System.out::println);
}
```

To read more about new Java HTTP Client check out this primer from the developers. <https://openjdk.java.net/groups/net/httpclient/intro.html>

## Switch Expressions (Java 14)

You might be sat there thinking switch expressions have been in Java forever, but that is where you're wrong! Java has had switch ***statements*** but only in Java 14 did it get switch expressions. As the name might suggest, it extends the switch keyword so that it can be used as an expression.

Switch expressions differ from switch statements in a number of ways.

1. Switch expressions are exhaustive. This means that a switch expression must evaluate all possible values with its switch labels. If you're using a switch expression on an Enum, it means all possible enum values must be covered. If you're using it on something else, it generally means you need a 'default' label.
2. Switch expressions introduce the `yield` statement. You can think of `yield` like the `return` statement, except it is specific to switch expressions 'yielding' a value. You'll see more on this in the examples below.
3. Switch expressions can use arrow labels. Arrow labels are a short hand for switch cases that only require a single line of code. You'll see more of this in the examples below.

Let's take a look at a simple example of a switch statement, and how we can convert it to a switch expression.

```java
public enum Day { SUNDAY, MONDAY, TUESDAY,
    WEDNESDAY, THURSDAY, FRIDAY, SATURDAY; }

printLettersInDay(Day.WEDNESDAY);

// ...

public void printLettersInDay(Day day) {
    int numLetters = 0;
    switch (day) {
    case MONDAY:
    case FRIDAY:
    case SUNDAY:
      numLetters = 6;
      break;
    case TUESDAY:
      numLetters = 7;
      break;
    case THURSDAY:
    case SATURDAY:
      numLetters = 8;
      break;
    case WEDNESDAY:
      numLetters = 9;
      break;
    default:
      throw new IllegalStateException("Invalid day: " + day);
    }
    System.out.println(numLetters);
}
```

The above code is an example of a standard switch statement. We have a `Day` enum that represents the days of the week. Our method takes a Day as a parameter and prints out the number of letters in that day.

Let's make use of a switch expression with the `yield` statement to clean this up a bit.

```java
public void printLettersInDay(Day day) {
    System.out.println(
    switch (day) {
      case MONDAY, FRIDAY, SUNDAY:
                yield 6;
      case TUESDAY:
                yield 7;
      case THURSDAY, SATURDAY:
                yield 8;
      case WEDNESDAY:
                yield 9;
      default:
                throw new IllegalStateException("Invalid day: " + day);
    }
  );
}
```

Much like our old switch statement, we use the colon style and yield our value to the println method. This is a nice step forward but we can do better! Let's modify this design to use the new arrow label and see what it looks like.
```java
public void printLettersInDay(Day day) {
    System.out.println(
    switch (day) {
      case MONDAY, FRIDAY, SUNDAY -> 6;
      case TUESDAY                -> 7;
      case THURSDAY, SATURDAY     -> 8;
      case WEDNESDAY              -> 9;
      default -> throw new IllegalStateException("Invalid day: " + day);
    }
  );
}
```

Note that in both of these last examples, the default statement is not required since this example exhaustively covers the `Day` enum. If you remove it your code will work just fine!

_ _
**Text Blocks (Java 15)**

Text blocks bring multiline strings to Java! Two common cases where you would want multiline strings are if you are embedding SQL queries into your code, or making use of some HTML. Below are two very simple examples of how text blocks change how we use multi line strings.

```java
String html = "<html>\n" +
              "    <body>\n" +
              "        <p>Hello, TPH</p>\n" +
              "    </body>\n" +
              "</html>\n";
```

```java
String html = """
              <html>
                  <body>
                      <p>Hello, TPH</p>
                  </body>
              </html>
              """;
```

```java
String query = "SELECT \"user_id\", \"username\" FROM \"users\"\n" +
               "WHERE \"server_name\" = 'The Programmers Hangout'\n" +
               "ORDER BY \"username\";\n";
```

```java
String query = """
               SELECT "user_id", "username" FROM "users"
               WHERE "server_name" = 'The Programmers Hangout'
               ORDER BY "username";
               """;
```

Checkout this Textblock guide for more info! <https://cr.openjdk.java.net/~jlaskey/Strings/TextBlocksGuide_v9.html>

## Records (Java 16)

Records are a new language feature of Java that allow developers to easily create immutable data classes. Records let you define your member variables and will automatically create getter methods for them. Records will also automatically implement `equals`, `hashcode`, and `toString`. Records are implicitly final, you cannot have mutable records.

Below is an example of an immutable data class.

```java
public class Dog {
    private final String name;
    private final int age;
    private final Breed breed;

    public Dog(String name, int age, Breed breed) {
        this.name = name;
        this.age = age
        this.breed = breed;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public Breed getBreed() {
        return breed;
    }

    public boolean equals(Object o) {
        if (o instanceof Dog) {
            Dog d = (Dog) o;
            if (d.getName().equals(this.name) &&
                    d.getAge().equals(this.age) &&
                    d.getBreed().equals(this.breed)) {
                return true;
            }
        }
        return false;
    }
}
```

Let's see how records make this easier.

```java
public record Dog (String name, int age, Breed breed) {}

// To use our Dog record we can do something like this
Dog d = new Dog("Dave", 5, Breed.ALSATIAN);
System.out.println(d.name());
System.out.println(d.age());
System.out.println(d.breed());
```

Pay close attention to the method calls for the getters of this record. Instead of `getName()` you call `name().`

Another thing that should be made clear about records is that their intention, despite the look, is not for the Java language developers to start a war on boilerplate code. Their intention is to focus developers into modelling immutable data.

## Pattern Matching instanceof (Java 16)

'Test and extract' is a common problem that is written over and over again in Java. In some way, the majority of programs will ending up some piece of code that tests if an expression has a certain type or structure and extract some component of this if the test passes. One place you may be most familiar with this kind of logic is the `equals` method which typically follows these steps:

1. Pass in an `Object`
2. Check if the Object is of the same type as the calling object
3. Cast our input to the type
4. Perform some additional checks on the object to determine its equality.

Pattern matching is one solution to reduce the clutter of code that we may write in such methods. Put simply, pattern matching is the process of taking a predicate that tests for a match and extracting that match into a variable. Let's take a look at an example.

```java
public boolean equals(Object o) {
    if (o instanceof Dog) {
        Dog d = (Dog) o;
        return d.name.equals(this.name) && d.age == this.age;
    } else {
        return false;
    }
}
```

Below we will introduce pattern matching with the `instanceof` keyword.

```java
public boolean equals(Object o) {
    if (o instanceof Dog d) {
        return d.name.equals(this.name) && d.age == this.age;
    } else {
        return false;
    }
}
```

Notice the rather subtle difference in those snippets. In the first, we explicitly create a new `Dog` object called `d` and cast our input `Object` `o` to a `Dog`. With pattern matching, we no longer need to write this cast. The new `d` variable is now scoped to the block it is created in. It can even be used within the same conditional block as long as the variable is 'well-defined'. Here is another example.

```java
public void test(Object myObj) {
    if (myObj instanceof String s && s.length() > 4) {
        System.out.println("A string longer than 4 characters!");
    }
}
```

If we take the above example and replace the `&&` into a `||` we'll get a compilation error. This is due to the short-circuiting behaviour of the `&&` operator. If we use an OR operator, then `s` may not be defined if the `instanceof` match fails.

## Sealed Classes (Java 17)

Sealed classes are a concept that allow developers to control which classes can extend or implement a super class or interface.

Let's dive into an example. Say we want to create an abstract `Shape` class. We can declare that we want to limit what can extend `Shape` to our `Square`, `Triangle`, and `Circle` classes.

```java
public abstract sealed class Shape permits Square, Triangle, Circle {
}
```

Okay, so what benefit does this give us?

There are sometimes cases where instead of needing a fixed number of values (using an enum), we want a fixed number of *types* of values. This is where sealed classes start to provide us some benefit. Now that we've declared `Animal` has a limited set of subtypes, we can start to do some interesting things with the new (and upcoming) pattern matching features of java.

The pattern matching we previously talked about with `instanceof` is coming to switch cases and expressions. This is a preview feature of Java 17 right now but here's an example what you can do. 

```java
public static Shape rotate(Shape shape, double angle) {
    return switch (shape) {
        case Square s -> s.rotate(angle);
        case Triangle t -> t.rotate(angle);
        case Circle c -> c;
    }
}
```
Because we've used a sealed class to define an exhaustive list of classes that can extend our `Shape` class, the compile can verify that our switch expression is also exhaustive. We have no need for a default case here, and we can return different things depending on the class provided. In this example, a Circle doesn't need to rotate. Previously this kind of thing would have been achieved with an if-else block, but it isn't nearly as safe. A developer could easily forget a class.


## Jigsaw (Java 9)

Project Jigsaw has the primary goal of making the JDK more modular and bring in the ability to generate custom JRE's to distribute alongside your application. 

Imagine that you make a command-line calculator. It uses a `Scanner` for reading and parsing input. It uses `System.out.println` to pass information back to the user. And it uses the `Math` class for some of the more complex maths operations. We're not really using much more from the java language, yet our users would need the entire JRE in order to run our application. That's around 150MB.

Project Jigsaw resolves this problem by allowing us to define the modules of the Java language that we use in our program. We can then use tools like `jlink` and `jpackage` to build a custom Java Runtime that only includes the necessary code to run our application. Now, perhaps our application distribution is only 20MB. 

So how do we make use of Project Jigsaws modules?

Java projects can now include a file called `module-info.java` that describes how it's modules behave. This includes the module name, the module's dependencies, the packages it makes available to other modules, the services it offers, the services it consumes, and the modules it will allow reflective access to.

There is a lot that can go into setting up a `module-info.java` file. A comprehensive guide on how to do this can be found here. <http://tutorials.jenkov.com/java/modules.html>

For more info on packaging apps, check out this overview. <https://docs.oracle.com/en/java/javase/17/jpackage/packaging-overview.html>

## JavaFX

JavaFX is the modern way to deal with GUI development in Java. As of Java 11 it is no longer part of the JDK. JavaFX has now become the project OpenJFX run by Gluon. Check it out here <https://openjfx.io/>
It is still free to use, and Gluon produce a great visual GUI builder called Scene Builder. <https://gluonhq.com/products/scene-builder/>

## More resources
OpenJDK has several projects that aim to bring improvements to the Java language, some of which are mentioned in this spotlight. If you'd like to read more about the projects and follow the progress checkout the links below!
Project Amber: <https://openjdk.java.net/projects/amber/>
Project Panama: <https://openjdk.java.net/projects/panama/>
Project Valhalla: <https://openjdk.java.net/projects/valhalla/>
Project Loom: <https://openjdk.java.net/projects/loom/>
