import GenericContainer from './GenericContainer'
import React from 'react'
import Subtitle from './Subtitle'
import Paragraph from './Paragraph'
import FormInput from './FormInput'

const ApplicationSection: React.FC = () => {
  return (
    <>
      <GenericContainer>
        <Subtitle subTitle={'Test the Application'} />
        <Paragraph paragraph={'Please upload a file with the xlsx extension to test DoMa.'} />
        {/*<FormInput />*/}
      </GenericContainer>
    </>
  )
}

export default ApplicationSection
