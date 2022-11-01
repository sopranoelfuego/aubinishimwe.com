import {
 Box,
 List,
 ListItem,
 Stack,
 styled,
 Typography,
 Link,
 useMediaQuery,
 useTheme,
} from '@mui/material'
import ComponentTitle from '@utils/ComponentTitle'
import Image from 'next/image'
import React from 'react'

function AboutMe() {
 const theme = useTheme()
 const matches = useMediaQuery(theme.breakpoints.down('sm'))

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
 const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  margin: '0 auto',
  maxWidth: '300px',
  width: matches ? '100%' : 'auto',
  marginBottom: matches ? '20px' : '0',
  height: '300px',
  '&::before': {
   content: '""',
   display: matches ? 'none' : 'inline-block',
   width: '100%',
   height: '100%',
   maxWidth: '300px',
   zIndex: 18,
   transform: 'translate(5px,5px)',
   border: `2px solid ${theme?.palette?.primary?.contrastText}`,
   opacity: '0.8',
   transition: 'transform 300ms ease-in',
   borderRadius: '5px',
   position: 'absolute',
  },
  '& > img': {
   transform: { xs: 'none', sm: 'translate(-5px,-5px)' },
   filter: 'none',
  },
  '&:hover  img': {
   transform: 'none',
   filter: 'none',
  },
  '&:hover:before': {
   transform: 'none',
   cursor: 'pointer',
  },
 }))

 return (
  <Box
   sx={{
    minHeight: '100vh',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1000px',
    padding: { xs: '60px 0', sm: 'none' },
   }}
   id="aboutMe"
  >
   <ComponentTitle number="01." nameTitle="About me" />
   <Box
    sx={{
     width: '100%',
     display: 'flex',
     alignItems: 'flex-start',
     flexDirection: { xs: 'column-reverse', sm: 'row' },
     justifyContent: 'space-evenly',
    }}
   >
    <Stack
     direction="column"
     spacing={2}
     sx={{ textJustify: 'justify', flex: 1 }}
    >
     <Typography variant="body1" fontFamily="monospace">
      Hello! My name is Aubin and I enjoy creating things that live on the
      internet. My interest in coding stuffs started back in 2015 by watching my
      childhood movie{' '}
      <Link
       href="https://fr.wikipedia.org/wiki/Matrix_(film)"
       sx={{
        display: 'inline-flex',
        color: `${theme?.palette?.primary?.contrastText}`,
       }}
      >
       The Matrix
      </Link>{' '}
      i was amazed by the way auto-calculations was displayed on Terminals ,so i
      decided to google some stuff related to the etichal hacking and coding.
     </Typography>
     <Typography fontFamily="monospace" width="100%">
      So i decided to catch the basics(HTML,CSS,JAVASCRIPT) and attend coding
      communities events, now i got a bachelor degree in software Engineer
     </Typography>

     <Box>
      <Typography fontFamily="monospace">
       Here are a few technologies I’ve been working with recently:
      </Typography>

      <List
       style={{
        display: 'grid',
        fontFamily: 'monospace',
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
          fontFamily: 'monospace',
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
    <Box
     sx={{
      position: 'relative',
      width: '100%',
      flex: 1,
     }}
    >
     <ImageContainer>
      <Image src="/aubin.jpeg" layout="fill" alt="aubin" />
     </ImageContainer>
    </Box>
   </Box>
  </Box>
 )
}

export default AboutMe
