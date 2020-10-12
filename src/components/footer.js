import React from "react"

//COMPONENTS
import Social from "./shared/social"
import Links from "./shared/links"
import Line from "./shared/line"

const Footer = () => {
  return (
    <footer className="px-10 flex flex-col items-center justify-center bg-gray-800 text-gray-100 h-48">
      <Social
        styleItem="mx-5 hover:-translate-y-1 transform duration-500 hover:text-red-500"
        styleList="flex justify-center text-2xl"
      />
      <ul className="mt-4 flex justify-between">
        <Links itemStyle="mx-4" />
      </ul>
      <Line width="5rem" height="2px" margin="mt-4 mx-auto" />
      <p className="text-xs text-center mt-4">
        Copyright &copy; {new Date().getFullYear()} Guilherme Guerreiro
      </p>
    </footer>
  )
}

export default Footer
