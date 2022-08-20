require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.livinglovingteam.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Living Loving Team | Tampa Bay Real Estate`,
    description: `Find your next home in the tampa real estate market with the Living Loving Team.`,
    author: `@gatsbyjs`,
    image: `src/images/logo_white.svg`,
    siteUrl: `https://www.livinglovingteam.com`,
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.GATSBY_CONTENTFUL_SPACE_ID
    }
  }, 
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Living Loving Team | Tampa Bay Real Estate`,
      short_name: `Living Loving Team`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/llt_favicon.png`, // This path is relative to the root of the site.
    },
  },
  "gatsby-plugin-styled-components", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-9GYGY0KM88"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap",
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint: process.env.GATSBY_MAILCHIMP, // string; add your MC list endpoint here; see instructions below
      timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
    },
  },
  {
    resolve: "gatsby-plugin-robots-txt",
    options: {
      host: "https://www.livinglovingteam.com",
      sitemap: "https://www.livinglovingteam.com/sitemap.xml",
      policy: [{ userAgent: "*", allow: "/" }],
    },
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 800,
            wrapperStyle: "margin: 2em 0;",
            linkImagesToOriginal: false,
            backgroundColor: "transparent",
          },
        },
      ],
    },
  },
  "gatsby-plugin-sharp", "gatsby-transformer-sharp",`gatsby-plugin-react-helmet`, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};


    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },

