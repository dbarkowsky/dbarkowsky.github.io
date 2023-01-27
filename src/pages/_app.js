import '@/styles/globals.css'
import { Container } from '@mui/material'
import NavBar from '@/components/navigation/NavBar'

export default function App({ Component, pageProps }) {
  return<Container 
  maxWidth="md"
  disableGutters
>
  <NavBar/>
  <Component props={pageProps}/>
</Container>
}
