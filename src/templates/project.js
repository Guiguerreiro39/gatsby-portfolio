import React from "react"
import { graphql } from "gatsby"

// COMPONENTS
import Layout from "../components/layout"

const Project = ({ data }) => {
  const { title, description } = data.project || {}
  return (
    <Layout>
      <div className="container m-auto py-10">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      title
      description
    }
  }
`

export default Project
