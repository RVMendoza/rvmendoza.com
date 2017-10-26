const postcssImport = require('postcss-import');
const customVariables = require('postcss-custom-properties');
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
					postcssImport(),
					customVariables()
        ],
      },
    },
  ],
}