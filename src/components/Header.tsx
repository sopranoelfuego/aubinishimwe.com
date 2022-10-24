import React, { useContext } from 'react'
import { Container, IconButton, List, ListItem,  Stack,  styled, useTheme } from '@mui/material'
import { BsBrightnessHigh, BsBrightnessHighFill } from 'react-icons/bs'
import Link from 'next/link'
import { Box } from '@mui/system'
import { ColorModeContext } from '@pages/_app'
import { GLobalButton } from '@utils/Button'
import { LinkAnchor } from '@utils'
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
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100px',
  backgroundColor:"inherit",
 }))
 return (


  <CustomHeaderContainer>
   <Link as="a" href="#">
    <h1>A</h1>
   </Link>

   <List
    sx={{ width: 'auto', display: 'flex',  bgcolor: 'inherit',fontSize:"13px",gap:"10px",letterSpacing:"1px" }}
   >
    <ListItem disableGutters>
      <IconButton onClick={colorMode.toggleColorMode} >
      {theme?.palette?.mode ? <BsBrightnessHighFill fontSize="26px"/>:<BsBrightnessHigh fontSize="26px" />}
      </IconButton>
    </ListItem>
    {navLists?.map((value, key) => (
     <ListItem key={key} disableGutters >
      <Link as="a" href={value?.href}>
        <Stack direction="row" alignItems="center"  >
          <LinkAnchor>
          <Box sx={{color:`${theme?.palette?.primary?.contrastText}`}}>{value?.number}.</Box>
          <Box >{value?.name}</Box>
          </LinkAnchor>
        </Stack>
      </Link>
     </ListItem>
    ))}
    <ListItem disableGutters>
      <GLobalButton>
      Resume
      </GLobalButton>
     
    </ListItem>
   </List>
   
  </CustomHeaderContainer>
  
 )
}
