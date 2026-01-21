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
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            weights: [`400`, `700`],
          },
          {
            family: `IBM Plex Sans`,
            weights: [`400`, `700`],
          },
          {
            family: `IBM Plex Mono`,
            weights: [`400`],
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
        name: `spotlights`,
        path: `${__dirname}/src/content/spotlights`,
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
