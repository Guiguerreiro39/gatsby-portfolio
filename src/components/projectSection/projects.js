import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

//COMPONENTS
import ProjectCards from "./projectCards"
import Line from "../shared/line"

const query = graphql`
  query {
    sanityAuthor(name: { eq: "Guilherme Guerreiro" }) {
      github
    }
    allSanityProject {
      nodes {
        title
        slug {
          current
        }
        id
        description
        github
        categories {
          title
        }
        mainImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query)

  return (
    <section className="bg-gray-300" id="projects">
      <div className="container m-auto py-20">
        <h1 className="text-4xl mb-1">My Projects</h1>
        <Line width="4rem" height="3px" />
        <ProjectCards nodes={data.allSanityProject.nodes} />
        <div className="text-center">
          <h2 className="mb-8 text-2xl">
            Check out all of my open source projects!
          </h2>
          <Link
            to={data.sanityAuthor.github}
            target="_blank"
            className="rounded-lg bg-gray-800 text-gray-100 p-3 text-xl hover:bg-gray-700"
          >
            <h3 className="inline-block pr-2">Github</h3>
            <FontAwesomeIcon icon={faGithub} className="inline-block" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
