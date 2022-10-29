import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box sx={{width:"100%",textAlign:"center",padding:"0 0 200px 0"}}>
        <Typography variant="caption" letterSpacing={1} fontFamily="monospace" fontWeight="600">made with &#x2764; by aubin ishimwe</Typography>
    </Box>
  )
}

export default Footer