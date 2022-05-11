import React from "react"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faBook,
  faHiking,
} from "@fortawesome/free-solid-svg-icons"
import tw from "twin.macro"

const TimelineEvent = ({ data, position }) => {
  const experience = {
    professional: faBriefcase,
    educational: faBook,
    personal: faHiking,
  }

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={tw`bg-red-500 text-gray-100 shadow-none`}
      contentArrowStyle={{ borderRight: "7px solid  rgb(245, 101, 101)" }}
      date={data.initialDate}
      iconStyle={tw`bg-red-500 text-gray-100 text-2xl`}
      icon={<FontAwesomeIcon icon={experience[data.experience]} />}
      position={position}
    >
      <h1 className="font-medium text-lg">{data.title}</h1>
      <div className="flex justify-between">
        <h3 className="text-xs font-normal">{data.location}</h3>
        <h3 className="text-xs font-normal">{data.institution}</h3>
      </div>
      <hr className="my-5 mx-10" />
      <h3 className="text-sm font-normal">{data.description}</h3>
      <hr className="my-5 mx-10" />
      <h4 className="font-normal text-xs mt-5">{data.technologies}</h4>
    </VerticalTimelineElement>
  )
}

export default TimelineEvent
