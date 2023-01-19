import React from 'react'
import Image from 'next/image'
import { getLogoPragmatics, getLogoUcn } from '../utils/data'

const Footer: React.FC = () => {
  const logoPragmatics = getLogoPragmatics()
  const logoUcn = getLogoUcn()
  return (
    <>
      <footer className="rounded-lg bg-black p-4 shadow dark:bg-black md:flex md:items-center md:justify-between md:p-6">
        <div
          className="
          flex flex-row space-x-4 md:ml-6
          md:justify-between md:space-x-4
        "
        >
          <div
            className="4 mb-6 flex
            h-14 w-14 items-center
             justify-center rounded-full bg-white shadow-md md:mb-0
              md:h-20 md:w-20"
          >
            <a href="https://pragmaticslab.com/" className="flex items-center">
              <Image
                src={logoPragmatics}
                alt="Pragmaticslab"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div
            className="4 mb-6 flex
            h-14 w-14 items-center
             justify-center rounded-full bg-white shadow-md md:mb-0
              md:h-20 md:w-20"
          >
            <a href="https://pragmaticslab.com/" className="flex items-center">
              <Image
                src={logoUcn}
                alt="Pragmaticslab"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>

        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
          © 2023 <a href="https://pragmaticslab.com/">Pragmatics Lab</a>. All
          Rights Reserved.
        </span>
        <div className="mt-4 flex space-x-6 sm:justify-center md:mt-0">
          <a
            href="https://github.com/pragmaticslaboratory/SBABM"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            href="https://www.linkedin.com/company/pragmaticslab"
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1 6h4v13H1V6zm2-5C1.8 1 1 2 1 3.1 1 4.1 1.8 5 3 5c1.3 0 2-.9 2-2s-.8-2-2-2zm11.6 5.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">LinkedIn account</span>
          </a>
          {/*//a para linkedn*/}
          <a
            href="https://www.linkedin.com/company/pragmaticslab"
            className=""
          ></a>
        </div>
      </footer>
    </>
  )
}

export default Footer
