## What is GraphQL?
GraphQL is a query language for APIs, meant to challenge and replace REST. At its core, GraphQL enables declarative data fetching where a client can specify exactly what data it needs from an API. Put bluntly, a lot of people claim GraphQL to be REST 2.0.

## Why does GraphQL exist?
GraphQL was created internally by Facebook in 2012, mainly to optimize the network load for mobile devices. Interestingly, other companies like Netflix or Coursera were working on comparable ideas to make API interactions more efficient. When Facebook announced GraphQL, Coursera abandoned their efforts and jumped on GraphQL.

## What makes GraphQL better than REST?

1. GraphQL resolves the issues of underfetching, and overfetching of REST. For example, if you were to retrieve a user, its name, and the title of his posts, REST would end up over and under fetching this :

```sh
/users/5
/users/5/posts
```

```js
// REST return for endpoint /users/5
{
  id: 5,
  name: "veksen",
  email: "veksen@tph.com",
  role: "Chat Mod",
  permissions: ["readThis", "writeThat"],
  dob: "1970/01/01",
  location: "Montreal"
}

// REST return for endpoint /users/5/posts
[
  { id: 3, title: "My first post", content: "The full content of the post, possibly a few Ks of data" },
  { id: 7, title: "GraphQL is pretty neat", content: "The full content of the post, possibly a few Ks of data" },
  { id: 8, title: "GOTO considered harmful", content: "The full content of the post, possibly a few Ks of data" }
]
```

Meanwhile, a GraphQL query would look like :

```graphql
query user(id: "5") {
  id
  name
  posts {
    id
    title
  }
}
```

```js
// GraphQL return for our query
{
  id: 5,
  name: "veksen",
  posts: [
    { id: 3, title: "My first post" },
    { id: 7, title: "GraphQL is pretty neat" },
    { id: 8, title: "GOTO considered harmful" }
  ]
}
```

2. GraphQL helps building features faster. Because of the way the front-end can explicitly query the data it needs, it's not rare to not need to update the backend API. Again, using the example from earlier, if we wanted to also fetch the user friends, we could simply add it to our query:

```graphql
query user(id: "5") {
  name
  posts {
    title
  }
  friends {
    firstName
    lastName
  }
}
```

3. Strong-typing. Contrary to working with JSON responses limited to string and numeric, and the discrepancy between front-end (JS) and any back-end language being lost in translation.

## Core concepts
GraphQL has three types of operations:

- queries (fetching data),
- mutations (creating/updating/deleting data),
- subscriptions (real-time listeners to data changes, using websockets behind the hood).

Basic query:

```graphql
query User($id: ID) {
  user {
    id
    role
    permissions {
      name
    }
  }
}
```

Basic mutation:

```graphql
mutation CreatePost($title: String!, $content: String!, $draft: Boolean!) {
  createPost(title: $title, content: $content, draft: $draft) {
    title
    content
    draft
  }
}
```

Basic subscription:

```graphql
subscription OnMessageReceived($conversationId: ID!) {
  messageReceived(conversationId: $conversationId) {
    id
    content
  }
}
```

At its core, GraphQL consists of two parts: client, and server.

A server contains a single endpoint, accepting GET and POST requests, which are translated like so:

```graphql
{
  me {
    name
  }
}
```

becoming:

```
http://myapi/graphql?query={me{name}}
```

## How can I start using GraphQL?
While it is possible to convert an existing REST endpoint to GraphQL, either through automated tools, or manually, the best case scenario would be on an entirely new project.

## Common misconceptions

- Because the query is explicit, a lot of people think that GraphQL is unsafe, making all of the data available to anyone. GraphQL is bound to the same safety procedures that a regular API would: permissions are defined by the backend.

- GraphQL is a query language for APIs, not databases! This means it can be used with any database. The API is responsible for converting the query to a database query.

- When it was first announced by Facebook, a lot of people thought it was React exclusive! This is not true. GraphQL can work on any tech stack (although some languages have more complete tooling than others)

## Closing notes  
Today, GraphQL is used in production by lots of different companies such as GitHub, Twitter, Yelp and Shopify - to name only a few. We are seeing month after month, small and large companies converting to it.

## Related projects and libraries

- Apollo (GraphQL server + client) <https://www.apollographql.com/>
- Relay (GraphQL client) <https://facebook.github.io/relay/>
- Prisma (GraphQL server with ORM-like DB queries to MySQL + Postgres) <https://www.prisma.io/>
- PostGraphile (GraphQL API from a Postgres schema) <https://www.graphile.org/postgraphile/>
- Hasura (GraphQL server to Postgres mapping service) <https://hasura.io/>
- GraphCMS <https://graphcms.com/>
- Graphene JS & Python <http://graphene-js.org/> <http://graphene-python.org/>

## Attached resources

- Full-stack introduction to GraphQL: <https://www.howtographql.com/>
- Zero to GraphQL in 30m: <https://www.youtube.com/watch?v=UBGzsb2UkeY>
- GraphQL Community Resources: <https://graphql.org/community/>
- GraphQL intro: <https://graphql.org/learn/>
- Awesome GraphQL: <https://github.com/chentsulin/awesome-graphql>

## Example codebase

- Airbnb Clone server (NodeJS): <https://github.com/prismagraphql/graphql-server-example>
- E-commerce full-stack (React+NodeJS) <https://github.com/KATT/shop>
