const postcssImport = require('postcss-import');
const postcssCustomVariables = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');
const postcssNested = require('postcss-nested');
const autoprefixer = require('autoprefixer');


module.exports = {
  siteMetadata: {
    title: "RV Mendoza - Remote Front-end Developer from Detroit",
    author: "RV Mendoza",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          postcssNested(),
          postcssImport(),
          postcssCustomVariables(),
          postcssCustomMedia(),
          autoprefixer({
            browsers: ['last 2 versions']
          }),
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `@jacobmischka/gatsby-plugin-react-svg`,
  ],
}
