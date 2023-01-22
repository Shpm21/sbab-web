import Image from 'next/image'
import React from 'react'

interface Props {
  src: string
  width: number
  height: number
  transparent?: boolean
  shadow?: boolean
}
const GenericIcon: React.FC<Props> = ({
  src,
  width,
  height,
  transparent,
  shadow,
}) => {
  const transparentClass = transparent ? 'bg-transparent' : 'bg-white'
  const shadowClass = shadow ? 'shadow-md' : 'shadow-none'
  return (
    <div
      className={`4 mb-6 flex
            h-14 w-14 items-center
             justify-center rounded-full ${transparentClass} ${shadowClass} md:mb-0
              md:h-20 md:w-20`}
    >
      <a href="https://pragmaticslab.com/" className="flex items-center">
        <Image src={src} alt="Pragmaticslab" width={width} height={height} />
      </a>
    </div>
  )
}

export default GenericIcon
