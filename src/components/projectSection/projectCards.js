import React from "react"

//COMPONENTS
import CardImage from "./cardImage"

const ProjectCards = ({ nodes }) => {
  const node = nodes[0]

  return (
    <div className="grid grid-cols-3 py-20">
      <CardImage
        title={node.title}
        slug={node.slug.current}
        image={node.mainImage.asset.fluid}
        description={node.description}
      />
      <CardImage
        title={node.title}
        slug={node.slug.current}
        image={node.mainImage.asset.fluid}
        description={node.description}
      />
      <CardImage
        title={node.title}
        slug={node.slug.current}
        image={node.mainImage.asset.fluid}
        description={node.description}
      />
    </div>
  )
}

export default ProjectCards
