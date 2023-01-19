"use client"
import NavBar from '@/components/NavBar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
