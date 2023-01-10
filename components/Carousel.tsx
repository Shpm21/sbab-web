import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { getImages } from '../utils/data'
import Image from 'next/image'
import React from 'react'
const images = getImages()
const Carousel: React.FC = () => {
  const moveNext = () => {}

  const movePrev = () => {}

  const isDisabled = (status: string) => {}
  return (
    <>
      <div className="carousel my-12 mx-auto">
        <div className="relative overflow-hidden">
          <div className="left flex justify-between">
            <button
              // onClick={movePrev}
              className="z-10 m-0 h-full w-10 p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out hover:bg-blue-900/75 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
              disabled={false}
            >
              <span className="sr-only">Prev</span>
            </button>
            <button
              // onClick={moveNext}
              className="z-10 m-0 h-full w-10 p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out hover:bg-blue-900/75 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-25"
              disabled={false}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-5 h-12 w-20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
          <div className="carousel-container relative z-0 flex touch-pan-x snap-x snap-mandatory gap-1 overflow-hidden scroll-smooth">
            {images.map((image, index) => {
              return (
                <Image
                  src={image.src}
                  alt={image.alt}
                  key={index}
                  width={300}
                  height={300}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Carousel
