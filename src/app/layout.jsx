"use client"
import NavBar from '@/components/NavBar'
import Container from '@mui/material/Container';

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Container maxWidth="md">
          <NavBar/>
          {children}
        </Container>
      </body>
    </html>
  )
}
