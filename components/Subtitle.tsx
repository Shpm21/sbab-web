import React from 'react'

interface Props {
  subTitle: string
}
const Subtitle: React.FC<Props> = (props: Props) => {
  const { subTitle } = props
  return (
    <>
      <div
        className="
            {/*md:grid-cols-2*/}
            mt-6
            grid
            grid-cols-1
            gap-6
            text-gray-600
            dark:text-gray-400
            md:gap-8
      "
      >
        <h1
          className="
            {/*md:-mt-20*/}
            text-4xl
            font-bold
            text-font-primary
            dark:text-white
            md:justify-center
            md:text-6xl
            sm:text-5xl
         "
        >
          {subTitle}
        </h1>
      </div>
    </>
  )
}

export default Subtitle
