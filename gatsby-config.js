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
        icon: `src/images/marmalade-logo-tiny.png`, // This path is relative to the root of the site.
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-167791928-1', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command.
        // This config will be shared across all trackingIds.
        // See https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/
        gtagConfig: {
          optimize_id: 'GTM-PF4HKDF',
          anonymize_ip: true, // Some countries require this, e.g. Germany.
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // respectDNT indicates whether Google Global Site Tag should be
          // loaded for visitors that have 'Do Not Track' enabled.
          respectDNT: true, // true = do not load
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
  ],
};
