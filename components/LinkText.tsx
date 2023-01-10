import React from 'react'

interface Props {
  href: string
  text: string
}
const LinkText: React.FC<Props> = ({ href, text }) => {
  return (
    <>
      <a
        className="
        font-semibold
        text-blue-500
        hover:text-blue-700
        "
        href={href}
      >
        {text}
      </a>
    </>
  )
}

export default LinkText
