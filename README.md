<a href="https://discord.gg/programming">
  <img src="https://img.shields.io/discord/244230771232079873?color=%23dc1529&label=The%20Programmers%20Hangout" />
</a>

<a href="https://discord.gg/programming">
  <img src="https://cdn.discordapp.com/banners/244230771232079873/ab1a9d5657892f173d5dd752b21d318f.jpg?size=1024" />
</a>

# TPH Website

The official website for [The Programmer's Hangout](https://discord.gg/programming).

## Contributing

The site is built with [Gatsby](https://github.com/gatsbyjs/gatsby) which is used to leverage the power of React while
allowing for static asset generation along with improved SEO.

**This site and resources is still a work-in-progress and subject to change**

### Setup

1. Clone the repo
2. `npm install`
3. `npm run develop`
4. Nagivate to http://localhost:8000
5. :tada:

### Resources

If you're not familiar with Gatsby or React, you can still contribute by adding resources for languages you _are_ familiar with.

The list of resources can be found [here](/src/content/resources)

#### Adding a new resource

Gatsby will take care of most of this process by creating a new page and positioning it in the sidebar automatically once you write up a new resource. All you have to do is follow these steps:

1. Create a markdown page in the appropriate location. For example `/src/content/docs/haskell/monads.md`
2. Add the required frontmatter for the post. [More info here](#frontmatter)
3. Write your main content.
4. Add `external_resources` about the subject if possible.
5. Run through the [setup steps](#setup) if possible to make sure your changes look ok.
6. Create a pull request.

#### Frontmatter

Frontmatter the optional metadata attached to every markdown file, like the list of authors or the creation date of the file. It is essentially just yaml syntax inside `---` delimiters within a markdown file. If you're not familiar with yaml you can find some refreshers [here](https://learnxinyminutes.com/docs/yaml/)

An example frontmatter might look like this

```md
---
authors:
  - "Xetera#0001"
title: "Working with Lists in Elixir"
created_at: 2020/01/30
external_resources:
  - "https://hexdocs.pm/elixir/List.html"
---

# Title

some content here
```

You can look at other resources like [this one](/src/content/resources/javascript/promises/intro.md) for reference when creating your own. We use [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) as the date format to confuse both Americans and Europeans an equal amount.
