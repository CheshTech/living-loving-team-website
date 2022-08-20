import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navigation from "./navigation"
import "./layout.css"
import Footer from "./footer"
import Splash from "./splash"
import HomeSplash from "./homesplash"

const Layout = ({ children, type, img, title }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navigation type={type} siteTitle={data.site.siteMetadata.title} />
      {type === "home" && <HomeSplash />}
      {type !== "home" && <Splash img={img} title={title} type={type} />}

      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
          height: "100%",
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
