import React from "react"
import Typed from "react-typed"
import tw, { styled } from "twin.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTerminal } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

//COMPONENTS
import Line from "../shared/line"

const Quote = ({ text }) => (
  <div className="flex flex-col items-center">
    <Line height="2px" width="6rem" />
    <div>
      <h4 className="text-base">{text}</h4>
    </div>
  </div>
)

const HeroButton = styled(Link)([
  tw`py-2 px-3 border-2 font-bold rounded-md hover:border-red-500 hover:text-red-500 text-base`,
])

const HeroText = ({ name }) => (
  <div className="items-center flex flex-col">
    <div>
      <div>
        <p className="pl-2 text-red-500">Howdy, my name is</p>
      </div>
      <h1 className="text-8xl">{name}</h1>
      <h2 className="ml-10 mb-10 text-4xl">
        <FontAwesomeIcon icon={faTerminal} className="mr-5" />
        <Typed
          loop
          typeSpeed={80}
          backSpeed={30}
          strings={[
            "I'm a <span class='accent text-red-500'>Software Engineer</span>.",
            "I'm a <span class='accent text-red-500'>Full Stack Developer</span>.",
            "I'm a <span class='accent text-red-500'>creative mind</span>.",
            "I'm an <span class='accent text-red-500'>awesome person</span>.",
          ]}
          smartBackspace
          backDelay={1500}
          loopCount={0}
          showCursor
          cursorChar="|"
          className="typed"
        />
      </h2>
    </div>
    <div className="text-center mb-10">
      <HeroButton to="/contact">Call me, maybe</HeroButton>
      <HeroButton className="mx-4" to="/projects">
        My CV
      </HeroButton>
    </div>
    <Quote text="Transform ideas into reality, with the amazing quality only I can offer!" />
  </div>
)

export default HeroText
