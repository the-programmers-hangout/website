---
authors:
  - "Stone_Red#0001"
created_at: 2023/09/16
title: Access Modifiers
external_resources:
  - text: Access Modifiers
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/access-modifiers"
  - text: Accessibility Levels
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/accessibility-levels"
---

## Availible access modifiers

- **public:** The type or member can be accessed by any other code in the same assembly or another assembly that references it.
- **private:** The type or member can be accessed only by code in the same class or struct.
- **protected:** The type or member can be accessed only by code in the same class, or in a class that is derived from that class.
- **internal:** The type or member can be accessed by any code in the same assembly, but not from another assembly.
- **protected internal:** The type or member can be accessed by any code in the assembly in which it's declared, or from within a derived class in another assembly.
- **private protected:** The type or member can be accessed only within its declaring assembly, by code in the same class or in a type that is derived from that class.
- **file** The declared type is only visible in the current source file. File scoped types are generally used for source generators.

## Why not use _public_ for everything?

Access modifiers control where members can be accessed and seen.
If you were to make everything _public_, anyone could access the member without restrictions and possibly change variables to undesired values or call methods that should only be called on certain events.
