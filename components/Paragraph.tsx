import React from 'react'

interface Props {
  paragraph: string
  justify?: boolean

  gridCols2?: boolean
}
const Paragraph: React.FC<Props> = (props: Props) => {
  const { paragraph, justify, gridCols2 } = props
  const justifyClass = justify ? 'text-justify' : ''
  const gridCols2Class = gridCols2 ? 'grid-cols-2' : ''
  const containerClass = `
    grid
    grid-cols-1
    ${gridCols2Class}
    gap-6
    md:gap-8
    mt-6
    text-gray-600
    dark:text-gray-400
  `
  const paragraphClass = `
    text-font-secondary
    dark:text-gray-400
    md:text-2xl
    sm:text-xl
    ${justifyClass}
  `

  return (
    <>
      <div className={containerClass}>
        <p className={paragraphClass}>{paragraph}</p>
      </div>
    </>
  )
}

export default Paragraph
