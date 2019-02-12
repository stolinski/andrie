const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWordpressWpEquipment {
          edges {
            node {
              slug
            }
          }
        }
        allWordpressPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(results => {
      results.data.allWordpressWpEquipment.edges.forEach(({ node }) => {
        createPage({
          path: `/equipment/${node.slug}`,
          component: path.resolve('./src/pages/equipment-single.js'),
          context: {
            slug: node.slug,
          },
        })
      })
      results.data.allWordpressPage.edges.forEach(({ node }) => {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve('./src/pages/generic.js'),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}
