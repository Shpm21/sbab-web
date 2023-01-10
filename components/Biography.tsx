import { AboutUser } from '../utils/interface-templates'
import React from 'react'
import Image from 'next/image'
interface Props {
  aboutUser: AboutUser
}

const Biography: React.FC<Props> = (props: Props) => {
  const { biography, name, image } = props.aboutUser
  return (
    <div
      //pon el div de la imagen con el name arriba y el bio abajo, el div de la imagen ocupara el 20% y el bio el 80%
      className="
        grid
        grid-cols-1
        md:grid-cols-1
        gap-6
        md:gap-6
            px-4 sm:px-6 lg:px-8
            py-8
            bg-bg-senary
            dark:bg-gray-800
            rounded-lg
            shadow-md
            dark:border-gray-700
        "
    >
      {/*//this div estara a la arriba con la imagen en circular y el nombre a la derecha de la imagen, bien cerca*/}
      <div
        className="
          grid
          grid-cols-2

      "
      >
        <Image
          className="
            rounded-full
          "
          src={image!}
          alt={name}
          width={100}
          height={100}
        />
        <h1
          className="
            text-2xl
            font-bold
            text-font-primary
            dark:text-white
            md:text-3xl
            lg:text-4xl "
        >
          {name}
        </h1>
      </div>
      <div
        className="
          grid
          grid-cols-1
      "
      >
        <p
          className="
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
