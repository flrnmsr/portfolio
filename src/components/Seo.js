import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import favicon from '@assets/favicon-32x32.png'

function SEO({ title, description, image, pathname }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            siteUrl,
            defaultImage,
          },
        },
      }) => {
        const seo = {
          title: defaultTitle,
          description: defaultDescription,
          image: `${siteUrl}static/ogimage.png`,
          url: `${siteUrl}/`,
        }

        console.log('SITE URL')
        console.log(siteUrl)
        return (
          <>
            <Helmet title={seo.title}>
              <link rel="icon" href={favicon} />
              <meta name="description" content={seo.description} />
              <meta name="image" content={seo.image} />
              {seo.url && <meta property="og:url" content={seo.url} />}
              {seo.title && <meta property="og:title" content={seo.title} />}
              {seo.description && (
                <meta property="og:description" content={seo.description} />
              )}
              {seo.image && <meta property="og:image" content={seo.image} />}
              <meta name="twitter:card" content="summary_large_image" />
              {seo.title && <meta name="twitter:title" content={seo.title} />}
              {seo.image && <meta name="twitter:image" content={seo.image} />}
            </Helmet>
          </>
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        siteUrl: url
      }
    }
  }
`
