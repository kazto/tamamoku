import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
const path = require("path")

export default function Template ({ data })
{
    const { markdownRemark: post } = data

    return (
        <div className="coc">
            <Helmet title={`${post.frontmatter.title}`} ></Helmet>
            <div className="coccontents" dangerouslySetInnerHTML={{ __html: post.html }} ></div>
        </div>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}) {
            html
        }
    }
`