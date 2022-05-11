import React from "react"
import Typed from "react-typed"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTerminal } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import { Flip, Fade } from "react-reveal"

//FILES
import CV from "../../assets/files/Guilherme-Guerreiro-CV.pdf"

//COMPONENTS
import Line from "../shared/line"

const Quote = ({ text }) => (
  <div className="flex flex-col items-center">
    <Line height="2px" width="6rem" />
    <div>
      <h4 className="text-base text-center">{text}</h4>
    </div>
  </div>
)

const HeroButton = ({ to, text, download = false }) => {
  const style =
    "py-2 px-3 border-2 font-bold rounded-md hover:border-red-500 hover:text-red-500 text-base"
  return (
    <div className="hover:scale-110 duration-300 transform mx-2">
      {download ? (
        <a href={to} className={style} download>
          {text}
        </a>
      ) : (
        <Link to={to} className={style}>
          {text}
        </Link>
      )}
    </div>
  )
}

const HeroText = ({ name }) => {
  let typed
  return (
    <div className="items-center flex flex-col">
      <div className="md:mx-0 mx-32">
        <div>
          <Flip right cascade duration={1000}>
            <p className="pl-2 text-red-500 sm:pl-5">Hi there! My name is</p>
          </Flip>
        </div>
        <Flip bottom delay={1500} duration={1000}>
          <h1 className="lg:text-8xl sm:text-7xl text-6xl text-center">
            {name}
          </h1>
        </Flip>
        <Flip
          bottom
          delay={3000}
          onReveal={async () => {
            await new Promise(r => setTimeout(r, 3500))
            typed.start()
          }}
        >
          <h2 className="md:ml-10 mb-10 md:text-4xl sm:text-2xl text-xl font-normal pl-0 sm:pl-5">
            <FontAwesomeIcon icon={faTerminal} className="mr-5" />
            <Typed
              loop
              stopped
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
              typedRef={typedInstance => (typed = typedInstance)}
              cursorChar="|"
              className="typed"
            />
          </h2>
        </Flip>
      </div>
      <Flip top delay={3000}>
        <div className=" flex items-center mb-10">
          <HeroButton to="/#contact" text="Call me, maybe" />
          <HeroButton to={CV} download={true} text="My CV" />
        </div>
      </Flip>
      <Fade delay={3000}>
        <Quote text="Transform ideas into reality, with the amazing quality only I can offer!" />
      </Fade>
    </div>
  )
}

export default HeroText
