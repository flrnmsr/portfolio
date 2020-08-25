module.exports = {
  siteMetadata: {
    title: 'Florian Moser',
    description: 'Digital Design',
    url: 'https://flomoser2.netlify.app/',
    image: 'static/ogimage.png',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@atoms': 'src/atoms',
          '@pages': 'src/pages',
          '@templates': 'src/templates',
          '@styles': 'src/styles',
          '@assets': 'assets/',
          '@images': 'src/images',
        },
        extensions: [],
      },
    },
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Florian Moser',
        short_name: 'florian moser',
        start_url: '/',
        icon: 'assets/favicon-32x32.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/imprint`, `/privacy`, `/projects/*`],
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: 'LNqGPZlXuqu9wZU1PTraWQtt', //f moser design portfolio
        homeSlug: 'home',
        version: 'draft',
      },
    },
  ],
}
