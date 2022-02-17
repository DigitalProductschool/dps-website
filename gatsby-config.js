module.exports = {
  siteMetadata: {
    title: `Digital Product School`,
    description: `DPS is a 3 months training program where 
    product managers, interaction designers, software engineers,
    AI-specialists, agile coaches and product marketing managers 
    gain practical experience by building innovative digital products.`,
    author: `@digitalproductschool`,
    twitterAuthor: `@dpschool_io`,
    image: `https://digitalproductschool.io/assets/og/Batch16_Application.jpg`,
    siteUrl: `https://digitalproductschool.io`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://digitalproductschool.io`,
      },
    },
  ],
};
