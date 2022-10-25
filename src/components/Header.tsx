import React, { useContext, useEffect, useState } from 'react'
import {  IconButton, List, ListItem,  Stack,  styled, useTheme } from '@mui/material'
import { BsBrightnessHigh, BsBrightnessHighFill } from 'react-icons/bs'
import Link from 'next/link'
import { Box } from '@mui/system'
import { ColorModeContext } from '@pages/_app'
import { GLobalButton } from '@utils/Button'
import { LinkAnchor } from '@utils'
export function Header() {
  const [visibility, setVisibility] = useState<"none" | "visible">("none")
  useEffect(() => {
    setVisibility("visible")
  }, [])
  
  const  colorMode = useContext(ColorModeContext)
 const navLists = [
  { number: '01',href:"#aboutMe", name: 'About',delay:"0ms" },
  { number: '02',href:"/projects", name: 'projects',delay:"200ms" },
  { number: '03',href:"/work", name: 'Work',delay:"400ms" },
  { number: '04',href:"/contact", name: 'Contact',delay:"600ms" },
 ]
 const theme=useTheme()
 const CustomHeaderContainer = styled('header')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100px',
  fontFamily:"monospace",
  zIndex: 20,
  color:`${theme?.palette.text?.secondary}`,
  backgroundColor:theme?.palette?.mode==="dark"?"rgba(10, 25, 47, 0.85)":"rgba(255, 255, 255, 0.85)",
  position:"sticky",
  backdropFilter:"blur(5px)",
  padding:"0 50px",
  top:0
 }))
 return (


  <CustomHeaderContainer>
   <Link as="a" href="#/">
    <h1>A</h1>
   </Link>

   <List
    sx={{ width: 'auto', display: 'flex', fontSize:"13px",gap:"20px",letterSpacing:"1px" }}
   >
    <ListItem disableGutters>
      <IconButton onClick={colorMode.toggleColorMode} >
      {theme?.palette?.mode ? <BsBrightnessHighFill fontSize="26px"/>:<BsBrightnessHigh fontSize="26px" />}
      </IconButton>
    </ListItem>
    {navLists?.map((value, key) => (
     <ListItem key={key} disableGutters sx={{transition:"all 300ms ease-in",transitionDelay:`${value?.delay}`,visibility:`${visibility}`}}>
      <Link as="a" href={value?.href}>
        <Stack direction="row" alignItems="center"   >
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
