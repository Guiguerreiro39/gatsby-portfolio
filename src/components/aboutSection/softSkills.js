import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//CONSTANTS
import softData from "../../constants/soft"

const SoftSkills = () => (
  <ul className="flex lg:text-3xl text-2xl mt-5 sm:justify-between justify-center items-center text-center flex-wrap md:flex-no-wrap">
    {softData.map((data, index) => (
      <li key={index} className="mt-2">
        <FontAwesomeIcon icon={data.icon} />
        <p className="lg:text-base sm:text-xs text-sm mx-2">{data.title}</p>
      </li>
    ))}
  </ul>
)

export default SoftSkills
