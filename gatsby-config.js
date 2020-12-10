/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`,
 });

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: "general description",
    author: "@johndoe",
    data: ["item 1", "item 2"],
    person: { name: "peter", age: 32},
  },
  plugins: [`gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },  
    },
  `gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
  {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `1l3g1gugugwv`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
