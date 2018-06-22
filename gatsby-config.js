module.exports = {
  siteMetadata: {
    title: 'Andrie',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'thewholemind.me',
        protocol: 'http',
        hostingWPCOM: true,
        useACF: true,
      },
    },
  ],
}
