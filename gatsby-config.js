const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  flags: {
    DEV_SSR: false,
    FAST_DEV: false,
    LMDB_STORE: false,
    PARALLEL_SOURCING: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
  },
  siteMetadata: {
    title: 'Marmalade AI',
    description: 'Marmalade AI',
    author: 'Marmalade AI',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-M97RDW8',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        /*
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "YOUR_DATA_LAYER_NAME",
        */
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        /*
        routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
        */
        // Defaults to false
        enableWebVitalsTracking: true,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [tailwindcss('./tailwind.config.js'), autoprefixer],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Marmalade.ai | Home',
        short_name: 'Marmalade.ai',
        description: 'Marmalade.ai | Making software personnetworking easier.',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/marmalade-logo-tiny.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using 'gatsby develop'
        tailwind: true, // Enable tailwindcss support
        whitelist: ['whitelist'], // Don't remove this selector
        ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        purgeOnly: ['components/', '/main.css', 'bootstrap/', '/tailwind.css'], // Purge only these files/folders
      },
    },
  ],
};
