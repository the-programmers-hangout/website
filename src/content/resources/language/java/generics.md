---
authors:
  - "supergrecko#3434"
created_at: "2019/10/04"
title: Generics
---

## What are generics?

Generics is a concept in programming which allows passing a type argument to a class or a method.

Java's standard library makes heavy use of generics to reduce repetition and to provide flexibility.

Here's an example where Java uses generics.

```java
class Main {
  public static void main(String[] args) {
    List<String> stringList = new ArrayList<String>();
  }
}
```

In this example we are passing the String type to the List class. We can now say we have "A List of Strings".

## Why should we use generics?

By using generics we can provide type safety while having reusable code.

Lets say we want to create coffee capsule, We want one holder for Espresso capsules and one for Cappuccino capsules. This is one way we can implement this coffee capsule holder.

For this example we will use these classes to represent our coffee capsules.

```java
class EspressoCapsule {}
class CappuccinoCapsule {}
```

```java
import java.util.ArrayList;

// An espresso capsule holder
class EspressoHolder {
  // This is a generic. ArrayList of EspressoCapsules
  private ArrayList<EspressoCapsule> capsules = new ArrayList<EspressoCapsule>();

  public EspressoHolder(EspressoCapsule capsule) {
    this.capsules.add(capsule);
  }
}

// A cappuccino capsule holder
class CappuccinoHolder {
  // This is a generic. ArrayList of CappuccinoCapsules
  private ArrayList<CappuccinoCapsule> capsules = new ArrayList<CappuccinoCapsule>();

  public CappuccinoHolder(CappuccinoCapsule capsule) {
    this.capsules.add(capsule);
  }
}
```

We can now use these capsule holders like this:

```java
class Main {
  public static void main(String[] args) {
    EspressoHolder   espresso = new EspressoHolder(new EspressoCapsule());
    CappuccinoHolder cappuccino = new CappuccinoHolder(new CappuccinoCapsule());
  }
}
```

The only concern here is that we're repeating a lot of code. Almost the entire `EspressoHolder` implementation is copied into the `CappuccinoHolder` implementation.

Next up we'll take a look at an implementation which uses generics to avoid this repetitive behavior.

## Optimizing our Coffee brewer with Generics

What if we could have a single Holder class for both types of capsules? Let's implement that by using generics.

Let's start off by removing both the `CappuccinoHolder` and the `EspressoHolder` classes. We're now left with this:

```
import java.util.ArrayList;

class EspressoCapsule {}
class CappuccinoCapsule {}
```

We can now implement our brand new `Holder` class. We'll start of by making the class accept a generic type.

```java
class Holder<T> {

}
```

This creates a new data type inside the Holder class named `T`.

We now expect users to create a `Holder` instance via this syntax. String in this example can be replaced with any type.

```java
Holder<String> holder = new Holder<String>();
```

In this scenario, `T` inside the Holder instance will be the String type.

Let's add our ArrayList again.

```java
class Holder<T> {
  private ArrayList<T> capsules = new ArrayList<T>();
}
```

Notice how we're passing T further down into the ArrayList generic? That means the ArrayList generic type will also change based on the Holder generic type.

We can now finish up our holder implementation like this.

```java
class Holder<T> {
  private ArrayList<T> capsules = new ArrayList<T>();

  public Holder(T capsule) {
    this.capsules.add(capsule);
  }
}
```

Because T is a qualified type inside our Holder class we can also make the constructor accept the T type as an argument.

This is our new way of using the Holder class.

```java
class Main {
  public static void main(String[] args) {
    Holder<CappuccinoCapsule> cappuccino = new Holder<CappuccinoCapsule>(new CappuccinoCapsule());
    Holder<EspressoCapsule>   espresso = new Holder<EspressoCapsule>(new EspressoCapsule());
  }
}
```

We just reduces the amount code required to hold our two capsule types in by 50%. The cool thing is that we're now able to create as many capsule types as we want while being able to stick to our Holder implementation. We could have 20 different capsule types, our `Holder` class would be able to take care of all of them.
