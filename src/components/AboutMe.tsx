import { Box, Grid,  styled,  Typography,  useTheme } from '@mui/material'
import ComponentTitle from '@utils/ComponentTitle'
import Image from 'next/image'
import React from 'react'

function AboutMe() {

    const ImageContainer=styled('div')(({ theme})=>({
        position:"relative",
        display:"block",
        "&::before":{
            content:'"hello friday"',
            display:"inline-block",
            width:"300px",
            height:"300px",
            transform:"translate(15px,15px)",
            border:"2px solid #0ad42b",
            transition:"transform 300ms ease-in",
            borderRadius:"5px",
            position: "absolute",

        },
        "&:hover:before":{
            transform:"translate(10px,10px)",
            cursor:"pointer"
        },
        "& > img":{
          filter:"grayscale(80%)"
        }
    }))
  return (
    <Box sx={{padding:" 50px 150px"}}>
        <ComponentTitle number="01." nameTitle="About me"/>
    <Box sx={{width:"100%",marginTop:"50px"}}>
     <Grid container spacing={4}>
     <Grid item xs={12} md={6}>
        <Typography>
        Hello! My name is Aubin and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — 
      turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        </Typography>
        <Typography>
        Hello! My name is Aubin and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — 
      turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        </Typography>

        <Typography>
        Hello! My name is Aubin and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — 
      turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        </Typography>

     </Grid>
     <Grid item xs={12} md={6} position="relative" >
        <ImageContainer>
            <Image src="/aubin.jpeg" width={300}  height={300} />
        </ImageContainer>
     </Grid>
     </Grid>
     </Box>
    </Box>
  )
}

export default AboutMe