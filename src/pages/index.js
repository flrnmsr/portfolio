import React from 'react'
import { graphql, Link } from 'gatsby'

import Introduction from '../components/Introduction'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

import { Box } from 'rebass/styled-components'
import Section from '@components/Section'
import styled from 'styled-components'
import FluidImage from '@atoms/FluidImage'
import { device } from '@styles/utils'

import Social from '@components/Social'


const ImageWrapper = styled.div`
  overflow: hidden;
  margin-bottom: 8px;
  border-radius: 8px;
  transition: 0.3s;

  :hover {
    opacity: 0.9;

	}

  @media ${device.lg} {
    overflow: hidden;
    max-width: 2000px;
    max-height: relative;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 24px;
  row-gap: 16px;

  @media ${device.lg} {
    padding: 0 0px;
    grid-template-columns: 1fr 1fr;
    column-gap: 24px;
    row-gap: 32px;
  }
`

class BlogIndex extends React.Component {
  render() {
    const { allStoryblokEntry, home, labels } = this.props.data

    const { text_bio, text_contact, social_links } = JSON.parse(
      home.edges[0].node.content
    )

    const { labelIntro, labelProjects, labelContact } = labels.edges[0].node

    let projects = allStoryblokEntry.edges.map(item => {
      let content = JSON.parse(item.node.content)

      return {
        slug: item.node.slug,
        ...item.node,
        ...content,
      }
    })

    return (
      <Layout location={this.props.location}>
        <SEO title="All posts" />

        <div
          id="intro"
          style={{
            display: 'block',
            position: 'relative',
            visibility: 'hidden',
          }}
        ></div>

        <Section mt={[24]}>
          <Box width={[1, 1, 1, 11 / 12]}>
            <Introduction text={text_bio} />
          </Box>
        </Section>


      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allStoryblokEntry(
      filter: { field_component: { eq: "project-page" } }

      sort: { fields: first_published_at, order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          name
          slug
          content
          published_at
          created_at
        }
      }
    }

    home: allStoryblokEntry(filter: { field_component: { eq: "home-page" } }) {
      totalCount
      edges {
        node {
          id
          name
          content
        }
      }
    }

    labels: allStoryblokEntry(
      filter: { field_component: { eq: "section-labels" } }
    ) {
      edges {
        node {
          labelIntro: field_Intro_string
          labelProjects: field_Projects_string
          labelContact: field_Contact_string
        }
      }
    }
  }
`
