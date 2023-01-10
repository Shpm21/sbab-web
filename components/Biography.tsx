import { AboutUser } from '../utils/interface-templates'
import React from 'react'
import Image from 'next/image'
import LinkText from './LinkText'
interface Props {
  aboutUser: AboutUser
}

const Biography: React.FC<Props> = (props: Props) => {
  const { biography, name, image, website } = props.aboutUser
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6
        rounded-lg
        bg-bg-primary
        md:grid-cols-1
        md:gap-8
        "
    >
      <div
        className="
          grid grid-cols-1
          place-items-center
      "
      >
        <Image
          className="
            mt-4
            rounded-full
          "
          src={image!}
          alt={name}
          width={200}
          height={200}
        />
        <h1
          className="
            text-2xl
            font-bold
            text-font-primary
            dark:text-white
            md:text-3xl
    "
        >
          {name}
        </h1>
        <LinkText href={website!} text={website!} />
      </div>
      <div
        className="
          grid
          grid-cols-1
      "
      >
        <p
          className="
            px-4
            pb-4
            text-center
            text-justify
            text-font-secondary
            dark:text-gray-400
            "
        >
          {biography}
        </p>
      </div>
    </div>
  )
}

export default Biography
