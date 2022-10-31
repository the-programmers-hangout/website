---
authors:
  - "HueByte#0001"
created_at: 2022/10/31
title: Basic information about .NET and C#
---

## What is C#? 
It's a modern, object-oriented, component-oriented, type-safe language with the support of functional programming techniques.

It's multi-paradigm: *structured, imperative, object-oriented, event-driven, task-driven, functional, generic, reflective, concurrent*

C# has many features to develop robust and durable applications.

- Garbage collections take care of automatically reclaiming occupied memory by unreachable unused objects. 

- Nullable types guard against variables that don't refer to allocated objects.

- Exception handling provides a structured and extensible approach to error detection and recovery.

- Lambda expressions support functional programming techniques,

- Language Integrated Query (LINQ) syntax creates a common pattern for working with data from any source.

- Language support for asynchronous operation provides a syntax for building distributed systems.

- C# has a `unified type system`. All types inherit from a single root `object` type. Values of any type can be stored, transported, and operated upon in a consistent manner.

- C# supports both `value types` and `reference types`. C# allows dynamic allocation of objects and in-line storage of lightweight structures. 

- C# supports generic methods and types, which provide increased type safety and performance.

- C# provides iterators that enable implementers of collection classes to define custom behaviors for client code. 

## .NET architecture
C# programs run on .NET, a virtual execution system called the common language runtime (`CLR`).

 The `CLR` is implementation by Microsoft of the common language infrastructure (`CLI`), an international standard. The CLI is the basis for creating execution and development environments in which languages and libraries work together seamlessly.

Source code written in C# is compiled into an `intermediate language (IL)` which is `byte code` that conforms to the `CLI` specification.
The `IL` code and resources such as bitmaps and string, are stored in an assembly, typically with an extension of `.dll`. An assembly contains a manifest that provides information about the assembly's types, version, and culture.

When the C# program is executed, the assembly is loaded into the `CLR`. The CLR performs a `Just-In-Time` (`JIT`) compilation to convert the `IL` code to native machine instruction. 

The CLR provides other services related to automatic garbage collection, exception handling, and resource management. Code that's executed by the CLR is sometimes referred to as "managed code." 

"Unmanaged code" is compiled into a native machine language that targets a specific platform.

Language interoperability is a key feature of .NET. IL code produced by the C# compiler conforms to the `Common Type Specification` (`CTS`). IL code generated from C# can interact with code that was generated from the .NET version of F#, VB, and C++.

There are more than 20 other CTS-compliant languages. A single assembly may contain multiple modules written in indifferent .NET languages. The types can reference each other as if they were written in the same language. 
The types can reference each other as if they were written in the same language.

In addition to the run time services, .NET also includes extensive libraries like `Base Class Library` (`BCL`). These libraries support many different workloads. They're organized into namespaces that provide a wide variety of useful functionality. The libraries include everything from file input and output to string manipulation to XML parsing, to web application frameworks to Windows Forms controls. The typical C# app uses the .NET class library extensively to handle common "plumbing" chores. 

> Fully defined **Hello World** program
## Hello World
```cs
using System;

class Hello
{
    static void Main()
    {
        Console.WriteLine("Hello, World");
    }
}
```

The program starts with a `using` **directive** that references the `System` namespace. Namespaces contain types and other namespaces and provide hierarchical means of organization.

The `Hello` class has a single member, the method `Main`. `Main` method is declared with the `static` **modifier**. Static methods operate without reference to a particular object. By convention, a static method named `Main` serves as the entry point of a C# program

<br />

> New minimalistic approach (since .NET 6)
```cs
Console.WriteLine("Hello World");
```




