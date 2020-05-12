module.exports = {
  siteMetadata: {
    title: `The Programmers Hangout`,
    description: `A cozy community of programmers on Discord`,
    author: `TPH Community`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Oxygen`,
            variants: [`400`, `700`],
          },
          {
            family: `Oxygen Mono`,
            variants: [`400`],
          },
          {
            family: `Montserrat`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-auto-headers`,
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `site`,
        path: `${__dirname}/src/content/site`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `${__dirname}/src/content/resources`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `what-is-archive`,
        path: `${__dirname}/src/content/archives`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Programmers Hangout`,
        short_name: `TPH`,
        start_url: `/`,
        background_color: `#1f2a34`,
        theme_color: `#2874fe`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
