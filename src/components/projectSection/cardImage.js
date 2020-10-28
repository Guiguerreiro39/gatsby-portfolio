import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

//COMPONENTS
import CardText from "./cardText"

const CardImage = ({ github, demo, image, title, description }) => {
  const Text = styled.span`
    opacity: 0;
  `

  const Image = styled.div`
    opacity: 0.75;
  `

  const Container = styled.div`
    &:hover ${Text} {
      opacity: 1;
    }
    &:hover ${Image} {
      opacity: 0.2;
    }
  `

  return (
    <Container className="col-span-1 bg-gray-900 inset text-center relative">
      <Image className="transition-all duration-500">
        <Img fluid={image} alt={title} className="h-64" />
      </Image>
      <Text className="transition-all duration-500">
        <CardText
          title={title}
          description={description}
          github={github}
          demo={demo}
        />
      </Text>
    </Container>
  )
}

export default CardImage
