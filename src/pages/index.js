import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Container from "../components/container"
import "./index.css"

const IndexPage = () => (
  <Container>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `多摩地区`, `もくもく会`, `たまもく`]} />
    <h1>たまもく</h1>
    <p>
      <Link to="https://twitter.com/tamamokumoku">Twitter</Link>
      <Link to="https://tamamoku.connpass.com">Connpass</Link>
      <Link to="/coc">Code of Conducts</Link>
    </p>
  </Container>
)

export default IndexPage
