---
authors:
  - "supergrecko#3434"
created_at: "2019/07/27"
title: Singletons
external_resources:
  - text: Wikipedia.org Singleton Pattern
    href: https://en.wikipedia.org/wiki/Singleton_pattern
  - text: phpenthusiast.com Singleton Pattern
    href: https://phpenthusiast.com/blog/the-singleton-design-pattern-in-php
  - text: phptherightway.com Singleton Pattern
    href: https://phptherightway.com/pages/Design-Patterns.html#singleton
  - text: php.net Static Keyword
    href: https://www.php.net/manual/en/language.oop5.static.php
  - text: php.net Late Static Bindings
    href: https://www.php.net/manual/en/language.oop5.late-static-bindings.php
  - text: Wikipedia.org Static Keyword
    href: https://en.wikipedia.org/wiki/Static_(keyword)
  - text: Wikipedia.org Null Coalescing Operator
    href: https://en.wikipedia.org/wiki/Null_coalescing_operator
  - text: php.net Null coalescing operator
    href: https://www.php.net/manual/en/migration70.new-features.php#migration70.new-features.null-coalesce-op
---

A singleton is a class which is only instantiated once during runtime. This is done by keeping a static property containing its instance on the singleton class.

There are multiple benefits to using a singleton class

- You're always going to pull the same instance of the class
- It's only instantiated once
- Use `$this` in a static-like context

By using a singleton instead of a static class we expose a cleaner class to use and we can use regular instance properties instead of static properties.

## Creating a Singleton in PHP

Creating a class which can be used as a singleton is very simple.

```php
<?php

namespace Example;

class Singleton
{

    /**
     * The singleton instance
     * @var Singleton
     */
    private static $instance;

    /**
     * Get the instantiated singleton, or create it if it hasn't been instantiated yet.
     * @return Singleton
     */
    public static function getInstance(): Singleton {
        // In PHP 7.4 we will be able to do
        // static::$instance =?? new static();
        // The double ?'s is a null-coalesce operator. There's a link about it below.
        static::$instance = static::$instance ?? new static();

        return static::$instance;
    }

}
```

## Testing our Singleton

To give a little functionality to our freshly baked Singleton we add these three members to the class

```php
    private $word = "Pineapple";

    public function getWord(): string {
        // PHP_EOL is a constant for a new line (\r\n) or whichever your OS uses.
        return $this->word . PHP_EOL;
    }

    public function setWord(string $word): void {
        $this->word = $word;
    }
```

We are now ready to test our Singleton.

We'll start of by proving that only one instance is created during runtime. We'll grab the singleton instance twice using `Singleton::getInstance();` and comparing their object ids using `spl_object_hash`. Let's try it!

```php
$first = Singleton::getInstance();
$second = Singleton::getInstance();

// Compare the hash ids for each of the variables, if they are equal then they contain the same instance.
var_dump(spl_object_hash($first) === spl_object_hash($second)); // bool(true)
```

We can now prove its static-like functionality by using our `getWord` and `setWord` methods.

We will do this by comparing the returned value from `getWord()` on `$first` and `$second`.

```php
var_dump($first->getWord() === $second->getWord()); // bool(true)

// now let's try chaning the value on $first
$first->setWord("Banana");

// the test will still pass, because it's a singleton.
var_dump($first->getWord() === $second->getWord()); // bool(true)
```
