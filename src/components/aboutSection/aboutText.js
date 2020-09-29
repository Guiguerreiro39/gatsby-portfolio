import React from "react"
import Img from "gatsby-image"

//COMPONENTS
import Line from "../shared/line"

const AboutText = ({ data }) => (
  <div className="flex my-10 justify-center items-center container m-auto">
    <Img
      fluid={data.profileImage}
      alt="Profile Picture"
      className="rounded-full w-56 h-56 align-middle border-none shadow-lg"
    />
    <div className="col-span-1 w-1/2 ml-20">
      <h2 className="text-3xl font-semibold">Who am I?</h2>
      <Line width="4rem" height="3px" padding="pb-3" />
      <p className="text-lg mt-5">{data.introduction}</p>
    </div>
  </div>
)

export default AboutText
