import type { AppProps } from 'next/app'
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material'
import { createContext, useMemo, useState } from 'react'
import { getDesignTokens } from '@utils'
export const ColorModeContext = createContext({ toggleColorMode: () => {} })
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
 const [mode, setMode] = useState<'light' | 'dark'>('dark')
 const colorMode = useMemo(
  () => ({
   // The dark mode switch would invoke this method
   toggleColorMode: () => {
    setMode((prevMode: PaletteMode) =>
     prevMode === 'light' ? 'dark' : 'light'
    )
   },
  }),
  []
 )
 // Update the theme only if the mode changes
 const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

 return (
  <ColorModeContext.Provider value={colorMode}>
   <ThemeProvider theme={theme}>
    <Component {...pageProps} />
   </ThemeProvider>
  </ColorModeContext.Provider>
 )
}

export default MyApp
