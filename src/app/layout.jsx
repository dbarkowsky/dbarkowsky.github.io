"use client"
import NavBar from '@/components/Navigation/NavBar'
import Container from '@mui/material/Container';
import colours from '../components/Colours';
import './globals.css'

export default function RootLayout({ children }) {
  const bodyStyle = {
    backgroundColor: colours.darkBackground,
    fontFamily: `Noto Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif`,
    fontSize: `14pt`,
    color: colours.darkText
  }

  return (
    <html lang="en">
      <head />
      <body style={bodyStyle}>
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
