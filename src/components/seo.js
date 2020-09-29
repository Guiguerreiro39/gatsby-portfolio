import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
// import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, author }) => {
  // const { location } = useLocation()
  const { site } = useStaticQuery(query)

  const { defaultTitle, defaultDescription, defaultAuthor } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: author || defaultAuthor,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      {/* <meta name="image" content={seo.image} /> */}
      {/* {seo.url && <meta property="og:url" content={seo.url} />} */}
      {/* {(article ? true : null) && <meta property="og:type" content="article" />} */}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {/* {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />} */}
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  author: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultAuthor: author
      }
    }
  }
`
