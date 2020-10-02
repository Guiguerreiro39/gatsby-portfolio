import React from "react"
import { Flip } from "react-reveal"

//COMPONENTS
import Form from "./form"

const Contact = ({ email }) => {
  return (
    <section
      id="contact"
      className="bg-contact-background bg-fixed bg-cover bg-center text-gray-100"
    >
      <div className="flex flex-col items-center h-full w-full bg-gray-800 bg-opacity-75 py-10">
        <div className="text-center">
          <Flip cascade left>
            <h1 className="text-4xl font-bold">Contact me!</h1>
            <a href={`mailto:${email}`}>
              <p className="text-xl text-red-500 hover:underline">{email}</p>
            </a>
            <p className="my-8">
              If you're shy, you can always use this form instead..
            </p>
          </Flip>
        </div>
        <Form />
      </div>
    </section>
  )
}

export default Contact
