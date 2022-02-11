module.exports = {
  siteMetadata: {
    title: `Digital Product School`,
    description: `DPS is a 3 months training program where 
    product managers, interaction designers, software engineers,
    AI-specialists, agile coaches and product marketing managers 
    gain practical experience by building innovative digital products.`,
    author: `@digitalproductschool`,
    twitterAuthor: `@dpschool_io`,
    image: `https://digitalproductschool.io/assets/shared/Digital_Product_School_Batch16_Application.webp`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#182542`,
        theme_color: `#182542`,
        display: `minimal-ui`,
        icon: `static/assets/shared/favicon.svg`,
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
