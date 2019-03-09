import React from "react"
import { graphql, Link } from "gatsby"
import "./coc.css"

const CoC = ({ data }) => {
    return (
        <div className="coc">
            <h1><Link to="/">たまもく</Link></h1>
            <div className="coccontents" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} ></div>
        </div>
    )
}

export default CoC

export const pageQuery = graphql`
    query {
        markdownRemark {
            html
        }
    }
`