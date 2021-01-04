/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import "./bootstrap.min.css"
import "./layout.css"


const Layout = ({ children }) => {
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
      <Header />
      
        <main>{children}</main>
      <Footer />
        <footer style={{ color: "000000"}}>
          MADE IN INDIA Handcrafted Taiba Jewellery
        <a href="mailto:shahid@script.io"> Email us</a> to ask anything. © 2020
        , Design by
        {` `}
        <a href="https://www.shahidScript.com">Shahid's Script</a> ©{" "}
        {new Date().getFullYear()}
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
