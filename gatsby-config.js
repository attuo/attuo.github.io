module.exports = {
  //pathPrefix: "/",
  siteMetadata: {
    title: "Personal page",
    description: "This is my personal page",
    author: "Atte Tuomisto",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Personal page",
        short_name: "personal",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/components/Layout/Layout"),
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-scroll-reveal",
      options: {
        threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
};
