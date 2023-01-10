import Carousel from './Carousel'
import React from 'react'

const ImagesSection: React.FC = () => {
  return (
    <>
      <div
        id="images"
        className="container mx-auto
            px-4 sm:px-6 lg:px-8
            py-8
            dark:bg-gray-800
            rounded-lg"
      >
        <h1 className="text-4xl font-bold text-font-primary dark:text-white">
          Images Section
        </h1>
        <Carousel />
      </div>
    </>
  )
}

export default ImagesSection
