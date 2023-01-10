import Biography from './Biography'
import { getAboutUsers } from '../utils/data'
import React from 'react'
const AboutUs: React.FC = () => {
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
          className="                 grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            md:gap-8
            mt-6
            text-gray-600
            dark:text-gray-400"
        >
          <h1
            className="            text-4xl
            font-bold
            text-font-primary
            dark:text-white
            //responsive to mobile
            md:text-6xl
            md:justify-center
            //lg
            lg:text-7xl"
          >
            About Us
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
          {getAboutUsers()!.map((aboutUser) => (
            <Biography aboutUser={aboutUser} key={aboutUser.name} />
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutUs
