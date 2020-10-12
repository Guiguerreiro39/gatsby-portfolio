import React from "react"
import { Link } from "gatsby"

//CONSTANTS
import linkData from "../../constants/link"

const Links = () =>
  linkData.map(link => {
    return (
      <li className="md:mx-4 md:my-0 my-1">
        <Link
          key={link.id}
          to={link.url}
          className="border-red-500 underlineLink pb-1"
        >
          {link.name}
        </Link>
      </li>
    )
  })

export default Links
