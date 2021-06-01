module.exports = {
  siteMetadata: {
    title: `The Programmers Hangout`,
    description: `A cozy community of programmers on Discord`,
    author: `TPH Community`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-polished`,
    {
      resolve: `@el7cosmos/gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `700`],
          },
          {
            family: `IBM+Plex+Sans`,
            variants: [`400`, `700`],
          },
          {
            family: `IBM+Plex+Mono`,
            variants: [`400`],
          },
        ],
      },
    },
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [`gatsby-remark-auto-headers-improved`],
        gatsbyRemarkPlugins: [`gatsby-remark-auto-headers-improved`],
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
        name: `languages`,
        path: `${__dirname}/src/content/resources/language`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `topics`,
        path: `${__dirname}/src/content/resources/topic`,
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
