import React from "react"
import { Link } from "gatsby"

//CONSTANTS
import linkData from "../../constants/link"

const Links = ({ itemStyle }) =>
  linkData.map(link => {
    return (
      <li className={itemStyle} key={link.id}>
        <Link to={link.url} className="border-red-500 underlineLink pb-1">
          {link.name}
        </Link>
      </li>
    )
  })

export default Links
