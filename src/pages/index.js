import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container mx-auto">
      <div className="py-8">
        <h1 className="text-4xl font-bold">Framer Motion Playground: Homepage</h1>
        <p className="text-purple-600 font-medium italic font-serif">Gatsby JS (React JS) + Framer Motion + Tailwind CSS</p>
      </div>
      <div className="section">
        <h3 className="text-lg font-bold">Experiment</h3>
        <Link to='/basic/' className="link block">Go to Basic Experiment</Link>
      </div>
      <div className="section">
        <h3 className="text-lg font-bold">Showcase</h3>
        <Link to='/showcase/1-stories-google/' className="link block">Go to Showcase 1: Stories Google</Link>
        <Link to='/showcase/2-central-gurney/' className="link block">Go to Showcase 2: Central Gurney</Link>
        <Link to='/' className="link block invalid">Go to Showcase 3: Pending</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
