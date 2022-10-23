import React from 'react'
import { IconButton, List, ListItem,  Stack,  styled } from '@mui/material'
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'
import Link from 'next/link'
import { Box } from '@mui/system'
export function Header({ lightMode, changeThemeMode }) {
 const navLists = [
  { number: '01',href:"/about", name: 'About' },
  { number: '02',href:"/projects", name: 'projects' },
  { number: '03',href:"/work", name: 'Work' },
  { number: '04',href:"/contact", name: 'Contact' },
 ]
 const CustomHeaderContainer = styled('header')(({ theme }) => ({
  display: 'flex',
  maxWidth: '1200px',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100px',
  backgroundColor:lightMode? theme.palette?.secondary.main:theme.palette.primary.main,
 }))
 return (
  <CustomHeaderContainer>
   <Link as="a" href="#">
    <h1>logo</h1>
   </Link>

   <List
    sx={{ width: 'auto', display: 'flex',  bgcolor: 'inherit' }}
   >
    <ListItem disableGutters>
      <IconButton onClick={changeThemeMode} >
      {lightMode?<MdDarkMode fontSize="40px"  />:<MdOutlineDarkMode fontSize="40px" color='white'/>}
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
 )
}
