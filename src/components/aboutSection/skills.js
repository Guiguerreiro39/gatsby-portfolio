import React from "react"
import { Fade } from "react-reveal"

//COMPONENTS
import Card from "./card"

//CONSTANTS
import skillData from "../../constants/skill"

const Skills = () => {
  return (
    <Fade cascade bottom>
      <ul className="grid grid-cols-3 items-center container m-auto px-20">
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
