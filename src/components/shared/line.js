import React from "react"
import { css } from "twin.macro"

const Line = ({ height, width, margin }) => (
  <div
    className={`bg-red-500 ${margin ? margin : "mb-5"}`}
    css={[
      css`
        height: ${height};
        width: ${width};
      `,
    ]}
  ></div>
)

export default Line
