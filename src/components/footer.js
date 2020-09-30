import React from "react"

//COMPONENTS
import Social from "./shared/social"
import Links from "./shared/links"
import Line from "./shared/line"

const Footer = () => {
  return (
    <footer className="px-10 flex items-center justify-center bg-gray-800 text-gray-100 h-48">
      <div>
        <Social
          styleItem="mx-5 hover:text-red-500"
          styleList="flex text-3xl justify-center"
        />
        <div className="mt-4">
          <Links />
        </div>
        <Line width="5rem" height="2px" margin="mt-4 mx-auto" />
        <p className="text-xs text-center mt-4">
          Copyright &copy; {new Date().getFullYear()} Guilherme Guerreiro
        </p>
      </div>
    </footer>
  )
}

export default Footer
