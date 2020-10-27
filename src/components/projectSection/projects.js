import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Fade, Flip } from "react-reveal"

//COMPONENTS
import ProjectCards from "./projectCards"
import Line from "../shared/line"

const query = graphql`
  query {
    allSanityProject {
      nodes {
        title
        demo
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

const Projects = ({ github }) => {
  const data = useStaticQuery(query)

  return (
    <section className="bg-gray-300" id="projects">
      <div className="container m-auto py-20 sm:px-0 px-8">
        <Flip cascade bottom>
          <h1 className="text-4xl mb-1 font-bold">My Projects</h1>
        </Flip>
        <Flip bottom>
          <Line width="4rem" height="3px" />
        </Flip>
        <ProjectCards nodes={data.allSanityProject.nodes} />
        <Fade bottom>
          <div className="text-center">
            <h2 className="mb-8 text-2xl">
              Check out all of my open source projects!
            </h2>
            <div className="transform hover:scale-110 duration-300 inline-block">
              <Link
                to={github}
                target="_blank"
                className="rounded-lg bg-gray-800 text-gray-100 p-3 text-2xl"
              >
                <h3 className="inline-block pr-2">Github</h3>
                <FontAwesomeIcon icon={faGithub} className="inline-block" />
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Projects
