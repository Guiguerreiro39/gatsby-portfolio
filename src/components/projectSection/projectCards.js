import React from "react"
import { Zoom } from "react-reveal"

//COMPONENTS
import CardImage from "./cardImage"

const ProjectCards = ({ nodes }) => {
  return (
    <Zoom cascade bottom>
      <ul className="grid py-20 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {nodes.map(node => (
          <li key={node.id}>
            <CardImage
              title={node.title}
              github={node.github}
              demo={node.demo}
              image={node.mainImage.asset.fluid}
              description={node.description}
            />
          </li>
        ))}
      </ul>
    </Zoom>
  )
}

export default ProjectCards
