import {
 Box,
 List,
 ListItem,
 Stack,
 styled,
 Typography,
 useMediaQuery,
 useTheme,
} from '@mui/material'
import ComponentTitle from '@utils/ComponentTitle'
import React, { useEffect } from 'react'

function AboutMe() {
 const theme = useTheme()
 const matches=useMediaQuery(theme.breakpoints.down('sm'))
 useEffect(() => {
  console.log("matches changes:",matches)
 }, [matches])
 
 const techList = [
  { key: '1', name: 'typescript' },
  { key: '2', name: 'JavaScript (ES6+)' },
  { key: '3', name: 'React' },
  { key: '4', name: 'Nextjs' },
  { key: '5', name: 'Nodejs and Nestjs ' },
  { key: '6', name: 'Graphql ' },
  { key: '7', name: 'Docker' },
  { key: '8', name: 'Mysql and MongoDb databases' },
 ]
 const ImageContainer = styled('div')(({ theme }) => ({
   position: 'relative',
   display: 'block',
   margin:"0 auto",
   '&::before': {
    content: '""',
    display: matches?"none":'inline-block',
    width: '100%',
    height: '100%',
    maxWidth:"400px",
    zIndex:18,
    transform: "translate(5px,5px)",
    border: `2px solid ${theme?.palette?.primary?.contrastText}`,
    opacity:"0.8",
    transition: 'transform 300ms ease-in',
    borderRadius: '5px',
    position: 'absolute',
   },
   '& > img':{
      transform:"translate(-5px,-5px)",
     filter:matches?"none":"inherit"
   },
   '&:hover  img': {
      transform: "none",
    filter: 'none',
   },
   '&:hover:before': {
    transform: "none",
    cursor: 'pointer',
   },
  }))

 return (
    
    <Box sx={{ minHeight: '100vh',width:"100%",margin:"0 auto",
    maxWidth:"1000px",padding: { xs:"60px 0",sm:"none"} }} id="aboutMe">
   <ComponentTitle number="01." nameTitle="About me" />
    <Box sx={{width:"100%",display:"flex",alignItems:"flex-start",flexDirection:{xs:"column-reverse",sm:"row"},justifyContent:"space-evenly"}} >
     <Stack direction="column"
     spacing={2}
      sx={{textJustify:"justify",flex:1 }}
     >
      <Typography  >
       Hello! My name is Aubin and I enjoy creating things that live on the
       internet. My interest in web development started back in 2012 when I
       decided to try editing custom Tumblr themes — turns out hacking together
       a custom reblog button taught me a lot about HTML & CSS!
      </Typography>
      <Typography  >
       Hello! My name is Aubin and I enjoy creating things that live on the
       internet. My interest in web development started back in 2012 when I
       decided to try editing custom Tumblr themes — turns out hacking together
       a custom reblog button taught me a lot about HTML & CSS!
      </Typography>

      <Box >
       <Typography>
        Here are a few technologies I’ve been working with recently:
       </Typography>

       <List
        style={{
         display: 'grid',
         gridTemplateColumns: '1fr 1fr',
         fontSize: '13px',
         marginTop: '10px',
         columnGap: '30px',
        }}
       >
        {techList?.map((value, key) => (
         <ListItem
          key={key}
          sx={{
           display: 'flex',
           alignItems: 'flex-start',
           '&::before': {
            content: '"▹"',
            display: 'inline-flex',
            marginRight: '10px',
            color: `${theme?.palette?.primary?.contrastText}`,
           },
          }}
         >
          {value?.name}
         </ListItem>
        ))}
       </List>
      </Box>
     </Stack>
     <Box sx={{position:"relative",width:"100%",flex:1,padding:{xs:"0 0 30px 0",sm:"0 0 0 80px"}}}>
      <ImageContainer >
       <img src="/aubin.jpeg" style={{width:"100%",height:"100%",borderRadius:"5px",zIndex:20,maxWidth:"400px"}} alt="aubin" />
      </ImageContainer>
     </Box>
    </Box>

  </Box>
 )
}


export default AboutMe
