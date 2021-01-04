import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { FaGulp } from "react-icons/fa"
import HeroSection from "../components/section/HeroSection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    
    <FaGulp />
  </Layout>
)

export default IndexPage
