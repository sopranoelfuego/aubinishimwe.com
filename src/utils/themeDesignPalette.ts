import { PaletteMode } from '@mui/material'

export const getDesignTokens = (mode: PaletteMode) => ({
 palette: {
  mode,
  ...(mode === 'light'
   ? {
      // palette values for light mode
      primary: {
       light: '#ccd6f6',
       dark: '#495670',
       main: '#fff',
       contrastText: '#0ad42b',
      },
      divider: '#bec0c2',
      text: {
       primary: 'black',
       secondary: '#020202',
      },
      background: {
       default: '#fff',
       main: '#ff4400',
      },
     }
   : {
      primary: {
       light: '#233554',
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
