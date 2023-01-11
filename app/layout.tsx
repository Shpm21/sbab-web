import Header from '../components/Header'
import React from 'react'
import '../styles/globals.css'
import Footer from '../components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>DoMa: Social Simulator</title>
      </head>
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
