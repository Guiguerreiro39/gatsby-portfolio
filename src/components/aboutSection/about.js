import React from "react"

//COMPONENTS
import Skills from "./skills"
import AboutText from "./aboutText"

const About = ({ data }) => {
  return (
    <section className="bg-gray-300 text-gray-800 pt-20 pb-10" id="why_me">
      <Skills />
      <AboutText data={data} />
    </section>
  )
}

export default About
