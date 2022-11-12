---
authors:
  - "Stone_Red#0001"
  - "Draxis#1559"
  - "HueByte#0001"
created_at: "2022/06/08"
title: What is Dot net?
---

## What is .NET?

> .NET is a platform for building stuff

\- Scott Hanselman

.NET is a developer platform by Microsoft that was made for Windows, but later expanded to other operating systems with .NET Core. It’s free, cross-platform, and open-source starting with .NET Core 2.1. .NET is part of the .NET Foundation. The .NET Foundation is an independent, non-profit organization that supports the open source ecosystem around the .NET platform.

The current version of the framework is simply named .NET 6.
.NET can be used to build apps for the following platforms:

- Desktop
- Web
- Cloud
- Mobile
- Game Development
- Internet of Things
- Machine Learning
- Microservices

### One .NET vision

The confusing part for most people is that there were a lot of different ways to run .NET for a while.

### .NET Framework

The .NET Framework is the one that you probably have heard of before. It’s a Windows-only version of .NET.

### .NET Core

.NET Core is the successor of the .NET Framework. It’s the new cross-platform and open source platform of .NET.

### Mono

Mono is basically an open source reimplementation of .NET that ran originally on Linux.

### Xamarin

Xamarin is an open source platform from Microsoft for building native iOS and Andoid apps with C# and .NET.

### .NET 5+

These are all beeing combined into one single SDK (software development kit) with one BCL (base class library) and a unified toolchain now.

There will be all kinds of cool features with cross-platform UIs and native applications. Microsoft still continues on improving performance as well.

### Platforms

.NET can be used for various types of projects and all major Operating systems, ranging from making your own OS to simple console apps.

The most common uses are (with the method):
**Web:** ASP.NET, Blazor & .NET MAUI
**Console:** Cross platform CLI/TUI projects with various libraries and the power of .NET
**Mobile:** Xamarin, .NET MAUI, AvaloniaUI, ReactiveUI
**Windows:** .NET MAUI, AvaloniaUI, UWP, WPF, Windows Forms, ReactiveUI
**Linux:** .NET MAUI, AvaloniaUI, Mono, ReactiveUI
**macOS:** .NET MAUI, AvaloniaUI, Cocoa, ReactiveUI
**Games:** Unity, MonoGame, Godot, CRYENGINE, Stride, XNA

## Projects

.NET is very organized when it comes to projects in C#, F# and VB.NET. It has .sln (solution) files which contain .csproj, .fsproj or .vbproj files. An example of its usage might be:

For a cli program that can convert files, the sln can be Converter.sln with 2 projects: ConverterCLI.csproj and Converter.csproj. Projects can reference other projects to use classes and namespaces from them.

### The CLR

The Common Language Runtime is the virtual machine component of the Common Language Infrastructure (CLI) and supports many languages, with the most common being C#, F#, PowerShell, and VB.NET :visualbasic:, although there are many others.
[A complete list can be found here.](https://en.wikipedia.org/wiki/List_of_CLI_languages)
The CLR works by using a Just-in-time (JIT) compiler to convert managed (compiled Common Intermediate Language (CIL)) code into machine code.
The CLR has many other features like security, type safety, exception handling, garbage collection and thread management. All code in any CLR language is converted to CIL first which is then run by the CLR.

### The FCL

The .NET Framework Class Library is a bunch of built-in namespaces that can be used in all CLR languages without the need of extra DLLs or packages. It has many features including cryptography, LINQ, Regular Expressions, IO, networking, and many more.

### C#

C# is by far the most commonly used .NET language. It is a general purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.

TPH also has a dedicated language channel for c-sharp

### F#

F# is the functional CLR language and the 2nd most commonly used CLR language.

### VB

Visual Basic is an easy language with a simple syntax for building type-safe, object-oriented apps.

### PowerShell

PowerShell is an object oriented shell and programming language. It can run anything C# and F# can. It is mostly used in automation and configuration. PSCore is the open source implementation of PowerShell

### LINQ

LINQ (Language Integrated Query) is a query language integrated into .NET, used for filtering, processing data or even database queries. Ordinary queries are simply represented as strings without any type safety, but LINQ is fully type safe and provides two ways to write queries.

### LINQ C# Examples:

Method syntax:

```cs
var personsAbove18 = persons.Where(person => person.Age >= 18);
```

Query syntax:

```cs
var personsAbove18 = from person in persons where person.Age >= 18 select person;
```

### NuGet

NuGet is the .NET package manager. A NuGet package is a single zip file with the extension nupkg or nupack. Virtually every CLR language can be made into a NuGet package. It is also made very easy to publish.

## Command Line Tooling

.NET has a very comprehensive set of command line based tooling that is installed with the SDK. You can use these CLI tools to do everything you would ever need to do with a .NET project. Here are a few examples of things that are often done with the CLI tools.

- Template Generation
- Hot Reload
- Build and Run your projects
- Publish your application
- Run your test suite

## Try it out

By far the simplest way to try out .NET is on the following websites.

- [TryDotNet](https://try.dot.net/)
- [SharpLab](https://sharplab.io/)
- [.NET Fiddle](https://dotnetfiddle.net/)

You can also try it on your own PC if you wish. First grab yourself an IDE, the best two are Visual Studio or VSCode, then grab the latest release of the .NET SDK https://dotnet.microsoft.com/download. Once you have both of those, you can either start a new console project in Visual Studio or use the Command Line Tools of .NET to make yourself a project to open in VSCode.
https://dotnet.microsoft.com/en-us/learn/dotnet/hello-world-tutorial/intro

## Resource Dump

Awesome Libs, these are large collections of tools, libraries and services you can use with different aspects of .Net.

- https://github.com/quozd/awesome-dotnet
- https://github.com/AdrienTorris/awesome-blazor
- https://awesomeopensource.com/project/Carlos487/awesome-wpf
- https://github.com/ironcev/awesome-roslyn
- https://github.com/XamSome/awesome-xamarin

**Getting Started Links**

- https://visualstudio.microsoft.com/
- https://dotnet.microsoft.com/en-us/download/dotnet/6.0
- https://code.visualstudio.com/download
- https://code.visualstudio.com/docs/languages/csharp

### Guides

**C#**

- https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/intro-to-csharp/
- https://channel9.msdn.com/Series/CSharp-Fundamentals-for-Absolute-Beginners
- https://youtu.be/BM4CHBmAPh4

**F#**

- https://dotnet.microsoft.com/en-us/languages/fsharp
- https://youtu.be/yGzu0iDuMNQ

**Xamarin**

- https://dotnet.microsoft.com/en-us/learn/xamarin/hello-world-tutorial/intro
- https://youtu.be/JH8ekYJrFHs

**ASP.NET**

- https://docs.microsoft.com/en-us/aspnet/core/getting-started/?view=aspnetcore-6.0&tabs=windows
- https://youtu.be/lE8NdaX97m0

**Blazor**

- https://dotnet.microsoft.com/en-us/learn/aspnet/blazor-tutorial/intro
- https://youtu.be/9BhbGbTsyeE

**LINQ**

- https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/

**Learn nearly everything**

- https://youtu.be/pyN7JTQM7sU
