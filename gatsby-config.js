module.exports = {
  siteMetadata: {
    title: `Guilherme Guerreiro`,
    description: `I'm a Software Engineer with deep knowledge in numerous up-to-date programming languages and frameworks.
    My skills can range from Full Stack Web and Mobile Development to Machine Learning, 
    and my appetite for learning new and innovative technologies is unlimited!`,
    author: `Guilherme Guerreiro`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `zj7qjbn9`,
        dataset: `production`,
        overlayDrafts: true,
        watchMode: true,
        token:
          "skH4vMtaYxTQRTEW8TghHQZgvz1ZX41zYOfqrhFI9wfe462PuIdbp04xlXBP6YdVzDA7F1UZu45RM3rTliif2Hq7VPX1gOEm18G3Q6Jz4aSc7U9udPuL8KF2K4FHJMtEYPy8cUa6zOIyI1U1LAvnC56YMriUXX6TdTVOEUekSfTNy4csqBlK",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
  ],
}
