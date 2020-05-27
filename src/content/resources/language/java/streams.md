---
authors:
  - "KaeseKuchenDEV#6322"
title: "An introduction to Streams"
created_at: 2019/12/15
external_resources:
  - text: Java8 Stream Tutorial
    href: https://winterbe.com/posts/2014/07/31/java8-stream-tutorial-examples/
---

Basically everyone, who spent a few hours coding some Java came across a situation like this:

```java
int[] intArray = {1,2,3,4,5};

for(int i = 0; i < intArray.length; i++) {
  System.out.println(intArray[i]);
}
```

So, you need to print every element in an array, a list or any other data structure. But there has to be a nicer way to do this, especially with less code. Since Java 8 we are able to use so called "Streams" in Java. In particular the same result as from the code above can be achieved with this code:

```java
int[] intArray = {1,2,3,4,5};

Arrays.stream(intArray).forEach(n -> System.out.println(n));
```

You just made one line out of three. But how does this work? `int[] intArray = {1,2,3,4,5};` does just declare and initialize a new array of integers. This stays the same as before, because you can use the `Arrays.stream()` method for every Array, [as it works with generic Arrays](https://www.mkyong.com/java8/java-how-to-convert-array-to-stream/). This method creates a [Stream Object](https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html), that has several methods to perform operations on an array.

## Sorting

Now maybe you have a list instead of an array and you also want the list to get sorted before you print it. Without Streams you would first have to sort the list and then iterate through it. Way too many lines! Using Streams you can simply do:

```java
ArrayList<Integer> intList = new ArrayList<>();
intList.add(4);
intList.add(8);
intList.add(3);
intList.add(6);

intList.stream().sorted().forEach(n -> System.out.print(n + ", "));
```

At the end, you have again only one line, for sorting and printing every element in a list. Due to the fact that Streams mostly use Method Chaining, you could perform a bunch of operations.

## Filtering

Now you are able to print out every element of an array, a list, a stack, etc. sorted as well as unsorted. The last essential operation is, how to filter your array/list. One often has to only get specific elements of an array. Using Streams you could do it like this:

```java
String[] stringArray = {"The", "programmers", "Hangout"};

Arrays.stream(stringArray).filter(s -> Character.isUpperCase(s.charAt(0))).forEach(n -> System.out.println(n));
```

This prints:
`The`
`Hangout`
Since those two strings of the array begin with an uppercase letter.
Basically many methods of Stream use [lambda expressions](https://www.geeksforgeeks.org/lambda-expressions-java-8/). Using these in the `filter()` method, you can create very specific filters for your array, which can be compared to database operations in for Example SQL.

These are only a few examples on how to use Streams in Java, but those can already be very powerful and can make your code look way better and shorter. If you want to dive deeper into Streams, I would recommend you: https://winterbe.com/posts/2014/07/31/java8-stream-tutorial-examples/, as it deals with most of the possibilities of Streams.
