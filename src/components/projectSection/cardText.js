import React from "react"
import { css } from "twin.macro"

const CardText = ({ title, description }) => (
  <span
    className="mx-10 absolute z-10 left-0 right-0 text-gray-100 pointer-events-none"
    css={[
      css`
        top: 30%;
      `,
    ]}
  >
    <h1
      className="text-xl font-bold mb-5"
      css={[
        css`
          text-shadow: 1.4px 1.4px rgba(0, 0, 0, 0.5);
        `,
      ]}
    >
      {title}
    </h1>
    <p
      css={[
        css`
          text-shadow: 1.4px 1.4px rgba(0, 0, 0, 0.5);
        `,
      ]}
    >
      {description}
    </p>
  </span>
)

export default CardText
