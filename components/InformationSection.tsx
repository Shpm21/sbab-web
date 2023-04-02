'use client'
import Link from 'next/link'
import React from 'react'
import { rootDescription, rootDescription2, rootName } from '../utils/textData'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import GenericContainer from './GenericContainer'
import VideoE from './VideoE'

const InformationSection: React.FC = () => {
  return (
    <>
      <GenericContainer
      >
        <Subtitle subTitle={rootName} />
        <div
          className="
          grid grid-cols-2"
        >
          <div>
            <Paragraph paragraph={rootDescription} justify={false} gridCols2={false} />
            <Subtitle subTitle={'How DoMa Works?'} />
            <Paragraph
              paragraph={rootDescription2}
              justify={false}
              gridCols2={false}
            />
            <Link
              href="/model"
              className="
          py-2
          text-2xl
          font-semibold
          text-blue-500
          hover:text-blue-700
          "
            >
              {'See more...'}
            </Link>
          </div>
          <div
          >
            <VideoE />
          </div>

        </div>




      </GenericContainer>
    </>

  )
}

export default InformationSection
