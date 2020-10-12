import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { Flip } from "react-reveal"

//COMPONENTS
import Line from "../shared/line"
import SoftSkills from "./softSkills"
import Social from "../shared/social"

const AboutText = ({ data }) => {
  return (
    <div className="flex my-10 justify-center md:items-start items-center container m-auto md:flex-row flex-col">
      <Flip left>
        <Social
          styleList="flex md:flex-col lg:text-2xl md:text-xl md:mr-8 md:mr-5 md:mt-5 text-2xl sm:mb-3 md:mb-0"
          styleItem="my-2 hover:-translate-y-1 transform duration-500 hover:text-red-500 md:mx-0 mx-2 sm:mx-4"
        />
        <div className="text-xl font-semibold text-gray-800 text-center">
          <Img
            fluid={data.profileImage}
            alt="Profile Picture"
            className="rounded-full lg:w-56 w-48 h-48 lg:h-56 sm:w-56 sm:h-56 align-middle border-none shadow-lg mb-6"
          />
          <div className="transform hover:scale-110 duration-300 inline-block">
            <Link
              to="/#contact"
              className="bg-red-500 text-gray-100 shadow-md px-3 py-2 rounded-full"
            >
              Get in touch!
            </Link>
          </div>
        </div>
      </Flip>
      <Flip right>
        <div className="md:w-1/2 md:ml-20 md:mr-0 mx-10 md:mt-0 mt-10">
          <h2 className="text-3xl font-semibold">Who am I?</h2>
          <Line width="4rem" height="3px" padding="pb-3" />
          <p className="md:text-lg text-base mt-5">{data.introduction}</p>
          <SoftSkills />
        </div>
      </Flip>
    </div>
  )
}

export default AboutText
