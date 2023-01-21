"use client"
import NavBar from '@/components/Navigation/NavBar'
import Container from '@mui/material/Container';

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Container 
          maxWidth="md"
          disableGutters
        >
          <NavBar/>
          {children}
        </Container>
      </body>
    </html>
  )
}
