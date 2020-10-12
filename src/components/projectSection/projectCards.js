import React from "react"
import { Zoom } from "react-reveal"

//COMPONENTS
import CardImage from "./cardImage"

const ProjectCards = ({ nodes }) => {
  const node = nodes[0]

  return (
    <Zoom cascade bottom>
      <ul className="grid py-20 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <li>
          <CardImage
            title={node.title}
            slug={node.slug.current}
            image={node.mainImage.asset.fluid}
            description={node.description}
          />
        </li>
        <li>
          <CardImage
            title={node.title}
            slug={node.slug.current}
            image={node.mainImage.asset.fluid}
            description={node.description}
          />
        </li>
        <li>
          <CardImage
            title={node.title}
            slug={node.slug.current}
            image={node.mainImage.asset.fluid}
            description={node.description}
          />
        </li>
      </ul>
    </Zoom>
  )
}

export default ProjectCards
