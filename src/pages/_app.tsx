import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {createTheme,ThemeProvider} from "@mui/material"
import { useState } from 'react'
import { Header } from '@components'

const theme=createTheme({ 
  palette:{
    primary:{
      main:"#0a192f"
    },
    secondary:{
      main:"#fff"
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  const [lightMode, setLightMode] = useState(false)
  const changeThemeMode=()=>setLightMode(prev=>!prev)
  return (
    <ThemeProvider theme={theme}>
      <Header lightMode={lightMode} changeThemeMode={changeThemeMode}/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
  
}

export default MyApp
