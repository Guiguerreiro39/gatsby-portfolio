import React from "react"
import { Bounce, Rotate } from "react-reveal"

const Form = () => (
  <form
    name="contact"
    method="POST"
    className="text-center px-10 w-full container m-auto"
    data-netlify="true"
    netlify-honeypot="bot-field"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center mb-10 text-gray-800">
      <Bounce cascade bottom>
        <div className="flex flex-col mr-5 ml-5 lg:ml-0 lg:mr-10">
          <input
            type="text"
            name="name"
            placeholder="Your name *"
            className="bg-gray-300 bg-opacity-75 p-4 placeholder-gray-600 focus:shadow-outline outline-none mb-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email *"
            className="bg-gray-300 bg-opacity-75 p-4 placeholder-gray-600 focus:shadow-outline outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your phone number"
            className="bg-gray-300 bg-opacity-75 p-4 placeholder-gray-600 focus:shadow-outline outline-none mt-4 lg:mb-0 mb-4"
          />
        </div>
      </Bounce>
      <input type="hidden" name="form-name" value="contact" />
      <Bounce bottom>
        <textarea
          name="content"
          placeholder="Write me something nice.."
          className="h-56 p-4 resize-none bg-gray-300 bg-opacity-75 placeholder-gray-600 focus:shadow-outline outline-none"
          required
        />
      </Bounce>
    </div>
    <div className="transform hover:scale-110 duration-300 inline-block">
      <Rotate bottom left>
        <button
          type="submit"
          className="bg-red-500 text-2xl p-3 rounded-lg focus:outline-none bg-opacity-75"
        >
          Send message!
        </button>
      </Rotate>
    </div>
  </form>
)

export default Form
