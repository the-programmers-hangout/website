## What is SQLite?

Sqlite is a small self-contained SQL database engine written in ANSI C. It allows for creating an SQL database both on disk as a single file, and in memory.
It is commonly embedded either into an operating system or an application to store data for querying against without running a full DBMS.

Sqlite has some rather attractive features that make it a good choice for many situations, those situations include; 
- Storing a cache of data between application runs.
- Storing relational data for querying either on disk or in ram.
- Being used as a stable format for long term storage.

This being said, Sqlite does have a few usecases it is unsuited for;
- Being accessed directly by multiple users over the network.
- Petabyte scale data.
- Highly concurrent reads and writes.

## Standout Features

Sqlite is small, simple and consistent. They make promises to maintain backwards compatibility and have a well worked and simple codebase. 

There are about 138 thousand lines of code (not counting blank lines or comments), but over 91946 thousand lines of testing code, 
this means that it is probably one of the most tested pieces of software currently used today.
Its so well tested and trusted that its used in the Airbus A350, which means its trusted to an Aviation-grade.
Its built in limits are huge, Sqlite can support databases upto 140 terabytes in size with around a gigabyte per row.
Sqlite is entirely public domain and requires no changes to licensing for embedding, reselling, repackaging, or modifying in anyway.
It comes standard in a few programming languages like Python and PHP, and has out the box bindings for C/C++/TCL. 
Even the US Library of Congress uses it as a suitable long term data storage format.
Sqlite can even be extended to support JSON and other functionality.

Sqlite is probably the most deployed database in the world, every Android, iOS, Mac, Windows 10 install has an Sqlite database running somewhere in it,
its also widely used in many commercial software projects like; Skype, iTunes, Firefox, Chrome, Safari, Dropbox, TurboTax and so many more.
This probably accounts for billions if not trillions of installations around the world.

## Basic Usage

Lets get started on some basic usage. Im going to keep things very simple.
For these examples we will use the command line tool `sqlite3`
Lets fire it up `sqlite3`

```
SQLite version 3.28.0 2019-04-16 19:49:53
Enter ".help" for usage hints.
sqlite>
```

Before we start lets turn on some helpers (they make output prettier) 
```
.headers on
.mode column
```


In here we can now execute our SQL commands.

First we will create some tables

```sql
create table artist
(
    id   integer
        constraint artist_pk
            primary key autoincrement,
    name text not null
);

create unique index artist_id_uindex
    on artist (id);

create table song
(
    id        integer
        constraint song_pk
            primary key autoincrement,
    title     text not null,
    artist_id int  not null
        constraint artist_id
            references artist
);

create unique index song_id_uindex
    on song (id);
```

This will create a simple database with two tables. Song and Artist, there is also a relationship between a song and its artist

Lets insert some data into the database now,
```sql 
INSERT INTO artist (id, name)
VALUES (1, 'Billie Eilish');
INSERT INTO artist (id, name)
VALUES (2, 'The Jackson 5');
INSERT INTO artist (id, name)
VALUES (3, 'The Beatles');

INSERT INTO song (id, title, artist_id)
VALUES (1, 'Bad Guy', 1);
INSERT INTO song (id, title, artist_id)
VALUES (2, 'I Want You Back', 2);
INSERT INTO song (id, title, artist_id)
VALUES (3, 'Hey Jude', 3);
INSERT INTO song (id, title, artist_id)
VALUES (4, 'Eleanor Rigby', 3);
INSERT INTO song (id, title, artist_id)
VALUES (5, 'Let It Be', 3);
```

Now we can start querying the database. First lets get all the songs. 

```sql
select * from song;
```
We will get back 

```
sqlite> select * from song;
id          title       artist_id
----------  ----------  ----------
1           Bad Guy     1
2           I Want You  2
3           Hey Jude    3
4           Eleanor Ri  3
5           Let It Be   3
```

Now lets do a more complex query with a join in it, to get the relation data. Lets get all the songs by The Beatles.

```sql
select song.id as song_id, artist.name as artist_name, song.title as title
FROM song
         join artist on song.artist_id = artist.id
WHERE (select artist_id from artist where artist_name = 'The Beatles');
```

This should return something like 
```
sqlite> song_id     artist_name  title
   ...> ----------  -----------  ----------
   ...> 3           The Beatles  Hey Jude
   ...> 4           The Beatles  Eleanor Ri
   ...> 5           The Beatles  Let It Be
   ...>
```

Other than that this is a fully fledged SQL engine, so you can go to town trying to create whatever relational data you want inside it.

## Resources

* When to use SQLite: https://www.sqlite.org/whentouse.html
* Documentation: https://www.sqlite.org/docs.html

