## What is Redis?

Redis is an in-memory datastore. It supports on-disk persistence, cache eviction, various data structures, Pub/Sub, scripting, and other features that put it in a middle ground between simple key-value store, and a more complex database.

## When should I use Redis?

While Redis can be used in place of any persistent datastore, it's strongest when you need a speedy, easy cache. Because Redis keeps all data in memory, it's able to respond very quickly.

## When shouldn't I use Redis?

If you need data relations, that's typically better served by a traditional SQL-based database. If you have huge amounts of data, having enough RAM to allow Redis to work with all of it may prove expensive, or prohibitive. Redis also only writes its data to disk on an interval, so if Redis is killed before it can write to disk, you may lose data between the time it was killed, and the last time it wrote to disk. (Although Redis offers different, configurable persistence strategies.)

## About Redis' Persistence Strategies

Redis includes several persistence strategies. RDB, AOF, and AOF fsync.

## RDB

RDB is a snapshot format, where it will provide an entire snapshot of your data at any point of time. This also is the fastest time-to-restart format for Redis with large datasets. However, because syncing the entire collection to disk is taxing on both the CPU and disk writing, it's impractical to do a full snapshot with every write. Exactly when a snapshot is produced is configurable, based on time passed, and the number of writes against the data set.

## AOF

AOF is short for Append-Only File. This writes every command and transaction sent to Redis to a file, and reconstructs the data by replaying the file at startup. When the file becomes too large, Redis automatically creates a new one in the background by reading all in-memory data, and dumping it to a new AOF-formatted file. The cost to this is restarts with large datasets/many commands are slower than reloading a comparable RDB file, due to replaying the commands.

## AOF fsync

AOF fsync is simply how often AOF is flushed to disk. You can use it without fsync at all, leaving it up to the operating system to flush your disk writes automatically, which depends on the operating system's configuration. You can also set it to fsync every second, meaning it will flush changes to disk every second, which is the default configuration. Finally, you can set it to flush to disk with every single write, which sacrifices speed for ensuring data is always written to disk.

It's not uncommon to use both RDB and AOF together to take advantage of the increased speed and durability of AOF, with the easily backed-up, quicker-to-restart RDB.

## Examples

The simplest operation in Redis is `GET`/`SET`.

```sh
127.0.0.1:6379> SET some_key "Hello, Redis"
OK
127.0.0.1:6379> GET some_key
"Hello, Redis"
```

You can also set an expiration time on keys with `SETEX`/`PSETEX`. `SETEX` uses seconds for the expiration value, and `PSETEX` uses milliseconds.

```sh
127.0.0.1:6379> SETEX expiring_key 10 "Goodbye, Redis"
OK
127.0.0.1:6379> GET expiring_key
"Goodbye, Redis"
```

If you run the same command after ten seconds have passed, the key no longer exists.

```sh
127.0.0.1:6379> GET expiring_key
(nil)
```

You can set a key only if it doesn't exist (`SETNX`, `SET ... NX`) or only if it already exists. (`SET ... XX`)

```sh
127.0.0.1:6379> SETNX existing_key "This key was free."
OK
127.0.0.1:6379> SETNX existing_key "The key is no longer free, so this will fail."
(nil)
127.0.0.1:6379> SET nonexistent_key "This doesn't exist." XX
(nil)
```

As you can see, if a `SET` operation is successful, it returns `OK`, otherwise it returns nothing, represented as `(nil)` in the CLI. Both the expiration time, and the create if (not) exists options can be set in the basic `SET` command as well.

```sh
127.0.0.1:6379> SET magical_key "This key has several options set." EX 10 NX
OK
```

Now, let's check out some more complex datatypes. One of the datatypes that Redis supports are hashes. Like hashes in any programming language, one key has many fields.

```sh
127.0.0.1:6379> HSET example_hash name "Caff"
(integer) 1
127.0.0.1:6379> HSET example_hash age 24
(integer) 1
127.0.0.1:6379> HGET example_hash
(error) ERR wrong number of arguments for 'hget' command
127.0.0.1:6379> GET example_hash
(error) WRONGTYPE Operation against a key holding the wrong kind of value
127.0.0.1:6379> HGETALL example_hash
1) "name"
2) "Caff"
3) "age"
4) "24"
127.0.0.1:6379> HGET example_hash name
"Caff"
```

You can also set multiple fields in a single command. The number it returns is the number of new fields created, so updating existing fields doesn't increase that number.

```sh
127.0.0.1:6379> HSET example_hash discord "The Programmer's Hangout" discriminator "0001" age 25
(integer) 2
127.0.0.1:6379> HGETALL example_hash
1) "name"
2) "Caff"
3) "age"
4) "25"
5) "discord"
6) "The Programmer's Hangout"
7) "discriminator"
8) "0001"
```

Another datastructure is Sorted Sets. These are essentially arrays, in which each item has a score. `ZRANGE` allows you to retrieve a range of items in the sorted set, ordered by score. It allows you to provide indexes, starting at zero. Negative indexes are from the end of the set, so `0 -1` means all items in the set, since -1 is the last item.

