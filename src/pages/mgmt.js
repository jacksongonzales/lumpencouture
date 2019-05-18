import React, { Component } from "react"
import { graphql } from "gatsby"

import Editor from "../components/editor"
import Layout from "../components/layout"
import Button from "../components/button"

class ManagementPage extends Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>MGMT</h1>
        <p>Check that angle, post that shit</p>
        <Editor />
        <Button />
      </Layout>
    )
  }
}

export default ManagementPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
