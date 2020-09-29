import React from "react"

//COMPONENTS
import Skills from "./skills"
import AboutText from "./aboutText"

const About = ({ data }) => {
  return (
    <section className="bg-gray-300 text-gray-800 py-20" id="about">
      <Skills />
      <AboutText data={data} />
    </section>
  )
}

export default About
