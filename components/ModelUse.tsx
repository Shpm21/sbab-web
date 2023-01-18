import React from 'react'
import { modelUseText1, modelUseText2 } from '../utils/textData'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import GenericContainer from './GenericContainer'
import { getModelUsageImage } from '../utils/data'
import Image from 'next/image'

const ModelUse: React.FC = () => {
  const modelUsageImage = getModelUsageImage()
  return (
    <>
      <GenericContainer>
        <Subtitle subTitle={'Model Usage'} />
        <Paragraph paragraph={modelUseText1} justify={true} gridCols2={false} />
        <div
          className="
          mt-6 grid grid-cols-1
          place-items-center
        "
        >
          <Image
            src={modelUsageImage}
            alt={'model-image'}
            width={800}
            height={800}
          />
        </div>
        <Paragraph paragraph={modelUseText2} justify={true} gridCols2={false} />
      </GenericContainer>
    </>
  )
}

export default ModelUse
