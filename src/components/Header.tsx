import React, { useContext } from 'react'
import { Container, IconButton, List, ListItem,  Stack,  styled, useTheme } from '@mui/material'
import { BsBrightnessHigh, BsBrightnessHighFill } from 'react-icons/bs'
import Link from 'next/link'
import { Box } from '@mui/system'
import { ColorModeContext } from '@pages/_app'
export function Header() {

  const  colorMode = useContext(ColorModeContext)
 const navLists = [
  { number: '01',href:"/about", name: 'About' },
  { number: '02',href:"/projects", name: 'projects' },
  { number: '03',href:"/work", name: 'Work' },
  { number: '04',href:"/contact", name: 'Contact' },
 ]
 const theme=useTheme()
 const CustomHeaderContainer = styled('header')(({ theme }) => ({
  display: 'flex',
  maxWidth: '1200px',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100px',
  backgroundColor:theme.palette.primary.main,
 }))
 return (
  <Container maxWidth="lg">

  <CustomHeaderContainer>
   <Link as="a" href="#">
    <h1>logo</h1>
   </Link>

   <List
    sx={{ width: 'auto', display: 'flex',  bgcolor: 'inherit' }}
   >
    <ListItem disableGutters>
      <IconButton onClick={colorMode.toggleColorMode} >
      {theme?.palette.mode ? <BsBrightnessHighFill fontSize="40px" color="white"  />:<BsBrightnessHigh fontSize="40px" color='black'/>}
      </IconButton>
    </ListItem>
    {navLists?.map((value, key) => (
     <ListItem key={key} disableGutters>
      <Link as="a" href={value?.href}>
        <Stack direction="row">
          <Box>{value?.number}</Box>
          <Box>{value?.name}</Box>
        </Stack>
      </Link>
     </ListItem>
    ))}
    <ListItem disableGutters>
     <button>Resume</button>
    </ListItem>
   </List>
   
  </CustomHeaderContainer>
  </Container>
 )
}
