import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

//COMPONENTS
import Line from "../shared/line"
import SoftSkills from "./softSkills"
import Social from "../shared/social"

const AboutText = ({ data }) => (
  <div className="flex my-10 justify-center items-start container m-auto">
    <Social
      styleList="text-2xl mr-8 mt-5"
      styleItem="my-2 hover:text-red-500"
    />
    <div className="text-xl font-semibold text-gray-800 text-center">
      <Img
        fluid={data.profileImage}
        alt="Profile Picture"
        className="rounded-full w-56 h-56 align-middle border-none shadow-lg mb-6"
      />
      <Link
        to="/#contact"
        className="bg-red-500 shadow-md px-3 py-2 rounded-full hover:bg-red-400"
      >
        Get in touch!
      </Link>
    </div>
    <div className="col-span-1 w-1/2 ml-20">
      <h2 className="text-3xl font-semibold">Who am I?</h2>
      <Line width="4rem" height="3px" padding="pb-3" />
      <p className="text-lg mt-5">{data.introduction}</p>
      <SoftSkills />
    </div>
  </div>
)

export default AboutText
