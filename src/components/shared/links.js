import React from "react"
import tw, { styled } from "twin.macro"
import { Link } from "gatsby"

//CONSTANTS
import linkData from "../../constants/link"

const Links = () => {
  const HeaderLink = styled(Link)([
    tw`mx-4 border-red-500 border-0 hover:border-b-2`,
  ])

  const links = linkData.map(link => {
    return (
      <HeaderLink key={link.id} to={link.url}>
        {link.name}
      </HeaderLink>
    )
  })

  return links
}

export default Links
