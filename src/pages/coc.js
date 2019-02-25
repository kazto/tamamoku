import React from "react"
import { graphql } from "gatsby"
import "./coc.css"

const CoC = ({ data }) => {
    console.log(data.markdownRemark)

    return (
        <div className="coc">
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