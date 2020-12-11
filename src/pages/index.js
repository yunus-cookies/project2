import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import About from "../components/About"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <HeroSection />
        <About />
      </Layout>
    </>
  )
}

export default IndexPage
