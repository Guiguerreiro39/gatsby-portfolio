import React from "react"
import tw, { css } from "twin.macro"
import { Roll, Flip } from "react-reveal"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

// COMPONENTS
import Mouse from "./mouse"
import Social from "../shared/social"
import HeroText from "./heroText"

const Hero = ({ email, name }) => {
  const LineVertical = () => (
    <div
      className="bg-white mt-4"
      css={[
        css`
          height: 5rem;
          width: 1px;
        `,
      ]}
    ></div>
  )

  const ColLeft = () => (
    <div className="col-span-1 flex flex-col items-center justify-end text-lg h-full md:visible invisible">
      <Social styleItem="mb-5 hover:-translate-y-1 transform duration-500 hover:text-red-500" />
      <LineVertical />
    </div>
  )

  const EmailVertical = () => (
    <p
      css={[
        css`
          writing-mode: vertical-rl;
          text-orientation: mixed;
        `,
        tw`text-sm pb-5`,
      ]}
    >
      {email}
    </p>
  )

  const ColRight = () => (
    <div className="col-span-1 flex flex-col items-center justify-end h-full md:visible invisible">
      <EmailVertical />
      <LineVertical />
    </div>
  )

  const query = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "images/hero_background.jpg" }
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
      className="bg-center bg-cover bg-fixed h-screen"
      fluid={query.placeholderImage.childImageSharp.fluid}
      id="hero"
    >
      <div className="h-full bg-gray-800 bg-opacity-75">
        <div className="w-full h-full grid grid-cols-12 gap-4 text-gray-100 overflow-y-scroll overflow-x-hidden">
          <Flip right delay={3000}>
            <ColLeft />
          </Flip>
          <div className="col-span-10 flex flex-col justify-between md:pt-40 pt-24 pb-5">
            <HeroText name={name} />
            <Flip right top delay={3000}>
              <Social
                styleItem="text-2xl md:invisible visible mx-4"
                styleList="flex justify-center mt-4"
              />
            </Flip>
            <Roll delay={3000}>
              <Mouse />
            </Roll>
          </div>
          <Flip left delay={3000}>
            <ColRight />
          </Flip>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
