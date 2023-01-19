import GenericContainer from './GenericContainer'
import React from 'react'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import FormInput from './FormInput'
import Carousel from './Carousel'

const ApplicationSection: React.FC = () => {
  return (
    <>
      <GenericContainer>
        <Subtitle subTitle={'Test the Application'} />
        <Paragraph paragraph={'This is a example'} />
        <FormInput />
        <Carousel />
      </GenericContainer>
    </>
  )
}

export default ApplicationSection
