import { Box, Grid,  List,  ListItem,  styled,  Typography,  useTheme } from '@mui/material'
import ComponentTitle from '@utils/ComponentTitle'
import Image from 'next/image'
import React from 'react'

function AboutMe() {

  const techList=[
    {key:"1",name:"typescript"},
    {key:"2",name:"JavaScript (ES6+)"},
    {key:"3",name:"React"},
    {key:"4",name:"Nextjs"},
    {key:"5",name:"Nodejs and Nestjs "},
    {key:"6",name:"Graphql "},
    {key:"7",name:"Docker"},
    {key:"8",name:"Mysql and MongoDb databases"},
  ]
  
    
  return (
    <Box sx={{minHeight:"100vh",padding:" 0 150px"}} id="aboutMe">
        <ComponentTitle number="01." nameTitle="About me"/>
    <Box sx={{width:"100%"}}>
     <Grid container spacing={4}>
     <Grid item xs={12} md={6} sx={{display:"flex",flexDirection:"column",gap:"20px"}}>
        <Typography>
        Hello! My name is Aubin and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — 
      turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        </Typography>
        <Typography>
        Hello! My name is Aubin and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — 
      turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        </Typography>
      <Box>

        <Typography>
        Here are a few technologies I’ve been working with recently:
        </Typography>
        <List>
        <ul style={{display:"grid",gridTemplateColumns:"1fr 1fr",fontSize:"13px",marginTop:"10px",columnGap:"30px",rowGap:"10px"}}>
        {techList?.map((value,key)=>(<SingleListItem key={key} >
          {value?.name}
        </SingleListItem>))}
        </ul>
        </List>

      </Box>

     </Grid>
     <Grid item xs={12} md={6} position="relative" >
        <ImageContainer>
            <Image src="/aubin.jpeg" width={300}  height={300} alt="aubin" />
        </ImageContainer>
     </Grid>
     </Grid>
     </Box>
    </Box>
  )
}
const SingleListItem=styled('li')(({ theme})=>({
  display: 'flex',
  alignItems:"flex-start",
  "&::before":{
    content:'"▹"',
    display:"inline-flex",
    marginRight:"10px",
    color:`${theme?.palette?.primary?.contrastText}`
  }
}))
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
  "&:hover  img":{
    filter: "none"
  },
  "&:hover:before":{
      transform:"translate(10px,10px)",
      cursor:"pointer"
  },
  "& > img":{
    filter:"grayscale(80%)"
  }
}))
export default AboutMe