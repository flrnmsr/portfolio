const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/project-page.js')

    resolve(
      graphql(
        `
          {
            allStoryblokEntry(
              filter: { field_component: { eq: "project-page" } }
            ) {
              edges {
                node {
                  id
                  name
                  created_at
                  uuid
                  slug
                  full_slug
                  content
                  is_startpage
                  parent_id
                  group_id
                }
              }
            }

            labels: allStoryblokEntry(
              filter: { field_component: { eq: "section-labels" } }
            ) {
              edges {
                node {
                  labelProjectPage: field_ProjectPage_string
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        const entries = result.data.allStoryblokEntry.edges
        entries.forEach((entry, index) => {
          createPage({
            path: `/${entry.node.full_slug}/`,
            component: storyblokEntry,
            context: {
              story: entry.node,
              label: result.data.labels.edges[0].node.labelProjectPage,
            },
          })
        })
      })
    )
  })
}
