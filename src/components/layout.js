/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

// COMPONENT
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      {mount && (
        <main className="text-gray-800 overflow-x-hidden">
          <Header />
          {children}
          <Footer />
        </main>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
