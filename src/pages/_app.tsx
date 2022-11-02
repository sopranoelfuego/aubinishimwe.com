import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { createContext, useMemo, useState } from 'react'
import { getDesignTokens } from '@utils/themeDesignPalette'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
 const [mode, setMode] = useState<'light' | 'dark'>('dark')
 const colorMode = useMemo(
  () => ({
   toggleColorMode: () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
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
