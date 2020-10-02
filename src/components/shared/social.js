import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const Social = ({ styleItem, styleList }) => {
  const data = useStaticQuery(graphql`
    query {
      sanityAuthor(name: { eq: "Guilherme Guerreiro" }) {
        github
        facebook
        instagram
        linkedin
      }
    }
  `)

  const socialData = [
    {
      id: 1,
      name: "facebook",
      url: data.sanityAuthor.facebook,
      icon: faFacebook,
    },
    {
      id: 2,
      name: "instagram",
      url: data.sanityAuthor.instagram,
      icon: faInstagram,
    },
    {
      id: 3,
      name: "github",
      url: data.sanityAuthor.github,
      icon: faGithub,
    },
    {
      id: 4,
      name: "linkedin",
      url: data.sanityAuthor.linkedin,
      icon: faLinkedin,
    },
  ]

  const links = socialData.map(link => {
    return (
      <li key={link.id}>
        <Link to={link.url} target="_blank">
          <FontAwesomeIcon icon={link.icon} className={styleItem} />
        </Link>
      </li>
    )
  })

  return <ul className={styleList}>{links}</ul>
}

export default Social
