import React from "react"
import { css } from "twin.macro"
import { Link } from "gatsby"

const CardText = ({ title, description, github, demo }) => (
  <span
    className="mx-10 absolute z-10 left-0 right-0 text-gray-100 pointer-events-none"
    css={[
      css`
        top: 15%;
      `,
    ]}
  >
    <h1
      className="text-xl font-bold mb-5"
      css={[
        css`
          text-shadow: 1.4px 1.4px rgba(0, 0, 0, 0.8);
        `,
      ]}
    >
      {title}
    </h1>
    <p
      className="text-sm"
      css={[
        css`
          text-shadow: 1.4px 1.4px rgba(0, 0, 0, 0.8);
        `,
      ]}
    >
      {description}
    </p>
    <div className="mt-5 pointer-events-auto">
      <Link
        to={github}
        target="_blank"
        className="bg-red-600 p-2 rounded hover:bg-red-700"
      >
        Source
      </Link>
      {demo ? (
        <Link
          to={demo}
          target="_blank"
          className="bg-red-600 p-2 ml-3 rounded hover:bg-red-700"
        >
          Demo
        </Link>
      ) : (
        <span></span>
      )}
    </div>
  </span>
)

export default CardText