```sh
127.0.0.1:6379> ZADD high_scores 100000 "PinballWizard" 80000 "Elliott" 50000 "Caff" 25000 "HotBot"
(integer) 4
127.0.0.1:6379> ZRANGE high_scores 0 -1 WITHSCORES
1) "HotBot"
2) "25000"
3) "Caff"
4) "50000"
5) "Elliott"
6) "80000"
7) "PinballWizard"
8) "100000"
```

By default, Redis sorts by the lowest scores first. For sorting/displaying data, Redis also provides reversed functions for displaying the highest scores first.

```sh
127.0.0.1:6379> ZREVRANGE high_scores 0 -1 WITHSCORES
1) "PinballWizard"
2) "100000"
3) "Elliott"
4) "80000"
5) "Caff"
6) "50000"
7) "HotBot"
8) "25000"
127.0.0.1:6379> ZREVRANK high_scores "PinballWizard"
(integer) 0
```

Redis also has some functions for geospatial data. Internally, Geospatial data is stored using a sorted set. The Geo functions allow you to get the distance between two members, get all members within a radius of a certain point/member.

```sh
127.0.0.1:6379> GEOADD some_cities 2.354493 48.862773 "Paris" -0.117431 51.506906 "London" 10.000977 53.538554 "Hamburg" 21.01412 52.210929 "Warsaw" -122.423435 37.771993 "San Francisco" 37.649808 55.753146 "Moscow" 72.911566 19.093070 "Mumbai" 18.500058 -33.865797 "Cape Town"
(integer) 8
127.0.0.1:6379> GEODIST some_cities "London" "Hamburg" km
"720.3475"
127.0.0.1:6379> GEODIST some_cities "London" "Hamburg" mi
"447.6043"
127.0.0.1:6379> GEORADIUS some_cities 5 50 2000 mi WITHCOORD WITHDIST
1) 1) "Paris"
   2) "142.5253"
   3) 1) "2.35449403524398804"
      2) "48.86277411109344371"
2) 1) "Warsaw"
   2) "709.9603"
   3) 1) "21.01411789655685425"
      2) "52.21092784600281789"
3) 1) "Hamburg"
   2) "324.7380"
   3) 1) "10.00097841024398804"
      2) "53.53855395595674338"
4) 1) "Moscow"
   2) "1403.9739"
   3) 1) "37.64980584383010864"
      2) "55.75314490231349396"
5) 1) "London"
   2) "246.7366"
   3) 1) "-0.11742979288101196"
      2) "51.50690650927526804"
```

Redis also offers a publish/subscription system, to listen for real-time events via channels.

```sh
127.0.0.1:6379> SUBSCRIBE tweets
Reading messages... (press Ctrl-C to quit)
1) "subscribe"
2) "tweets"
3) (integer) 1
```

Another client could then run `PUBLISH` to push messages to all listening clients.

```sh
127.0.0.1:6379> PUBLISH tweets "@RedisLabs just tweeted \"This is a Redis example.\""
(integer) 1
```

The listening clients would then receive the following.

```sh
1) "message"
2) "tweets"
3) "@TheProgrammersHangout just tweeted \"This is a Redis example.\""
```

Redis' pub/sub implementation also supports pattern-matching for channels.

```sh
127.0.0.1:6379> PSUBSCRIBE tweets:*
Reading messages... (press Ctrl-C to quit)
1) "psubscribe"
2) "tweets:*"
3) (integer) 1
```

Any messages published to channels beginning with `tweets:` would be retireved by the subcribed client. Redis supports single-character wildcards (`?`), multi-character wildcards (`*`), and character groups (`[abcd]`) in its pattern subscriptions.

If the following messages were published:

```sh
127.0.0.1:6379> PUBLISH tweets:follow "John just followed."
(integer) 1
127.0.0.1:6379> PUBLISH tweets:retweet "Eric retweeted your Tweet"
(integer) 1
```

A subscribed client would recieve the following:

```sh
1) "pmessage"
2) "tweets:*"
3) "tweets:follow"
4) "John just followed."

1) "pmessage"
2) "tweets:*"
3) "tweets:retweet"
4) "Eric retweeted your Tweet"
```

Redis supports a lot more features, like clustering, transactions, scripting, and more datatypes like HyperLogLogs and Streams, this is just a taste of Redis' usefulness. In addition, Redis' functionality can be extended via scripts and modules.

## More Resources

- https://redis.io/commands
- https://try.redis.io/
- https://redislabs.com/community/ebook/
- https://redislabs.com/community/redis-modules-hub/
- https://hub.docker.com/_/redis/
- https://github.com/antirez/redis
- https://redis.io/topics/persistence
- https://www.paperplanes.de/2010/2/16/a_collection_of_redis_use_cases.html
- https://redditblog.com/2017/04/13/how-we-built-rplace/
- https://www.objectrocket.com/blog/how-to/10-quick-tips-about-redis/
