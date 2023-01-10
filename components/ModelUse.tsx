import React from 'react'
import { modelUseText1, modelUseText2 } from '../utils/textData'

const ModelUse: React.FC = () => {
  return (
    <>
      <div
        id="about us"
        className="
          container mx-auto
            px-4 sm:px-6 lg:px-8
            py-8
            dark:bg-gray-800
            rounded-lg
            flex flex-col
        justify-center
        min-h-screen
        sm:py-0
      "
      >
        <div
          className="
                            grid
            grid-cols-1
            gap-6
            md:gap-8
            mt-6
            text-gray-600
            dark:text-gray-400
      "
        >
          <h1
            className="
            text-4xl
            font-bold
            text-font-primary
            dark:text-white
            md:text-6xl
            md:justify-center


         "
          >
            Model Usage
          </h1>
        </div>
        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:gap-8
            mt-6
            text-gray-600
            dark:text-gray-400
      "
        >
          <p
            className="
            text-font-secondary
            dark:text-gray-400
            md:text-2xl
            text-justify
           "
          >
            {modelUseText1}
          </p>
        </div>
        <div
          className="
            grid
            grid-cols-1
            gap-6
            md:gap-8
            mt-6
            text-gray-600
            dark:text-gray-400
      "
        >
          <p
            className="
            text-font-secondary
            dark:text-gray-400
            md:text-2xl
            text-justify
           "
          >
            {modelUseText2}
          </p>
        </div>
      </div>
    </>
  )
}

export default ModelUse
