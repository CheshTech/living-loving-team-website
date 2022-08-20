const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogpost = path.resolve(`src/templates/blogpost.js`)

  return graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors, "ERROR")
    }

    const posts = result.data.allContentfulBlogPost.edges
    posts.forEach(post => {
      createPage({
        path: `/blog/${post.node.slug}/`,
        component: blogpost,
        context: {
          slug: post.node.slug,
        },
      })
    })
  })
}
