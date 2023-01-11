import Biography from './Biography'
import { getAboutUsers } from '../utils/textData'
import React from 'react'
import Subtitle from './Subtitle'
const AboutUs: React.FC = () => {
  return (
    <>
      <div
        id="about us"
        className="
        container mx-auto
        flex min-h-screen flex-col
        justify-center
        rounded-lg
        px-4 py-8
        dark:bg-gray-800
        sm:px-6
        sm:py-20
        md:-mt-20
        lg:px-8
      "
      >
        <Subtitle subTitle={'About Us'} />
        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-6
            text-gray-600
            dark:text-gray-400
            md:grid-cols-2
            md:gap-8
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
