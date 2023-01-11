import React from 'react'

interface Props {
  children: React.ReactNode
}
const GenericContainer: React.FC<Props> =({children}) => {
  return <>
    <div className='
      container mx-auto
      flex min-h-screen flex-col
      justify-center
      rounded-lg //opcional
      px-4
      py-20
      md:px-8
      md:py-24
      dark:bg-gray-800
      sm:px-6
      sm:py-20
      lg:px-8
    '>
      {children}
    </div>
  </>
}

export default GenericContainer