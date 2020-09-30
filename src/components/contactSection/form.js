import React from "react"

const Form = () => (
  <form
    name="contact"
    method="POST"
    className="text-center container m-auto"
    data-netlify="true"
    netlify-honeypot="bot-field"
  >
    <div className="grid grid-cols-2 justify-center items-center mb-10 text-gray-800">
      <div className="grid grid-rows-3 gap-5 mr-10 ">
        <input
          type="text"
          name="name"
          placeholder="Your name *"
          className=" bg-gray-300 bg-opacity-75 p-4 placeholder-gray-600 outline-none focus:shadow-outline"
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
          className="bg-gray-300 bg-opacity-75 p-4 placeholder-gray-600 focus:shadow-outline outline-none"
        />
      </div>
      <input type="hidden" name="form-name" value="contact" />
      <textarea
        name="content"
        placeholder="Write me something nice.."
        className="h-56 p-4 resize-none bg-gray-300 bg-opacity-75 placeholder-gray-600 focus:shadow-outline outline-none"
        required
      />
    </div>
    <button
      type="submit"
      className="bg-red-500 text-2xl p-3 rounded-lg hover:bg-red-400 focus:outline-none bg-opacity-75 hover:bg-opacity-75"
    >
      Send message!
    </button>
  </form>
)

export default Form
