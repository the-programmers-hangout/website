---
authors:
  - "supergrecko#3434"
created_at: "2019/08/07"
title: Prepared Statements
external_resources:
  - text: php.net The PDOStatement class
    href: https://www.php.net/manual/en/class.pdostatement.php
  - text: phptherightway.com PDO Extension
    href: https://phptherightway.com/#pdo_extension
---

The PDO driver supports prepared statements. A prepared statement is a template statement with placeholders which can be executed with real values. Prepared Statements are also essential for avoiding SQL-injection attacks.

A prepared statement is safe because we're executing the statement in two phases, first we send the template to the server, with the placeholder values, and then we send the values.

# What is SQL injection?

SQL injection is the act of modifying a query by inserting code which would modify the SQL query.

In a traditional SQL injection attack the user will pass a piece of malicious code which will change the SQL query being ran.

Let's say we have this PHP snippet to execute a query.

```php
$sql = "SELECT * FROM `users` WHERE `age` > {$_POST['age']};";
$pdo->query($sql);
```

This would run as expected if we get a regular input, like `20` from our request body, but if we'd get `20 OR 1 = 1; DROP TABLE users` then we would end up with a final query which looks like this:

```sql
SELECT * FROM `users` WHERE `age` > 20 OR 1 = 1; DROP TABLE users;
```

This would fetch every single row from the `users` table as `1 = 1` will always evaluate to true and then drop the entire table which would break your entire application.

# How does a Prepared Statement prevent SQL injection?

You can think of a prepared statement as a conversation between the user and the database. A basic prepared statement would look a little like this:

> User: Hello Database, I'm going to run this prepared statement. I will tell you what it should look like, but I won't give you any values. Here's my query:

```sql
SELECT * FROM `users` WHERE `age` > :age;
```

> Database: Okay I have received the query, so I'll be selecting everything from users where age is more than `:age`. Now you can send me the value for `:age` and I'll execute it.

> User: Here's the value for `:age`, it's the number `18`.

> Database: Okay, here are all the results where age was more than 18.

Via a prepared statement we tell the database what our query will look like, then we pass the values. This means there is no way of modifying the SQL query and you'll probably just get a goofy result instead of having your entire database dropped.

# Creating a Prepared Statement

There are three steps to executing a prepared statement:

- Preparation
- Binding
- Execution

## Preparation

First of all we need to create a SQL query which we want to execute. Let's say we're going to add a new entry to a table named `users`. We'll create this SQL query:

```sql
INSERT INTO `users` (username, email) VALUES (:username, :email);
```

The `:<string>` values are the placeholder values we're going to bind.

Let's create the prepared statement in PHP:

```php
// Assume that $pdo is a PDO connection
$statement = $pdo->prepare("INSERT INTO `users` (username, email) VALUES (:username, :email);");
```

We now have a variable `$statement`. This variable is an instance of `\PDOStatement` which is linked in th external resources.

## Binding

We're now ready to bind a set of values to our `$statement` variable. This is done with the `\PDOStatement::bindParam` method. For this example we will set `:username` to `"Joe"` and `:age` to `25`.

A simplified version of the `bindParam` signature looks a little like this:

```php
PDOStatement::bindParam($parameter, $value, $type)
```

- `$parameter`: The placeholder parameter we're going to bind
- `$value`: The value we're going to insert
- `$type`: The data type we're going to bind. [Valid values](https://www.php.net/manual/en/pdo.constants.php)

Let's bind our values to our prepared statement

```php
$statement->bindParam(":username", "Joe", PDO::PARAM_STR);
$statement->bindParam(":age", 25, PDO::PARAM_INT);
```

We've now told the statement that `:username` is a string with the value `"Joe"` and that `:age` is an integer with the value `25`.

# Execution

Executing the prepared statement is very simple, it's a single function call, `\PDOStatement::execute`.

Let's execute our SQL statement.

```php
$statement->execute();
```

If you're looking to capture the result you can always do

```php
$result = $statement->execute();
```
