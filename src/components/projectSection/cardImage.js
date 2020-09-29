import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

//COMPONENTS
import CardText from "./cardText"

const CardImage = ({ slug, image, title, description }) => (
  <div className="col-span-1 bg-gray-800 inset text-center relative">
    <Link to={`/${slug}`} className="">
      <CardText title={title} description={description} />
      <Img
        fluid={image}
        alt={title}
        className="h-64 transition-all duration-500 opacity-75 hover:opacity-50"
      />
    </Link>
  </div>
)

export default CardImage
