---
authors:
  - "AstronautEVA#0331"
title: "What is a class?"
created_at: 2019/10/20
---

# What is a class?

Oftentimes in programs, it is necessary to represent objects from the real world as computer data.
For example, if someone is writing a program that simulates a zoo, they will need to create some animals.
A class is a way to write the blueprint of whatever you are trying to represent; in our case it would be a blueprint of an animal.

Let us investigate what an animal class might look like.
First we will declare attributes that an animal would have. There are many attributes we could list, but let's choose 3.
The animal will have a

- name (because zoos name their animals)
- age
- weight

All of these words are nouns which is a hint that they should be implemented as variables.

```java
public class Animal {
  private String name;
  private int age;
  private float weight;
}
```

Notice that we have only declared these variables, we did **not** initialize them (set them equal to a value).
Remember this is only the blueprint (the recipe) of an animal, not a specific animal. Later we will create specific animals from this blueprint.

Okay so we have added attributes to our animal which is great, but we want our animal to actually be able to _do_ things. Let's pick 2
things we want our animal to do.
Our animal should

- move
- sleep

These are verbs which means they will be implemented as methods.

```java
public class Animal {
  private String name;
  private int age;
  private float weight;

  public void move() {
    System.out.println("The animal moves.");
  }

  public void sleep() {
    System.out.println("The animal sleeps.");
  }
}
```

Now you can see what an animal will be like in our program. Each animal will have 3 attributes and 2 actions. There is one more thing
that must be discussed in order to understand how classes work. Every class has to have a constructor.

## What is a constructor?

A constructor is a method that enables a class to create actual objects. If we think of the class as the blueprint, the constructor is like the person using the blueprint to make the item.

The constructor will always have the same name as the class and there will never be a return type.

If you do not write a constructor for your class, it will be given one implicitely and will look like:

```java
public ClassName() {
  super();
}
```

The call to `super()` is calling the parameterless constructor of the parent class. If the parent class does not have a parameterless constructor, it will produce an error.
This constructor will give all of your class variables their default zero value (numbers are 0, boolean is false, strings and other objects are null). To instead assign your own values to them, you have to create a constructor that accepts parameters.

```java
public ClassName(int someVar) {
  this.someVar = someVar;
}
```

Every constructor you write will call `super()` as the very first line it executes unless you call a different form of super such as `super(var1, var2)`.
It is important to note that when you explicitly write a constructor in your class, the class will no longer create the parameterless constructor for you. So if you create a class with 1 constructor that accepts parameters like the one above, and then a child class implicitely calls `super()`, an error will occur. You would either need to supply a parameterless constructor in your parent class or make the child explicitly call the constructor with parameters.

```java
public ChildClassConstructor(int someVar) {
  super(someVar);
}
```

Applying this to our Animal class, lets create 2 constructors.

1. a parameterless constructor that will implicitly call the parent constructor (via `super()`) and assign our variables to their zero value
2. a constructor that accepts parameters, implicitely calls the parent constructor (via `super()`), and assign our variables with the parameter values

We will also create a method for each variable that, when called, returns the value of that variable. These are called "getters".

```java
public class Animal {
  private String name;
  private int age;
  private float weight;

  // constructor #1
  public Animal() {}

  // constructor #2
  public Animal(String name, int age, float weight){
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  // 3 getters
  public String getName() {
    return name;
  }

  public int getAge() {
    return age;
  }

  public float getWeight() {
    return weight;
  }


  public void move() {
    System.out.println("The animal moves.");
  }

  public void sleep() {
    System.out.println("The animal sleeps.");
  }
}
```

And we are finished!!
Let's create Animal objects using the different constructors to see what happens.

```java
Animal defaultAnimal = new Animal();
defaultAnimal.getName(); // returns null
defaultAnimal.getAge(); // returns 0
defaultAnimal.getWeight(); // returns 0.0

Animal customAnimal = new Animal("Rosie", 4, 20.6);
customAnimal.getName(); // returns "Rosie"
customAnimal.getAge(); // returns 4
customAnimal.getWeight(); // returns 20.6
```
