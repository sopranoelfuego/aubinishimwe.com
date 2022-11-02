import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
function ComponentTitle({ number, nameTitle }) {
 const theme = useTheme()
 const matches = useMediaQuery(theme.breakpoints.up('sm'))

 const afterLine = ({ width, height }) =>
  styled('div')(({ theme }) => ({
   width: width,
   height: height,
   display: 'block',
   backgroundColor: `${theme?.palette.text?.secondary}`,
   opacity: '0.5',
  }))
 const AfterLine = afterLine({ width: '350px', height: '1px' })
 return (
  <Stack
   direction="row"
   alignItems="center"
   justifyContent="flex-start"
   sx={{
    position: 'relative',
    marginBottom: '80px',
    fontSize: 'clamp(20px,5vw,30px)',
   }}
  >
   <Box
    sx={{
     color: `${theme?.palette?.primary?.contrastText}`,
     fontSize: 'clamp(16px,3vw,20px)',
     fontWeight: '400px',
     marginRight: '5px',
    }}
   >
    {number}
   </Box>
   <Box
    sx={{
     fontWeight: 'bold',
     fontFamily: 'monospace',
     marginRight: '10px',
     color: `${theme?.palette?.text?.primary}`,
    }}
   >
    {nameTitle}{' '}
   </Box>
   <AfterLine
    style={{
     position: 'relative',
     display: matches ? 'inline-flex' : 'none',
     top: '5px',
     opacity: '0.3',
    }}
   />
  </Stack>
 )
}

export default ComponentTitle
