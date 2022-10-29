import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { afterLine } from './AfterLine'

function ComponentTitle({number,nameTitle}) {
  const theme=useTheme()
  const AfterLine=afterLine({width:"350px",height:"1px"})

  return (
    <Typography variant="h2"  fontSize="clamp(26px,5vw,32px)" alignItems="center"  sx={{display:"flex",width:"100%",position:"relative",marginBottom:"80px"}}>
        <Box sx={{color:`${theme?.palette?.primary?.contrastText}`,fontSize:"clamp(16px,3vw,20px)",fontFamily:"monospace",fontWeight:"400px",marginRight:'5px'}}>{number}</Box><Box sx={{fontWeight:"bold",marginRight:"10px",color:`${theme?.palette?.text?.primary}`}}>{nameTitle} </Box><AfterLine style={{position:"relative",top:"5px",opacity:"0.3"}}/>
        </Typography>
  )
}

export default ComponentTitle 