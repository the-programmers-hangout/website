---
authors:
  - "AstronautEVA#0331"
title: "Inheritance"
created_at: 2019/10/24
recommended_reading:
  - java/class
---

## What is Inheritance?

Inheritance is the idea that when two classes have similar implementations, rather than duplicating code for each class one can obtain it from the other. Much like a human child will inherit traits from their parents, a child class will inherit data from
its parent class.
Here is an example of a class hierarchy:

```sh
          Animal
       _____|______
      |            |
     Bird        Reptile
```

Animal is the parent class (also called the superclass), Dog and Bird are both child classes (also called subclasses).
**NOTE:** A child class will only have 1 direct parent (known as single inheritance), not more.
Here is an example of an illegal class hierarchy in Java:

```sh
// THIS IS ILLEGAL
// A child can only have 1 parent.

        Mammal        Fish
          |____________|
                |
              Otter
```

However, there can be many children.

```sh
                Animal
             _____|______
            |            |
          Bird        Reptile
            |        ____|____________
            |       |         |       |
          Eagle   Snake      Frog   Lizard
```

Now Eagle is a child of Bird, and Bird is the parent of Eagle. Bird is also a child of Animal. Similarly Snake, Frog, and Lizard are
children of Reptile, Reptile is each one's parent, and Reptile is also the child of Animal.

To understand what the children inherit, let's define our Animal class.

```java
public class Animal {
  public int age;
}
```

This is a very simple class and only has one field. In our hierarchy we see that Bird is a child of Animal. To define a subclass we
must use the keyword `extends` in the format of `public class ChildClass extends ParentClass`. The `extends` keyword signifies an is-a
relationship. The child class **is a** type of the parent class. A bird **is a** type of animal.

```java
public class Bird extends Animal {
}
```

As you can see we have not placed anything in the Bird class. But this does not mean the Bird class has no fields or methods. Since
Bird inherits from Animal, it has the age field defined in the Animal class. **NOTE:** The subclass will inherit all the _public_ fields and methods of the parent class, but never the constructors.

```java
Animal myAnimal = new Animal();
myAnimal.age //returns 0

Bird myBird = new Bird();
myBird.age //returns 0
```

Let's say we want to keep track of the size of a bird's wingspan. We will implement this as a variable called `wingspan`. Since
only birds have a wingspan and not every animal, we will put this variable in the Bird class.

```java
public class Bird extends Animal {
  public float wingspan;
}
```

If we create an object of type Bird it will have 2 variables. If we create an object of type Animal it will have 1.

```java
Animal myAnimal = new Animal();
myAnimal.age //returns 0
myAnimal.wingspan //produces an error because the variable doesn't exist

Bird myBird = new Bird();
myBird.age //returns 0
myBird.wingspan //returns 0.0
```

Things can get a little bit confusing when trying to understand what you can access from an object. Just remember that you will only be able to access the fields/methods that correspond to the object's _type_. Also, inheritance works in one direction; the children reach up to get the fields/methods from their parent, but the parent cannot reach down to get fields/methods from their children.

```java
Animal myAnimal = new Animal(); //myAnimal only has the age variable and you can access it
Animal myAnimal = new Bird(); //you can only access the age variable since the object is of type Animal. the object does have the wingspan variable due to calling the Bird() constructor, but you cannot access it.

Bird myBird = new Bird(); //myBird has both the age and wingspan variables since you called the Bird() constructor and Bird inherits from Animal. you can access both variables since the object type is Bird.
Bird myBird = new Animal(); //this produces an error because the object type is Bird which means constructor Animal() does not exist (constructors are not inherited).
```

All of the above examples using public variables also works when using public methods.
If we define a method in our superclass:

```java
public class Animal {
  public int age;

  public void sleep() {
    System.out.println("The animal sleeps.");
  }
}
```

It can be used in our subclass.

```java
Animal myAnimal = new Animal();
myAnimal.sleep(); // returns "The animal sleeps."

Bird myBird = new Bird();
myBird.sleep(); // returns "The animal sleeps."
```

But if we define a method in our subclass:

```java
public class Bird extends Animal {
  public float wingspan;

  public void chirp(){
    System.out.println("The bird chirps.");
  }
}
```

It cannot be used in our superclass.

```java
Animal myAnimal = new Animal();
myAnimal.chirp(); // error, the method does not exist

Bird myBird = new Bird();
myBird.chirp(); // returns "The bird chirps."
```

One final thing to note about inheritance is that in Java, every class inherits from a class called Object (java.lang.Object) even when
it is not explicitly stated via `extends`. You can read what your class inherits from java.lang.Object in [the official docs](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html).
