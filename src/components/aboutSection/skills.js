import React from "react"
import { Fade } from "react-reveal"

//COMPONENTS
import Card from "./card"

//CONSTANTS
import skillData from "../../constants/skill"

const Skills = () => {
  return (
    <Fade cascade bottom>
      <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center container m-auto">
        {skillData.map(skill => (
          <li key={skill.id}>
            <Card
              icon={skill.icon}
              title={skill.title}
              categories={skill.categories}
            />
          </li>
        ))}
      </ul>
    </Fade>
  )
}

export default Skills
