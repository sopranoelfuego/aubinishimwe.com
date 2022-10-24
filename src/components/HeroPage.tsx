import { Box, Typography, useTheme } from '@mui/material'
import { GLobalButton } from '@utils'
import React from 'react'


export function HeroPage() {
  const theme=useTheme()
  return (
    
    <Box sx={{height:"100vh",justifyContent:"flex-start", alignItems:"flex-start", display:"flex",gap:"10px",flexDirection:"column",width:"inherit",padding:"0 50px 0 150px"}}>
      <Typography  fontSize="15px" display="flex" fontWeight="100px"  textTransform="capitalize"   color={`${theme?.palette?.primary?.contrastText}`}>
       Hi, My name is
      </Typography>
      <Typography variant="h2" component="h2" fontWeight="bold" color={`${theme?.palette?.text?.primary}`} >
        Aubin Ishimwe.
      </Typography>
      <Typography variant="h2" component="h2" fontWeight="800" >
        I build things for the web.
      </Typography>
      <Typography variant="body1" maxWidth="450px" letterSpacing="1px">
      I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, 
      I’m focused on building accessible, human-centered products at Upstatement.
      </Typography>
      <GLobalButton sx={{marginTop:"20px"}}>
        Grab my resume
      </GLobalButton>
    </Box>
    
  )
}
