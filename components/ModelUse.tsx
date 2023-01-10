import React from 'react'
import { modelUseText1, modelUseText2 } from '../utils/textData'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'

const ModelUse: React.FC = () => {
  return (
    <>
      <div
        id="about us"
        className="
          container mx-auto
            flex min-h-screen flex-col
            justify-center
            rounded-lg
            px-4
            py-8 dark:bg-gray-800
        sm:px-6
        sm:py-0
        lg:px-8
      "
      >
        <Subtitle subTitle={'Model Usage'} />
        <Paragraph paragraph={modelUseText1} justify={true} gridCols2={false} />
        <Paragraph paragraph={modelUseText2} justify={true} gridCols2={false} />
      </div>
    </>
  )
}

export default ModelUse
