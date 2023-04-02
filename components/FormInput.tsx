'use client'
import React from 'react'
import axios from 'axios'
const FormInput: React.FC = () => {
  const [file, setFile] = React.useState<File | null>(null)

  const handleUpload = async () => {
    const URL = 'http://localhost:3000/upload'
    const formData = new FormData()
    formData.append('file', file!)
    const response = await axios.post(URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      responseType: 'blob',
    })
    const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'output.zip');
      document.body.appendChild(link);
      link.click();
  }

  return (
    <>
      <div className="flex w-full items-center justify-center">
        <label
          htmlFor="dropzone-file"
          className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="mb-3 h-10 w-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload Excel File</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              XLSX, XLS
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            accept=".xlsx, .xls"
            onChange={(e) => {
              const file = e.target.files![0]
              setFile(file)
              console.log(file)
            }
            }
          />
        </label>
      </div>
      <div className="flex w-full items-center justify-center">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          onClick={handleUpload}
        >
          Upload
        </button>
      </div>
      {file && (
        <div className="flex w-full items-center justify-center">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">File Name: </span>
              {file.name}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default FormInput
