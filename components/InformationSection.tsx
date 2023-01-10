import Link from 'next/link'
import React from 'react'
import { rootDescription, rootDescription2, rootName } from '../utils/textData'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'

const InformationSection: React.FC = () => {
  return (
    <div
      className="
      container mx-auto
        flex min-h-screen flex-col
        justify-center
        px-4 py-8
        sm:px-6
        sm:py-0
        lg:px-8
        "
    >
      <Subtitle subTitle={rootName} />
      <Paragraph paragraph={rootDescription} justify={false} gridCols2={true} />
      <Subtitle subTitle={'How DoMa Works?'} />
      <Paragraph
        paragraph={rootDescription2}
        justify={false}
        gridCols2={true}
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
  )
}

export default InformationSection
