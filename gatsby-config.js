const path = require(`path`);

module.exports = {
  pathPrefix: "/Harmony-of-the-Spheres",
  siteMetadata: {
    siteUrl: `https://joski2490.github.io/Harmony-of-the-Spheres/`,
    title: `Gravity Simulator`,
    author: `TheHappyKoala`,
    lang: `en`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-less`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://joski2490.github.io/Harmony-of-the-Spheres/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-robots-txt`
  ]
};
