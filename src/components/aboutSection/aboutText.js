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
    <div className="flex my-10 justify-center items-start container m-auto">
      <Flip left>
        <Social
          styleList="text-2xl mr-8 mt-5"
          styleItem="my-2 hover:-translate-y-1 transform duration-500 hover:text-red-500"
        />
        <div className="text-xl font-semibold text-gray-800 text-center">
          <Img
            fluid={data.profileImage}
            alt="Profile Picture"
            className="rounded-full w-56 h-56 align-middle border-none shadow-lg mb-6"
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
        <div className="col-span-1 w-1/2 ml-20">
          <h2 className="text-3xl font-semibold">Who am I?</h2>
          <Line width="4rem" height="3px" padding="pb-3" />
          <p className="text-lg mt-5">{data.introduction}</p>
          <SoftSkills />
        </div>
      </Flip>
    </div>
  )
}

export default AboutText
