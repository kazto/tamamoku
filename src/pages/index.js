import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>たまもく</h1>
    <p>
      <a href="https://twitter.com/tamamokumoku">Twitter</a>
      <a href="https://tamamoku.connpass.com">Connpass</a>
    </p>
  </Layout>
)

export default IndexPage
