import { Box, Link, Typography, useTheme } from '@mui/material'
import { GLobalButton } from '@utils'
import React from 'react'

export function Hero() {
 const theme = useTheme()
 return (
  <Box
   id="/"
   sx={{
    minHeight: { xs: 'max-content', md: '100vh' },
    justifyContent: 'center',
    alignItems: 'flex-start',
    textJustify: 'justify',
    display: 'flex',
    lineHeight: 1,
    width: '100%',
    margin: '0 auto',
    maxWidth: '1000px',
    gap: '10px',
    flexDirection: 'column',
    padding: { xs: '60px 0', sm: 'none' },
   }}
  >
   <Typography
    fontSize="15px"
    display="flex"
    fontWeight="100px"
    fontFamily="monospace"
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
    fontFamily="monospace"
    width="100%"
    color={`${theme?.palette?.text?.primary}`}
   >
    Aubin Ishimwe.
   </Typography>

   <Typography
    variant="h2"
    component="h2"
    fontWeight="600"
    fontFamily="monospace"
    fontSize="clamp(30px, 8vw, 80px)"
   >
    Web3 is my passion.
   </Typography>
   <Typography variant="body1" fontFamily="monospace" maxWidth="450px">
    I’m a software engineer ,based in Burundi. Currently work with new techs ,
    I’m focused on building accessible, human-centered products at{' '}
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
   <GLobalButton sx={{ marginTop: '20px' }} name="resume">Check my resume</GLobalButton>
  </Box>
 )
}
