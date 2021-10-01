---
authors:
  - "Stone_Red#2890"
created_at: 2021/08/07
title: C#
external_resources:
  - text: Access Modifiers
    href: "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/access-modifiers"
---

## Availible access modifiers

- **public:** The type or member can be accessed by any other code in the same assembly or another assembly that references it.
- **private:** The type or member can be accessed only by code in the same class or struct.
- **protected:** The type or member can be accessed only by code in the same class, or in a class that is derived from that class.
- **internal:** The type or member can be accessed by any code in the same assembly, but not from another assembly.
- **protected internal:** The type or member can be accessed by any code in the assembly in which it's declared, or from within a derived class in another assembly.
- **private protected:** The type or member can be accessed only within its declaring assembly, by code in the same class or in a type that is derived from that class.

## Why not use _public_ for everything?

Access modifiers control where members can be accessed and seen.
If you were to make everything _public_, anyone could access the member without restrictions and possibly change variables to undesired values or call methods that should only be called on certain events.
