/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages(graphql, actions) {
  // Get Gatsby‘s method for creating new pages
  const { createPage } = actions
  // Query Gatsby‘s GraphAPI for all the projects that come from Sanity
  const result = await graphql(`
    query {
      allSanityProject {
        nodes {
          slug {
            current
          }
          id
        }
      }
    }
  `)
  // If there are any errors in the query, cancel the build and throw error
  if (result.errors) throw result.errors
  // Handle if allSanityProject is null
  const projectNodes = (result.data.allSanityProject || {}).nodes || []

  // Loop through the project nodes
  projectNodes.forEach(node => {
    // Desctructure the id and slug fields for each project
    const { id, slug = {} } = node
    // If there isn't a slug, do nothing
    if (!slug) return
    // Make the URL with the current slug
    const path = `${slug.current}`
    // Create the page using the URL path and the template file, and pass down the id
    // that we can use to query for the right  project in the template file
    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: { id },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createProjectPages(graphql, actions)
}
