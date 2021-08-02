const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `Marmalade AI`,
    description: `Marmalade AI`,
    author: `Marmalade AI`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-gatsby-cloud',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [tailwindcss('./tailwind.config.js'), autoprefixer],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/marmalade-logo-sm.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        purgeOnly: ['components/', '/main.css', 'bootstrap/', '/tailwind.css'], // Purge only these files/folders
      },
    },
  ],
};
