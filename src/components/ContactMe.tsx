import {
 Box,
 Grid,
 List,
 ListItem,
 styled,
 TextField,
 Typography,
 useTheme,
} from '@mui/material'
import { Stack } from '@mui/system'
import ComponentTitle from '@utils/ComponentTitle'
import { ImLocation2 } from 'react-icons/im'
import { BsWhatsapp } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import React from 'react'

const socialContact = [
 { name: 'bujumbura,burundi', icon: <ImLocation2 /> },
 { name: '+25769778171', icon: <BsWhatsapp /> },
 { name: 'aubinjaja@gmail.com', icon: <SiGmail /> },
]
function ContactMe() {
 const theme = useTheme()

 const SendButton=styled('button')(({theme})=>({
    width: '100%',
    padding:"15px 20px",
    fontWeight:"700",
    letterSpacing:"3px",
    color:`${theme?.palette.primary.contrastText}`,
    border: `1px solid ${theme?.palette.primary.contrastText}`,
    backgroundColor:"inherit",
    transition:"all  300ms ease-in",
 '&:hover': { backgroundColor: 'rgba(10, 212, 43,0.1)' },


 }))
 return (
  <Box
   sx={{
    padding: ' 100px 150px',
    bgcolor: `${theme?.palette.background.paper}`,
   }}
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
       id="outlined-textarea"
       label="Your Name"
       fullWidth
      size='small'
       sx={{
        border: `1px solid ${theme?.palette.text?.secondary}`,
        borderRadius: '4px',
       }}
       placeholder="eg:aubin ishimwe"
      />
     </Stack>
     <TextField
      id="outlined-textarea"
      label="Multiline Placeholder"
      size='small'
      type="email"
      sx={{
       border: `1px solid ${theme?.palette.text?.secondary}`,
       borderRadius: '4px',
      }}
      fullWidth
      placeholder="eg:aubinjaja@gmail.com"
     />
     <TextField
      id="outlined-textarea"
      rows={4}
      sx={{
       border: `1px solid ${theme?.palette.text?.secondary}`,
       borderRadius: '4px',
      }}
      label="Your thought or opinion"
      multiline
      fullWidth
     />
     <SendButton >
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
      <img
       src="/contact.svg"
       alt="pp"
       style={{width:"100%", maxWidth: '250px', maxHeight: '250px' }}
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
         <ListItem key={index} sx={{display:"flex",gap:"10px" ,fontSize:"16px"}}>
          {value?.icon} <Box>{value?.name}</Box>
         </ListItem>
        ))}
       </List>
      </Box>
     </Stack>
    </Grid>
   </Grid>
  </Box>
 )
}

export default ContactMe
