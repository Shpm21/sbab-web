import Biography from './Biography'
import { getAboutUsers } from '../utils/textData'
import React from 'react'
import Subtitle from './Subtitle'
import GenericContainer from './GenericContainer'
const AboutUs: React.FC = () => {
  return (
    <>
      <GenericContainer
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
      </GenericContainer>
    </>
  )
}

export default AboutUs
