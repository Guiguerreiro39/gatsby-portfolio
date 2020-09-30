import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//CONSTANTS
import softData from "../../constants/soft"

const SoftSkills = () => (
  <ul className="flex text-3xl mt-5 justify-between text-center">
    {softData.map((data, index) => (
      <li key={index}>
        <FontAwesomeIcon icon={data.icon} />
        <p className="text-base">{data.title}</p>
      </li>
    ))}
  </ul>
)

export default SoftSkills
