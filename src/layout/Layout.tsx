import { Box,  styled,  Typography, useTheme } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { afterLine } from '@utils'
import SocialMedias from './SocialMedias'


export const Layout: React.FC = ({ children }: any) => {
  const theme=useTheme()
  const AfterLine=afterLine({width:"1px",height:"200px"})
  const CustomLink=styled('a')(({ theme})=>({
    display: 'flex',
    flexDirection:'column',
    transition:"all  300ms ease-in",
    '&:hover':{
      transform:'translateY(-3px)',
      color: `${theme?.palette?.primary?.contrastText}`,
    }
    
  }))
 return (
  <>
   <Box sx={{ width:"100%",maxWidth:"1400px",position:"relative",color:`${theme?.palette.text?.secondary}`,overflowY:"auto",transition:"all 300ms ease-in",padding:"0 50px"}}>
   
   <Box sx={{display:"flex",width:"100%"}}>
    <SocialMedias/>
    <Box>

     {children}
    </Box>
      <Stack direction="column" sx={{position:"fixed", display:"flex",flexDirection:"column",gap:"20px",alignItems:'center',bottom:0,right:50}}>
        <Typography variant="caption" fontWeight="bold"  letterSpacing={2} sx={{writingMode:"vertical-lr"}}>
          <CustomLink  href="mailto:aubinjaja@gmail.com">aubinjaja@gmail.com</CustomLink>
        </Typography>
        <AfterLine/>
      </Stack>
   </Box>

   </Box>
  </>
 )
}
