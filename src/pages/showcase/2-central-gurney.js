import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import Header from "../../components/2-central-gurney/header"
import Hero from "../../components/2-central-gurney/sections/hero"
import Location from "../../components/2-central-gurney/sections/location"
import About from "../../components/2-central-gurney/sections/about"
import Plan from "../../components/2-central-gurney/sections/plan"
import Comapny from "../../components/2-central-gurney/sections/company"
import Contact from "../../components/2-central-gurney/sections/contact"

import "../../styles/2-central-gurney.css"

const IndexPage = () => (
  <Layout className="cag">
    <Seo title="Showcase 2 - CAG" />
    <Header/>
    {
      typeof window !== 'undefined' && 
        <>
          <Hero/>
          <About/>
          <Location/>
          <Plan/>
          <Comapny/>
          <Contact/>
        </>
    }
  </Layout>
)

export default IndexPage
