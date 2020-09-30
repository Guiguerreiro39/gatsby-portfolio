import React from "react"
import { Link } from "gatsby"

//CONSTANTS
import linkData from "../../constants/link"

const Links = () =>
  linkData.map(link => {
    return (
      <Link
        key={link.id}
        to={link.url}
        className="mx-4 border-red-500 hover:text-red-500"
      >
        {link.name}
      </Link>
    )
  })

export default Links
