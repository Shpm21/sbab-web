import React from 'react'
import { modelUseText1, modelUseText2 } from '../utils/textData'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import GenericContainer from './GenericContainer'

const ModelUse: React.FC = () => {
  return (
    <>
      <GenericContainer
      >
        <Subtitle subTitle={'Model Usage'} />
        <Paragraph paragraph={modelUseText1} justify={true} gridCols2={false} />
        <Paragraph paragraph={modelUseText2} justify={true} gridCols2={false} />
      </GenericContainer>
    </>
  )
}

export default ModelUse
