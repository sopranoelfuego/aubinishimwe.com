import React, { useRef } from 'react'
import {
 Box,
 Grid,
 IconButton,
 List,
 ListItem,
 styled,
 TextField,
 Typography,
 useTheme,
} from '@mui/material'
import { Stack } from '@mui/system'
import ComponentTitle from '@utils/ComponentTitle'
import {
 AiFillLinkedin,
 AiOutlineInstagram,
 AiOutlineTwitter,
} from 'react-icons/ai'
import { FiGithub } from 'react-icons/fi'

import { ImLocation2 } from 'react-icons/im'
import { SiGmail } from 'react-icons/si'
import Image from 'next/image'

const socialContact = [
 { name: 'bujumbura,burundi', icon: <ImLocation2 /> },
 { name: 'aubinjaja@gmail.com', icon: <SiGmail /> },
]
function ContactMe() {
 const theme = useTheme()
 const name = useRef<HTMLInputElement>(null)
 const email = useRef<HTMLInputElement>(null)
 const suggestion = useRef<HTMLInputElement>(null)
 const socialsMedia = [
  {
   id: '1',
   href: 'https://github.com/sopranoelfuego',
   name: 'github',
   icon: <FiGithub />,
  },
  {
   id: '2',
   href: 'https://www.instagram.com/ishimwe.aubin/',
   name: 'instagram',
   icon: <AiOutlineInstagram />,
  },
  {
   id: '3',
   href: 'https://twitter.com/aubin.ishimwe',
   name: 'twiiter',
   icon: <AiOutlineTwitter />,
  },
  {
   id: '4',
   href: 'https://www.linkedin.com/in/aubin-ishimwe-308a7a206',
   name: 'linkedin',
   icon: <AiFillLinkedin />,
  },
 ]
 const SendButton = styled('button')(({ theme }) => ({
  width: '100%',
  padding: '15px 20px',
  fontWeight: '700',
  letterSpacing: '3px',
  color: `${theme?.palette.primary.contrastText}`,
  border: `1px solid ${theme?.palette.primary.contrastText}`,
  backgroundColor: 'inherit',
  transition: 'all  300ms ease-in',
  '&:hover': { backgroundColor: 'rgba(10, 212, 43,0.1)' },
 }))
 const handlerSubmit = () => {
  fetch('/api/contact', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify({
    name: name?.current?.value,
    email: email?.current?.value,
    suggestion: suggestion?.current?.value,
   }),
  })
   .then(response => response.json())
   .then(data => {
    console.log('Success:', data)
   })
   .catch(error => {
    console.error('Error:', error)
   })
 }
 return (
  <Box
   sx={{
    bgcolor: `${theme?.palette.background.paper}`,
    width: '100%',
    margin: '0 auto',
    maxWidth: '1000px',
    padding: { xs: '60px 0', sm: 'none' },
   }}
   id="contact"
  >
   <ComponentTitle number="03." nameTitle="Contact me" />

   <Grid
    container
    sx={{
     padding: '10px 20px',
     width: '100%',
     display: 'flex',
     alignItems: 'flex-start',
    }}
   >
    <Grid item xs={12} md={6} display="flex" flexDirection="column" gap="20px">
     <Typography variant="h5" fontWeight="700">
      Get In Touch
     </Typography>
     <Typography variant="body1">
      am here for you,how can i help you?
     </Typography>
     <Stack direction="column" spacing={4}>
      <TextField
       id="name-id"
       label="Your Name"
       fullWidth
       inputRef={name}
       type="text"
       size="small"
       sx={{
        border: `1px solid ${theme?.palette.text?.secondary}`,
        borderRadius: '4px',
       }}
       placeholder="eg:aubin ishimwe"
      />
     </Stack>
     <TextField
      id="email-id"
      label="email"
      size="small"
      type="email"
      inputRef={email}
      sx={{
       border: `1px solid ${theme?.palette.text?.secondary}`,
       borderRadius: '4px',
      }}
      fullWidth
      placeholder="eg:aubinjaja@gmail.com"
     />
     <TextField
      id="suggestion-id"
      rows={4}
      inputRef={suggestion}
      sx={{
       border: `1px solid ${theme?.palette.text?.secondary}`,
       borderRadius: '4px',
      }}
      label="Your thought or opinion"
      multiline
      fullWidth
     />
     <SendButton onClick={handlerSubmit} name="send">
      send
     </SendButton>
    </Grid>
    <Grid item xs={12} md={6} sx={{ width: '100%', padding: '20px' }}>
     <Stack
      spacing={1}
      sx={{
       width: '100%',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'space-between',
       alignItems: 'center',
      }}
     >
      <Image
       src="/contact.svg"
       alt="pp"
       width="250"
       height="250"
      />
      <Box
       sx={{
        width: '100%',
        display: 'flex',
        textAlign: 'left',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
       }}
      >
       <List>
        {socialContact?.map((value, index) => (
         <ListItem
          key={index}
          sx={{ display: 'flex', gap: '10px', fontSize: '16px' }}
         >
          {value?.icon} <Box>{value?.name}</Box>
         </ListItem>
        ))}
        <ListItem
         sx={{ display: { xs: 'inline-flex', sm: 'none', marginTop: '30px' } }}
        >
         <Stack direction="row" spacing={2}>
          {socialsMedia.map((value, index) => (
           <IconButton
            key={index}
            size="small"
            sx={{
             borderRadius: '50%',
             border: `1px solid  ${theme?.palette?.text?.primary}`,
            }}
            name="contact_button"
           >
            {value?.icon}
           </IconButton>
          ))}
         </Stack>
        </ListItem>
       </List>
      </Box>
     </Stack>
    </Grid>
   </Grid>
  </Box>
 )
}

export default ContactMe
