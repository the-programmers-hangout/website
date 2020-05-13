---
authors:
  - "AstronautEVA#0331"
title: "Classes"
created_at: 2019/10/20
---

## What is a class?

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
  public String name;
  public int age;
  public float weight;
}
```

Notice that we have only declared these variables, we did **not** initialize them (set them equal to a value).

Okay so we have added attributes to our animal which is great, but we want our animal to actually be able to _do_ things. Let's pick 2
things we want our animal to do.
Our animal should

- move
- sleep

These are verbs which means they likely need to be implemented as methods.

```java
public class Animal {
  public String name;
  public int age;
  public float weight;

  public void move() {
    System.out.println("The animal moves.");
  }

  public void sleep() {
    System.out.println("The animal sleeps.");
  }
}
```

## Class vs Object

Remember this is only the description of what an animal is, not a specific animal. A specific animal such as Max is one instance of a class and is called an object. It has values assigned to its attributes like the name is Max and the age is 5. You can call methods on the object such as move or sleep. And there can be an infinite number of objects constructed from a class. To create objects from your class, you need something called a constructor.

The format of a constructor looks like this:

```java
public ClassName() {
}
```

It should be public, have no return type, and the name of the method should be the same name as the class.

Since the constructor is called when you want to create an object of a class, and you will likely want that object to have specific values for its attributes (such as making the name be "Max"), you need the constructor to initialize the variables of the object. One way to do this is by giving the constructor parameters that you will use to pass in the values you want for your object.
Modifying our constructor template from above to do this might look like:

```java
public ClassName(String myObjectsName) {
  name = myObjectsName;
}
```

Now that you've got a general idea of what a constructor should look like, we will apply this to our Animal class.

```java
public class Animal {
  public String name;
  public int age;
  public float weight;

  // here is the constructor
  public Animal(String name, int age, float weight) {
    /*
      Since we used the same name for the parameters as we did the class variables, we have
      to use the word "this" to differentiate between which variable we are talking about.
      "this" refers to the Animal class, so stating "this.name" refers to the name variable
      declared at the top of the Animal class.
      Stating "name" without "this" refers to the parameter variable called name.
    */
    this.name = name; // set the class variable called name equal to the value of the parameter called name
    this.age = age;
    this.weight = weight;
  }

  public void move() {
    System.out.println("The animal moves.");
  }

  public void sleep() {
    System.out.println("The animal sleeps.");
  }
}
```

Our class is finally ready to use! Let's add in a main method to our class so we can create some objects and see what happens.

```java
public class Animal {
  public String name;
  public int age;
  public float weight;

  public Animal(String name, int age, float weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  public void move() {
    System.out.println("The animal moves.");
  }

  public void sleep() {
    System.out.println("The animal sleeps.");
  }

  public static void main(String[] args){
    // create a variable of type Animal by calling the constructor of the Animal class
    Animal myAnimal = new Animal("Max", 5, 10.3);

    // access the variables of the object you just created
    myAnimal.name; // returns "Max"
    myAnimal.age; // returns 5
    myAnimal.weight; // returns 10.3

    // change a variable of the object
    myAnimal.name = "JoJo";
    myAnimal.name; // returns "JoJo"

    // call the functions of the object you just created
    myAnimal.move(); // returns "The animal moves."
    myAnimal.sleep(); // returns "The animal sleeps."

    // create as many Animal objects as you want
    Animal foo = new Animal("Polly", 34, 1.4);
    Animal bar = new Animal("Sophie", 8, 89.7);

    foo.name; // returns "Polly"
    bar.name; // returns "Sophie"
  }
}
```
