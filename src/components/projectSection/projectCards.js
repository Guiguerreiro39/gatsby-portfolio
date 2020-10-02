import React from "react"
import { Zoom } from "react-reveal"

//COMPONENTS
import CardImage from "./cardImage"

const ProjectCards = ({ nodes }) => {
  const node = nodes[0]

  return (
    <Zoom cascade bottom>
      <ul className="grid grid-cols-3 py-20">
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
