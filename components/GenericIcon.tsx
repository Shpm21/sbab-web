import Image from 'next/image'
import React from 'react'

interface Props {
  src: string
  width: number
  height: number
  href: string
  alt: string
  transparent?: boolean
  shadow?: boolean
}
const GenericIcon: React.FC<Props> = ({
  src,
  width,
  height,
  href,
  alt,
  transparent,
  shadow,
}) => {
  const transparentClass = transparent ? 'bg-transparent' : 'bg-white'
  const shadowClass = shadow ? 'shadow-md' : 'shadow-none'
  return (
    <div
      className={`4 mb-6 flex
            h-10 w-10 items-center
             justify-center rounded-full ${transparentClass} ${shadowClass} md:h-18
              md:w-18 md:mb-0`}
    >
      <a href={href} className="flex items-center">
        <Image src={src} alt={alt} width={width} height={height} />
      </a>
    </div>
  )
}

export default GenericIcon
