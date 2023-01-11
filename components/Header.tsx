'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { links } from '../utils/data'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    const navbarHeight = navbar?.offsetHeight
    const navbarOffsetTop = navbar?.offsetTop
    const navbarOffsetBottom = navbarOffsetTop! + navbarHeight!
    const navbarTransparent = () => {
      const backgroundColor = 'bg-black'
      if (window.scrollY >= navbarOffsetBottom) {
        navbar?.classList.add(backgroundColor)
        navbar?.classList.add('bg-opacity-50')
        navbar?.classList.add('dark:bg-opacity-50')
        navbar?.classList.add('shadow')
        navbar?.classList.remove('bg-bg-primary')
      } else {
        navbar?.classList.remove(backgroundColor)
        navbar?.classList.remove('bg-opacity-50')
        navbar?.classList.remove('dark:bg-opacity-50')
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
        className=" duration-600 border-gray-200 px-2 py-2.5 transition-all
    dark:border-gray-800 dark:bg-gray-800
   dark:text-gray-100 sm:px-4
   fixed
    top-0 left-0 right-0 z-50
    "
      >
        <div
          className="container mx-auto flex flex-wrap items-center justify-between
        "
        >
          <h2
            className="
              text-2xl font-bold text-font-primary
              dark:text-white
              md:-mt-2
              md:text-3xl
              md:font-bold
              md:dark:text-white

              "
          >
            DoMa
          </h2>
          <button
            data-collapse="navbar-default"
            type="button"
            className="ml-3 inline-flex items-center rounded-lg
            p-2 text-sm text-gray-500 hover:bg-transparent
            focus:outline-none focus:ring-2 focus:ring-gray-200
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
            md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={showBurgerMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
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
              md:dark:bg-transparent

            "
            id="navbar-default"
          >
            <ul
              className="
              mt-4 flex flex-col rounded-lg border-gray-100 bg-bg-primary
              p-4 dark:border-gray-700 md:mt-0 md:flex-row
              md:space-x-8 md:border-0 md:dark:bg-transparent md:text-sm
              md:font-medium md:dark:bg-gray-900 dark:bg-gray-800
            "
            >
              {links.map(({ label, route }) => (
                <li
                  onClick={showBurgerMenu}
                  key={route}
                  className="
                dark:text-font-white
                mx-2
                my-1
                text-center
                text-sm
                font-medium
                text-font-primary
                hover:text-font-senary
                dark:hover:text-font-senary
                md:mx-2
                md:my-1
                md:text-font-primary
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
