import React from "react"

//COMPONENTS
import Card from "./card"

//CONSTANTS
import skillData from "../../constants/skill"

const Skills = () => {
  return (
    <div className="grid grid-cols-3 items-center container m-auto px-20">
      {skillData.map(skill => (
        <Card
          key={skill.id}
          icon={skill.icon}
          title={skill.title}
          categories={skill.categories}
        />
      ))}
    </div>
  )
}

export default Skills
