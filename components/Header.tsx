'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { links } from '../utils/data'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    const navbarHeight = navbar?.offsetHeight
    const navbarOffsetTop = navbar?.offsetTop
    const navbarOffsetBottom = navbarOffsetTop! + navbarHeight!
    const navbarTransparent = () => {
      const backgroundColor = 'bg-bg-senary'
      if (window.scrollY >= navbarOffsetBottom) {
        navbar?.classList.add(backgroundColor)
        navbar?.classList.add('bg-opacity-50')
        navbar?.classList.add('dark:bg-gray-800')
        navbar?.classList.add('shadow')
        navbar?.classList.remove('bg-bg-primary')
      } else {
        navbar?.classList.remove(backgroundColor)
        navbar?.classList.remove('bg-opacity-50')
        navbar?.classList.remove('dark:bg-gray-800')
        navbar?.classList.remove('shadow')
        navbar?.classList.add('bg-bg-primary')
      }
    }
    window.addEventListener('scroll', navbarTransparent)
    return () => {
      window.removeEventListener('scroll', navbarTransparent)
    }
  })

  const showBurgerMenu = () => {
    const navbar = document.getElementById('navbar-default')
    if (isMenuOpen) {
      navbar?.classList.remove('hidden')
    } else {
      const navbar = document.getElementById('navbar-default')
      navbar?.classList.add('hidden')
    }
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <nav
        id={'navbar'}
        className=" border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900
    dark:border-gray-800 dark:text-gray-100
   transition-all duration-600
    "
      >
        <div
          className="container flex flex-wrap items-center justify-between mx-auto
        "
        >
          <button
            data-collapse="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3
            text-sm text-gray-500 rounded-lg md:hidden
            hover:bg-transparent focus:outline-none focus:ring-2
            focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
            dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={showBurgerMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="
             hidden w-full md:block md:w-auto
             md:bg-transparent md:shadow-none
            "
            id="navbar-default"
          >
            <ul
              className="
              flex flex-col p-4 mt-4 border-gray-100 rounded-lg
              bg-bg-primary md:flex-row md:space-x-8 md:mt-0 md:text-sm
              md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800
              md:dark:bg-gray-900 dark:border-gray-700
            "
            >
              <li className="">
                <h2
                  className="
              md:text-3xl md:font-bold text-font-primary
              md:dark:text-white
              md:-mt-2
              hidden
              md:visible
              "
                >
                  DoMa
                </h2>
              </li>
              {links.map(({ label, route }) => (
                <li
                  onClick={showBurgerMenu}
                  key={route}
                  className="
                md:mx-2
                md:my-1
                md:text-font-primary
                hover:text-font-senary
                dark:hover:text-font-senary
                mx-2
                my-1
                text-sm
                text-font-primary
                dark:text-font-white
                font-medium
                text-center
                "
                >
                  <Link href={route}>{label.toUpperCase()}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
