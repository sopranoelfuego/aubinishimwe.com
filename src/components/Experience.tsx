import React from 'react'

import useTheme from '@mui/material/styles/useTheme'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/system/Box'
import ComponentTitle from '@utils/ComponentTitle'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
function Experience() {
 const theme = useTheme()
 const bluetecJobs = [
  {
   key: '1',
   descr:
    'Co-build ui interface with tech like React, next and vanilla javascript ',
  },
  { key: '2', descr: 'Products deployement on clouds such as heroku and vercel ' },
  { key: '2', descr: 'Working with various languages and technologies such as javascript ,typescript, React,node,nestjs graphql and content managments such as strapi' },
 ]
 const assystJobs = [
  {
   key: '1',
   descr: 'Working on building user interfaces on various internal project with mordern tools ',
  },
  {
   key: '2',
   descr:
    'Teamed with 3-6 developers we deliver scalable, performant and maintainable code in Reactjs with  JavaScript (ES6+)',
  },
 ]

 return (
  <Box
   sx={{
    minHeight: '100vh',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1000px',
    padding: { xs: '60px 0', sm: 'none' },
   }}
   id="experience"
  >
   <ComponentTitle number="02." nameTitle="Recent jobs" />
   <Stack
    direction={{ sm: 'row', xs: 'column' }}
    sx={{ gap: { xs: '10px', sm: '30px', justifyContent: 'center' } }}

    // backgroundColor="red"
   >
    {/* ====COMPANY TITLE====== */}
    <Box minWidth={{ sx: '100%', sm: '300px' }}>
     <Typography fontSize="15px">
      <Link
       href="https://www.africa2trust.com/Member/?l=1&c=4&sid=21861&glx=0&CatID=2"
       sx={{
        display: 'inline-flex',
        color: `${theme?.palette?.primary?.contrastText}`,
       }}
      >
       ASYST Resources Ltd
      </Link>
     </Typography>
     <Typography
      variant="subtitle2"
      fontSize="12px"
      width="100%"
      sx={{ marginLeft: { xs: '3px', sm: '5px' } }}
     >
      Nov 2022 - Present
     </Typography>
    </Box>
    {/* ==== END COMPANY TITLE====== */}

    <Box sx={{ marginTop: { xs: '5px', sm: '20px' } }}>
     <Typography color={`${theme?.palette?.text?.primary}`} fontWeight="800">
      Frontend Developper
     </Typography>

     <List
      style={{
       display: 'grid',
       fontFamily: 'monospace',
       gridTemplateColumns: '1fr',
       fontSize: '13px',
       marginTop: '10px',
       columnGap: '30px',
      }}
     >
      {assystJobs?.map((value, key) => (
       <ListItem
        key={key}
        sx={{
         display: 'flex',
         alignItems: 'flex-start',
         gap: '5px',
         '&:before': {
          content: '"▹"',
          color: `${theme?.palette?.primary?.contrastText}`,
         },
        }}
       >
        {value?.descr}
       </ListItem>
      ))}
     </List>
    </Box>
   </Stack>
   <Stack
    direction={{ sm: 'row', xs: 'column' }}
    sx={{ gap: { xs: '10px', sm: '30px', justifyContent: 'center' } }}

    // backgroundColor="red"
   >
    {/* ====COMPANY TITLE====== */}
    <Box minWidth={{ sx: '100%', sm: '300px' }}>
     <Typography fontSize="15px">
      <Link
       href="https://bluetec.bi/"
       sx={{
        display: 'inline-flex',
        color: `${theme?.palette?.primary?.contrastText}`,
       }}
      >
       Bluetec
      </Link>
     </Typography>
     <Typography
      variant="subtitle2"
      fontSize="12px"
      width="100%"
      sx={{ marginLeft: { xs: '3px', sm: '5px' } }}
     >
      march 2020 - 2022
     </Typography>
    </Box>
    {/* ==== END COMPANY TITLE====== */}

    <Box sx={{ marginTop: { xs: '5px', sm: '20px' } }}>
     <Typography color={`${theme?.palette?.text?.primary}`} fontWeight="800">
      Full stack developer
     </Typography>

     <List
      style={{
       display: 'grid',
       fontFamily: 'monospace',
       gridTemplateColumns: '1fr',
       fontSize: '13px',
       marginTop: '10px',
       columnGap: '30px',
      }}
     >
      <ListItem   sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '5px',
          '&:before': {
           content: '"▹"',
           color: `${theme?.palette?.primary?.contrastText}`,
          },
         }}>
       Participate in conception and implementation of the agritech
       <Link
        href="https://www.shorakonnect.org/"
        sx={{
         color: `${theme?.palette?.primary?.contrastText}`,
         display:"inline-flex"
        }}
       >
        shorakonnect
       </Link>
      </ListItem>
      <ListItem   sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '5px',
          '&:before': {
           content: '"▹"',
           color: `${theme?.palette?.primary?.contrastText}`,
          },
         }}>
       working on backend with nodejs and ussd version of the project
       <Link
        href="https://www.shorakonnect.org/"
        sx={{
         color: `${theme?.palette?.primary?.contrastText}`,
        }}
       >
        shorakonnect
       </Link>{' '}
      </ListItem>

      {bluetecJobs?.map((value, key) => (
       <>
        <ListItem
         key={key}
         sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '5px',
          '&:before': {
           content: '"▹"',
           color: `${theme?.palette?.primary?.contrastText}`,
          },
         }}
        >
         {value?.descr}
        </ListItem>
       </>
      ))}
     </List>
    </Box>
   </Stack>
  </Box>
 )
}

export default Experience
