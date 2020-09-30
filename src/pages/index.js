import React from "react"
import { graphql } from "gatsby"

// COMPONENTS
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/aboutSection/about"
import Projects from "../components/projectSection/projects"
import Hero from "../components/heroSection/hero"
import Timeline from "../components/timelineSection/timeline"
import Contact from "../components/contactSection/contact"

const IndexPage = ({ data }) => {
  const aboutData = {
    profileImage: data.sanityAuthor.profileImage.asset.fluid,
    name: data.sanityAuthor.name,
    introduction: data.sanityAuthor.introduction,
  }

  return (
    <Layout>
      <SEO />
      <Hero name={data.sanityAuthor.name} email={data.sanityAuthor.email} />
      <About data={aboutData} />
      <Timeline />
      <Projects github={data.sanityAuthor.github} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    sanityAuthor(name: { eq: "Guilherme Guerreiro" }) {
      name
      introduction
      email
      github
      profileImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export default IndexPage
