import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Container from "../components/container"
import "./index.css"

const IndexPage = () => (
  <Container>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `多摩地区`, `もくもく会`, `たまもく`]} />
    <h1>たまもく</h1>
    <ul class="linklist">
      <li class="listitem"><a href="https://twitter.com/tamamokumoku">Twitter</a></li>
      <li class="listitem"><a href="https://tamamoku.connpass.com">Connpass</a></li>
      <li class="listitem"><Link to="/coc">Code of Conducts</Link></li>
    </ul>
  </Container>
)

export default IndexPage
