import React from "react"
import tw, { css } from "twin.macro"

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

  const ColRight = () => (
    <div className="col-span-1 flex flex-col items-center justify-end text-lg">
      <Social styleClass="mb-5 hover:text-red-500" />
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

  const ColLeft = () => (
    <div className="col-span-1 flex flex-col items-center justify-end">
      <EmailVertical />
      <LineVertical />
    </div>
  )

  return (
    <section
      className="bg-hero-background bg-center bg-cover bg-fixed h-screen"
      id="Hero"
    >
      <div className="h-screen bg-gray-800 bg-opacity-75">
        <div className="w-full h-full grid grid-cols-12 gap-4 text-gray-300">
          <ColRight />
          <div className="col-span-10 flex flex-col justify-between pt-40 pb-5">
            <HeroText name={name} />
            <Mouse />
          </div>
          <ColLeft />
        </div>
      </div>
    </section>
  )
}

export default Hero
