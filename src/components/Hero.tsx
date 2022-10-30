import { Box, Link, Typography, useTheme } from '@mui/material'
import { GLobalButton } from '@utils'
import React from 'react'

export function Hero() {
 const theme = useTheme()
 return (
  <Box
   id="/"
   sx={{
    minHeight: '100vh',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textJustify:"justify",
    display: 'flex',
    lineHeight:1,
    gap: '10px',
    flexDirection: 'column',
    width: 'inherit',
    padding: {xs:"20px",sm:"0 90px",md:'0 150px'},
   }}
  >
   <Typography
    fontSize="15px"
    display="flex"
    fontWeight="100px"
    textTransform="capitalize"
    color={`${theme?.palette?.primary?.contrastText}`}
   >
    Hi, My name is
   </Typography>
   <Typography
    variant="h2"
    component="h2"
    fontSize="clamp(40px, 8vw, 80px)"
    fontWeight="600"
    color={`${theme?.palette?.text?.primary}`}
   >
    Aubin Ishimwe.
   </Typography>
  
   <Typography variant="h2" component="h2" fontWeight="600" fontSize="clamp(30px, 8vw, 80px)" >
    Web3 is my passionate.
   </Typography>
   <Typography variant="body1" maxWidth="450px" letterSpacing="1px">
    I’m a software engineer specializing in building (and occasionally
    designing) exceptional digital experiences. Currently, I’m focused on
    building accessible, human-centered products at{' '}
    <Link
     href="http://bluetec.bi/"
     sx={{
      display: 'inline-flex',
      color: `${theme?.palette?.primary?.contrastText}`,
     }}
    >
     Bluetec
    </Link>
   </Typography>
   <GLobalButton sx={{ marginTop: '20px' }}>Check my resume</GLobalButton>
  </Box>
 )
}
