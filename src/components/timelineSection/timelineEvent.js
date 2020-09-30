import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import tw from "twin.macro"

const TimelineEvent = () => (
  <VerticalTimeline className="overflow-y-scroll text-gray-300">
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={tw`bg-red-500 text-gray-100 shadow-none`}
      contentArrowStyle={{ borderRight: "7px solid  rgb(245, 101, 101)" }}
      date="2012"
      iconStyle={tw`bg-red-500 text-gray-100 text-2xl`}
      icon={<FontAwesomeIcon icon={faFacebook} />}
    >
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management,
        Team Leading
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={tw`bg-red-500 text-gray-100 shadow-none`}
      contentArrowStyle={{ borderRight: "7px solid  rgb(245, 101, 101)" }}
      date="2012"
      iconStyle={tw`bg-red-500 text-gray-100 text-2xl`}
      icon={<FontAwesomeIcon icon={faFacebook} />}
    >
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management,
        Team Leading
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={tw`bg-red-500 text-gray-100 shadow-none`}
      contentArrowStyle={{ borderRight: "7px solid  rgb(245, 101, 101)" }}
      date="2012"
      iconStyle={tw`bg-red-500 text-gray-100 text-2xl`}
      icon={<FontAwesomeIcon icon={faFacebook} />}
    >
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management,
        Team Leading
      </p>
    </VerticalTimelineElement>
  </VerticalTimeline>
)

export default TimelineEvent
