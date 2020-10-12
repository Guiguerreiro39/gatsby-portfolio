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
    <nav className="text-base font-bold md:flex hidden" id="nav-content">
      <ul className="flex justify-between items-center md:flex-row flex-col">
        <Links itemStyle="md:mx-4 md:my-0 my-1" />
        <li className="transform hover:scale-110 duration-300 md:mx-4 md:my-0 my-4">
          <Link
            to="/resume"
            className="p-2 border-white border-2 rounded hover:border-red-500 hover:text-red-500"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  )

  const defaultStyle =
    "py-3 shadow-md md:shadow-none md:py-6 md:bg-transparent bg-gray-800 md:absolute fixed"
  const [navBackground, setNavBackground] = useState(defaultStyle)
  const navRef = useRef()
  navRef.current =
    typeof window !== `undefined` ? window.pageYOffset + 100 : null

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollpos =
        typeof window !== `undefined` ? window.pageYOffset : null

      if (currentScrollpos === 0) {
        setNavBackground(defaultStyle)
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

    document.getElementById("nav-toggle").onclick = function () {
      document.getElementById("nav-content").classList.toggle("hidden")
    }

    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Fade top delay={3000}>
      <header
        className={`w-full transition-all duration-500 z-10 flex flex-col md:flex-row justify-between items-center px-8 text-gray-100 ${navBackground}`}
      >
        <div className="flex justify-between w-full md:w-auto">
          <Logo to="/#hero">GG</Logo>
          <div className="md:hidden block">
            <button
              className="flex items-center px-3 py-2 border rounded focus:outline-none"
              id="nav-toggle"
            >
              <svg
                className="fill-current h-5 w-5"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <NavBar />
      </header>
    </Fade>
  )
}

export default Header
