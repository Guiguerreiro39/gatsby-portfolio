import React from "react"
import { css } from "twin.macro"
import { keyframes } from "@emotion/core"

const Mouse = () => {
  const ScrollAnimation = keyframes`
    0% {
        opacity: 0;
    }
    10% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(10px);
        opacity: 0;
    }
  `

  return (
    <div className="flex-col items-center hidden md:flex">
      <div className="h-8 w-5 border-gray-300 border-3 rounded-t-full rounded-b-full flex justify-center mb-3 animate-bounce">
        <div
          className="h-2 w-1 bg-red-500 mt-1 rounded-t-lg rounded-b-lg"
          css={[
            css`
              animation-name: ${ScrollAnimation};
              animation-duration: 2.2s;
              animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
              animation-iteration-count: infinite;
            `,
          ]}
        ></div>
      </div>
      <p className="inline-block text-gray-300 text-sm font-light">
        Scroll down
      </p>
    </div>
  )
}

export default Mouse
