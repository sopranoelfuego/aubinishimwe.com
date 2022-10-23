import { PaletteMode } from '@mui/material'

export const getDesignTokens = (mode: PaletteMode) => ({
 palette: {
  mode,
  ...(mode === 'light'
   ? {
      // palette values for light mode
      primary: {
       main: '#fff',
      },
      divider: '#bec0c2',
      text: {
       primary: '#64ffda',
       main: '#fff',
       secondary: '#9ca19e',
      },
      background: {
       default: '#fff',
       main: '#ff4400',
      },
     }
   : {
      // palette values for dark mode
      primary: {
       light: '#ccd6f6',
       main: '#0a192f',
       dark: '#495670',
       contrastText: '#64ffda',
      },
      divider: '#9b9e9e',
      background: {
       default: '#0a192f', //black navy
       paper: '#0a192f', //navy
      },
      text: {
       primary: '#ccd6f6', //lightest-slate
       secondary: '#a8b2d1', //light-slate
      },
     }),
 },
})
