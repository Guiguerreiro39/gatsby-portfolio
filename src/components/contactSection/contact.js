import React from "react"
import { Link } from "gatsby"

//COMPONENTS
import Form from "./form"

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center bg-contact-background bg-cover bg-center text-gray-100"
    >
      <div className="h-full w-full bg-gray-800 bg-opacity-75 py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Contact me!</h1>
          <Link to="/" className="text-xl text-red-500 hover:underline">
            guiguerreiro10@hotmail.com
          </Link>
          <p className="my-8">
            If you're shy, you can always use this form instead..
          </p>
        </div>
        <Form />
      </div>
    </section>
  )
}

export default Contact
