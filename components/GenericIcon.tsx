import Image from 'next/image'
import React from 'react'

interface Props {
  src: string
  width: number
  height: number
}
const GenericIcon: React.FC<Props> = ({ src, width, height }) => {
  return (
    <div
      className="4 mb-6 flex
            h-14 w-14 items-center
             justify-center rounded-full bg-white shadow-md md:mb-0
              md:h-20 md:w-20"
    >
      <a href="https://pragmaticslab.com/" className="flex items-center">
        <Image src={src} alt="Pragmaticslab" width={width} height={height} />
      </a>
    </div>
  )
}

export default GenericIcon
