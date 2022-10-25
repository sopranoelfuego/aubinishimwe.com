import { Box, Grid,  useTheme } from '@mui/material'
import ComponentTitle from '@utils/ComponentTitle'
import React from 'react'

function AboutMe() {
  return (
    <Box sx={{height:"100vh",padding:" 50px 150px"}}>
        <ComponentTitle number="01." nameTitle="About me"/>
     <Grid container>
     <Grid item>
     </Grid>
     <Grid item></Grid>
     </Grid>
    </Box>
  )
}

export default AboutMe