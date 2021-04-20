module.exports = {
  pathPrefix: "/photo-gallery",
  siteMetadata: {
    title: `Photo Gallery`,
    siteUrl: `https://ashiksimon.com/`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-145326769-2",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `ashiksimon-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#c7d8ed`,
        theme_color: `#c7d8ed`,
        icon: "src/images/favicon.ico", 
        crossOrigin: `use-credentials`,
        icon: `src/images/android-chrome-512x512.png`, 
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
