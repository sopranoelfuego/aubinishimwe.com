import { Box, Link, Typography, useTheme } from '@mui/material'
import { GLobalButton } from '@utils'
import React from 'react'

export function Hero() {
 const theme = useTheme()
 return (
  <Box
   id="/"
   sx={{
    minHeight: {xm:"auto",md:'100vh'},
    justifyContent: 'center',
    alignItems: 'flex-start',
    textJustify:"justify",
    display: 'flex',
    lineHeight:1,
    width:"100vw",
    margin:"0 auto",
    maxWidth:"1000px",
    gap: '10px',
    flexDirection: 'column',
    padding: { xs:"60px 0",sm:"none"}

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
    Web3 is my passion.
   </Typography>
   <Typography variant="body1" maxWidth="450px" letterSpacing="1px" sx={{width: {xs:"100vw",sm:'100%'},textJustify:"justify"}}>
    I’m a software engineer ,in building  digital experiences. Currently work with new techs , I’m focused on
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
