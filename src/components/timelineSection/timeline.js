import React from "react"

//COMPONENTS
import TimelineEvent from "./timelineEvent"

const Timeline = () => {
  return (
    <section
      className="bg-hero-background bg-center bg-cover bg-fixed h-full"
      id="timeline"
    >
      <div className="bg-gray-800 bg-opacity-75">
        <span className="flex justify-center">
          <h1 className="text-4xl text-gray-100 font-semibold pt-10 border-b-4 border-gray-300 pb-4">
            My Life in a Nutshell
          </h1>
        </span>
        <TimelineEvent />
      </div>
    </section>
  )
}

export default Timeline