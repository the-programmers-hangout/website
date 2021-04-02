## What is Julia?
Julia is a high-level dynamic programming language for numerical computing. It is free and open-source: under the MIT license.
Although Julia is still in its youth (the current release is v1.2), Julia provides a lot of support for mathematical analysis and data science.

## How hard is Julia to learn?
Julia is a fairly complex language but has some very simple behaviors which are easy to pick up. It is mainly used for data science and mathematical analysis, so those complexities come with it. You must understand some mathematical principles to use the language well. Julia uses certain expressions differently from other languages as well making it a bit harder to pick up; however, it makes sense. For example, string concatenation is done with \*, and not +. Julia is heavily documented and low-level, so learning the standard syntax is easy to do by following the tutorial along with other resources.

## What's so great about Julia?

- Multiple dispatch: providing ability to define function behavior across many combinations of argument types
- Dynamic type system: types for documentation, optimization, and dispatch
- Good performance, approaching that of statically-compiled languages like C
- Built-in package manager
- Lisp-like macros and other meta-programming facilities
- Call Python functions: use the PyCall package
- Call C functions directly: no wrappers or special APIs
- Powerful shell-like capabilities for managing other processes
- Designed for parallelism and distributed computation
- Coroutines: lightweight "green" threading
- User-defined types are just as fast and compact as built-ins
- Automatic generation of efficient, specialized code for different argument types
- Elegant and extensible conversions and promotions for numeric and other types
- Efficient support for Unicode, including but not limited to UTF-8

## What platforms can Julia run on?
Julia can run on most popular platforms such as MacOSX, most Linux builds, Windows, and others. This is due to it compiling to a native binary. However, it does not have broad support for front-end development, but there is a library for Qt bindings.

## CLI
The Julia download comes with a CLI environment. With the CLI you can try out Julia functions and expressions in the command line. (Binary languages rarely have a CLI, so this is pretty cool)

## Code Examples:
Hello world:

```julia
println("Hello world!")
```

FizzBuzz:

```julia
fb(x) = "Fizz" ^ (x % 3 == 0) * "Buzz" ^ (x % 5 == 0) * dec(x) ^ (x % 3 != 0 && x % 5 != 0)
println.(map(fb, 1:100))
```

This is just a small list of collection tools Julia has-

```julia
sum(1:100) # sum of 1-100
filter(isOdd, 1:10) # 1,3,5,7,9
intersect(1:10, 5:15) # 5,6,7,8,9,10
mean([1, 3, 5, 7]) # 4
middle([1, 3, 5]) # 3
```

## Syntax and Operation Features:

Matrices in Julia are easy and fun!

```julia
matrix = [1 2 3; 4 5 6] #you must have a space between elements, and a semicolon between the rows
#=
Creates a 2x3 matrix that looks like this:
1 2 3
4 5 6
=#
```

Useful matrix operations:  
`hcat()`- horizontal concatenation, it stacks 2 or more matrices horizontally.

```julia
matrix = [1 2 3; 4 5 6]
hcat(matrix, [5;5]) #remember our matrix is 2x3
#= so now this is a 2x4 matrix.
2 -4 -3 5
4 -2  1 5
You'll get an error if the matrices don't have the same number of rows. =#
```

`vcat()`- vertical concatenation, this operation stacks 2 or more matrices on top of each other.

```julia
matrix = [1 2 3; 4 5 6] #2x3 matrix
vcat(matrix, [0, 0, 0])
#= 3x3 matrix
1 2 3
4 5 6
0 0 0
Cool, right? But you'll get an error if the two matrices don't have the same number of columns. =#
```

A basic `if` statement:

```julia
if 5>=4
    print("Hello world")
end
```

The simplest if statements in Julia are: `if false end`, and `if true end`.
Julia isn't whitespace sensitive, so sometimes the meaning isn't changed if you write stuff on one line.

While loops are pretty simple in Julia as well:

```julia
while false
    print("There's nothing here.")
end
```

Ranges- There is something in Julia called a range. Ranges are written in the form `start:end`- by default, the range increments by 1. Both the start and the end of the range are inclusive (for example, `1:5` is from 1 to 5 inclusively. To explain it in interval notation, it's [1,5].)

```julia
for x=1:5
    println(x)
end
```

There is a more complex form of range, written as `start:step:end`. The `end` value of the range does not have to be included. It is only included if incrementing by `step` lands on it- for example,

```julia
for x=0:4:12 #12 is included because 4 is a multiple of 12
    println(x) #prints 0, 4, 8, 12
end
```

However-

```julia
for x=0:4:11
    println(x) #only prints 0, 4, 8, for obvious reasons
end
```

## Resources:
Julia documentation: <https://docs.julialang.org>

Try it out online! <https://juliabox.com>, and <https://www.tutorialspoint.com/execute_julia_online.php>

More places to learn Julia:  
<https://julialang.org/learning/> (large collection of resources for learning Julia, from Julia)  
<https://learnxinyminutes.com/docs/julia/>  
<https://juliabyexample.helpmanual.io/>

Data Science in Julia:  
<https://youtu.be/SLE0vz85Rqo> (an intro to Julia for data science)  
<https://www.analyticsvidhya.com/blog/2017/10/comprehensive-tutorial-learn-data-science-julia-from-scratch/> (a walkthrough that takes you through all of the steps!)
