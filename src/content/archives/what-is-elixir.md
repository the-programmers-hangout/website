## What is Elixir?
Elixir is a dynamically typed, functional programming language, with an emphasis on concurrency.
Elixir, despite being a young language, has grown quite rapidly, and has surprisingly fleshed out libraries and documentation.
On a surface level, the language was inspired by ruby in terms of syntax, but the way the language works is quite different.
Elixir leverages concurrency via the "actor model", where many lightweight processes (not OS processes) are run at the same time, and manage diferent aspects of a program.
To do this, Elixir compiles to the BEAM / Erlang VM, which was built with this kind of distributed programming model in mind. Elixir is very similar in features to Erlang.

## What is Erlang?
Erlang is a much older programming language, for which the Erlang VM was designed. Erlang was initially conceived of at Ericsson, for use in telecommunications. They needed to be able to handle many different calls at once, and so needed a programming model that support many different workers, or "actors" running concurrently.
The Erlang VM leverages the actor model to do this.

## How is Elixir different from Erlang?
Elixir has an arguably friendlier syntax, but for the most part is very similar to erlang in terms of language constructs.
One major addition to the language however is metaprogramming. Elixir has a rich and easy to use macro system, and an almost homiconic syntax, somewhat reminiscent of Lisp, but without the parens. Elixir also comes with a somewhat richer standard library. Another big advantage of Elixir is very easy interop with Erlang: calling an Erlang function is as simple as calling an Elixir one, and Erlang users can also use Elixir functions with little pain.

## What is the actor model?
We've mentioned the actor model a few times, but what exactly is it?
The actor model is 2 things

1. Lightweight processes in which code can run
2. Ways to communicate between processes

In elixir / erlang, we can run millions of processes concurrently with no worry at all. Each process has its own memory and resources, and to share these, they must communicate. Communication via processes is done via "message passing" where a process A will send a message to another process B, ready to receive and respond to that message. The only way to share data is by communicating, no 2 processes can hold onto the same piece of memory. This model avoids many problems arising from shared concurrent state (though not all, mind you).

## How do I learn more about Elixir?
There's quite a few resources on Elixir, including a few books https://elixir-lang.org/learning.html#books.

A good place to start if you're interested is the website itself: https://elixir-lang.org/ which includes a lot of information about the language, including a guide to installing and getting started with it, as well as a large tutorial guiding you through most of the language's constructs.

Another tutorial series that goes a bit more in depth is: https://elixirschool.com/en/, which I used when learning the language myself.

## Code Examples

### A Simple Hello World

```elixir
IO.puts "Hello World from Elixir!"
```

### Various ways of summing a lists
The first works via recursion and pattern matching on the shape of a list, the second works by using a function defined in the Enum module.

```elixir
defmodule Sums do
  def sum_list([], acc) do
    acc
  end
  def sum_list([head | tail], acc) do
    sum_list(tail, head + accumulator)
  end

  def sum_list2(list) do
    Enum.reduce(list, fn x, acc -> x + acc end)
  end
end
```

### Concurrent Processes
A simple example how simple processes can delegate work between eachother. The different processes here are running in parallel after being spawned.

```elixir
defmodule Dialogue do

  def printer do
    receive do
      {:msg, msg} -> IO.puts msg
    end
  end

  def person(my_name, printer_id) do
    receive do
      {:hello, name, address} ->
         send(printer_id, {:msg, "I got a message from #{name}"})
         send(address, {:hello, my_name, self()})
    end
  end

  def run_dialogue do
    printer_id = spawn(printer)
    joe = person("Joe", printer_id)
    send(joe, {:hello, "Omniscient Programmer", self()})
  end
end
```

### A concurrent Key/Value store

```elixir
defmodule Store do

  def store(map) do
    new_map = receive do
      {:put, k, v, callback} ->
        new = Map.put(map, k, v)
        send(callback, :success)
        new
      {:get, k, callback} ->
        v = Map.get(map, k)
        send(callback, {:success, v})
        map
    end
    store(new_map)
  end

  def run_store do
    store_id = spawn(fn -> store(%{}) end)
    send(store_id, {:put, "North Pole", "Santa", self()})
    send(store_id, {:get, "North Pole", self()})

    # Santa should be printed
    receive do
      {:success, v} -> IO.puts(v)
    end
  end
end
```
