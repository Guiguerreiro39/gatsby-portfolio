import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//COMPONENTS
import Line from "../shared/line"

const Card = ({ icon, title, categories }) => {
  return (
    <div className="relative mb-10 hover:scale-110 transform duration-500">
      <div className="rounded overflow-hidden shadow-lg bg-gray-200 my-5 mx-5 col-span-1 h-auto md:h-64 xl:h-56">
        <div
          className="rounded-full w-20 h-20 flex items-center justify-center
          border-none shadow-lg absolute align-middle left-0 right-0 mx-auto bg-red-500 text-4xl"
          css={["top:-15%;"]}
        >
          <FontAwesomeIcon icon={icon} className="my-3" />
        </div>
        <div className="px-6 py-4 flex flex-col items-center text-center mt-12">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <Line height="3px" width="3rem" />
          <ul className="flex items-center justify-center flex-wrap mx-1">
            {categories.map((category, index) => (
              <li
                key={index}
                className="px-2 py-1 text-xs mx-1 my-1 font-semibold text-gray-800 whitespace-no-wrap border-red-500 rounded-full border-2"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
