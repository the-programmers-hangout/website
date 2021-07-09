---
authors:
  - "Stone_Red#2890"
created_at: 2021/08/07
title: C#
external_resources:
  - text: Coding Conventions
    href: "https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions"
---

Coding conventions serve the following purposes:

- They create a consistent look to the code, so that readers can focus on content, not layout.
- They enable readers to understand the code more quickly by making assumptions based on previous experience.
- They facilitate copying, changing, and maintaining the code.
- They demonstrate C# best practices.

## Naming conventions

### Pascal case

Use pascal casing ("PascalCasing") when naming a class, record, interface or struct.

```cs
public class MessageService
{
}
```

```cs
public record Temperature(double HighTemp, double LowTemp);
```

```cs
public interface ISampleInterface
{
}
```

```cs
public struct Coordinate
{
}
```

### Camel case

Use camel casing ("camelCasing") when naming private or internal fields.

```cs
public class DataService
{
    private IWorkerQueue _workerQueue;
}
```

When writing method parameters or local varibles, use camel casing.

```cs
public void SampleMethod(string name, int age)
{
    int index = 0;
}
```

### Additional naming conventions

Do not use Hungarian notation or any other type identification in identifiers.

```cs
//Do:
int age;
string name;

//Don't:
int iAge;
string strName;
```

Use meaningful names for variables.

```cs
//Do:
string factoryName;
int age;

//Don't:
string str;
int i;
```

Do use prefix Any, Is, Have or similar keywords for boolean identifier.

```cs
public bool IsAvailable()
{
}
```

## Layout conventions

- Use the default Code Editor settings (smart indenting, four-character indents, tabs saved as spaces). For more information, see Options, Text Editor, C#, Formatting.
- Write only one statement per line.
- Write only one declaration per line.
- If continuation lines are not indented automatically, indent them one tab stop (four spaces).
- Add at least one blank line between method definitions and property definitions.
- Use parentheses to make clauses in an expression apparent, as shown in the following code.

```cs
//Do:
string password = Console.ReadLine();
if(password == "1234")
{
    Console.WriteLine("Correct password!");
}

//Don't:
string password = Console.ReadLine();
if(password == "1234") { Console.WriteLine("Correct password!"); }

if(password == "4321") 
{ 
Console.WriteLine("Correct password!"); 
}
```

## Commenting conventions

- Place the comment on a separate line, not at the end of a line of code.
- Begin comment text with an uppercase letter.
- End comment text with a period.
- Insert one space between the comment delimiter (//) and the comment text, as shown in the following example

```cs
//Do:

// Calculates something.
public int Calculate()
{
}

//Don't:

public int Calculate() //Calculates something
{
}
```
