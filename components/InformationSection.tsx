import Link from 'next/link'
import React from 'react'
import { rootDescription, rootName } from '../utils/textData'

const InformationSection: React.FC = () => {
  return (
    <div
      className="
      container mx-auto
        px-4 sm:px-6 lg:px-8
        py-8
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
            {/*md:grid-cols-2*/}
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
            md:-mt-20

         "
        >
          {rootName}
        </h1>
      </div>
      <div
        className="
            grid
            grid-cols-1
            md:grid-cols-2
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
            md:justify-center
            

           "
        >
          {rootDescription}
        </p>
      </div>

      <Link
        href="/model"
        className="
        text-2xl
        text-blue-500
        hover:text-blue-700
        font-semibold
        py-2

         "
      >
        {'See more...'}
      </Link>
    </div>
  )
}

export default InformationSection
