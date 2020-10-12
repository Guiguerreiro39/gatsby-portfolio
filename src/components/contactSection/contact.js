import React from "react"
import { Flip } from "react-reveal"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

//COMPONENTS
import Form from "./form"

const Contact = ({ email }) => {
  const query = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "images/contact_background.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      id="contact"
      className="bg-fixed bg-cover relative bg-center text-gray-100"
      fluid={query.placeholderImage.childImageSharp.fluid}
    >
      <div className="flex flex-col items-center h-full w-full bg-gray-800 bg-opacity-75 py-10">
        <div className="text-center px-5">
          <Flip left>
            <h1 className="text-4xl font-bold">Contact me!</h1>
            <a href={`mailto:${email}`}>
              <p className="text-xl text-red-500 hover:underline">{email}</p>
            </a>
            <p className="my-8">
              If you're shy, you can always use this form instead..
            </p>
          </Flip>
        </div>
        <Form />
      </div>
    </BackgroundImage>
  )
}

export default Contact
