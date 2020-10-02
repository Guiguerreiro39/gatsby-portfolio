import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import tw, { styled, css } from "twin.macro"
import variables from "../styles/global.scss"
import { Fade } from "react-reveal"

// COMPONENTS
import Links from "./shared/links"

const Header = () => {
  const Logo = styled(Link)([
    tw`text-2xl hover:text-red-500`,
    css`
      font-family: ${variables.fontLogo};
    `,
  ])

  const NavBar = () => (
    <nav className="flex justify-between items-center px-8 text-gray-100">
      <Logo to="/#Hero">GG</Logo>
      <div className="text-base font-bold flex">
        <Links />
        <div className="transform hover:scale-110 duration-300">
          <Link
            to="/resume"
            className="mx-4 p-2 border-white border-2 rounded hover:border-red-500 hover:text-red-500"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  )

  const [navBackground, setNavBackground] = useState("py-6 absolute")
  const navRef = useRef()
  navRef.current =
    typeof window !== `undefined` ? window.pageYOffset + 100 : null

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollpos =
        typeof window !== `undefined` ? window.pageYOffset : null

      if (currentScrollpos === 0) {
        setNavBackground("py-6 absolute")
        navRef.current = currentScrollpos + 100
      } else {
        if (navRef.current < currentScrollpos) {
          setNavBackground("top-1/2n fixed")
        } else {
          setNavBackground("bg-gray-800 shadow-md py-3 top-0 fixed")
        }
        navRef.current = currentScrollpos
      }
    }

    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Fade top delay={3000}>
      <header
        className={`w-full transition-all duration-500 z-10 ${navBackground}`}
      >
        <NavBar />
      </header>
    </Fade>
  )
}

export default Header
