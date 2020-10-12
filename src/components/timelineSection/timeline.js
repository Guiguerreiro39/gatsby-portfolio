import React from "react"
import { Flip } from "react-reveal"
import { useStaticQuery, graphql } from "gatsby"
import { VerticalTimeline } from "react-vertical-timeline-component"
import BackgroundImage from "gatsby-background-image"

//COMPONENTS
import TimelineEvent from "./timelineEvent"

const query = graphql`
  query {
    allSanityTimeline(sort: { fields: initialDate }) {
      nodes {
        title
        description
        experience
        id
        technologies
        institution
        initialDate(formatString: "YYYY-MM")
        location
      }
    }
    placeholderImage: file(
      relativePath: { eq: "images/timeline_background.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Timeline = () => {
  const data = useStaticQuery(query)
  return (
    <BackgroundImage
      className="bg-center bg-cover bg-fixed h-full"
      fluid={data.placeholderImage.childImageSharp.fluid}
      id="timeline"
    >
      <div className="bg-gray-800 bg-opacity-75 h-full bg-fixed">
        <span className="flex md:justify-center justify-start">
          <Flip cascade right>
            <h1 className="sm:text-4xl text-3xl text-gray-100 font-semibold pt-10 border-b-4 border-gray-300 pb-4 xl:w-auto w-full text-center">
              My Life in a Nutshell
            </h1>
          </Flip>
        </span>
        {data.allSanityTimeline.nodes.map((node, index) => {
          const position = index % 2 === 0 ? "left" : "right"
          return (
            <VerticalTimeline
              key={node.id}
              className="overflow-y-scroll text-gray-100"
            >
              <TimelineEvent data={node} position={position} />
            </VerticalTimeline>
          )
        })}
      </div>
    </BackgroundImage>
  )
}

export default Timeline
