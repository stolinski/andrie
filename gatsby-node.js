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
        allWordpressWpOfficer {
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
      results.data.allWordpressWpOfficer.edges.forEach(({ node }) => {
        createPage({
          path: `/officer/${node.slug}`,
          component: path.resolve('./src/pages/officers.js'),
          context: {
            slug: node.slug,
          },
        })
      })
      results.data.allWordpressPage.edges
        .filter(({ node }) => {
          return (
            node.slug !== 'safety' &&
            node.slug !== 'services' &&
            node.slug !== 'company' &&
            node.slug !== 'equipment' &&
            node.slug !== 'jobs' &&
            node.slug !== 'contact'
          )
        })
        .forEach(({ node }) => {
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
