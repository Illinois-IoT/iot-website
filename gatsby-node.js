exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/camp_curriculum.js`)

  return graphql(`
      {
      allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
      ) {
          edges {
          node {
              frontmatter {
              slug
              }
          }
          }
      }
      }
  `).then(result => {
      if (result.errors) {
      return Promise.reject(result.errors)
      }

      return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
          path: node.frontmatter.slug,
          component: blogPostTemplate,
          context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
          },
      })
      })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-google-slides/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}