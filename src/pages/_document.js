import { Html, Head, Main, NextScript } from 'next/document'
import colours from '@/components/Colours'

export default function Document() {
  const bodyStyle = {
    backgroundColor: colours.darkBackground,
    fontFamily: `Noto Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif`,
    fontSize: `14pt`,
    color: colours.darkText
  }
  return (
    <Html>
      <Head />
      <body style={bodyStyle}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
