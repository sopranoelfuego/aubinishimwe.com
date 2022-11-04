import React, { useContext, useEffect, useState } from 'react'

import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import {useTheme} from '@mui/material/styles'

import { BiMenuAltRight } from 'react-icons/bi'
import { BsBrightnessHigh, BsBrightnessHighFill } from 'react-icons/bs'
import  Box  from '@mui/system/Box'
import { ColorModeContext } from '@pages/_app'
import { GLobalButton } from '@utils/Button'
import Link from './CustomLink'
import Image from 'next/image'

export function Header() {
 const [visibility, setVisibility] = useState<'none' | 'visible'>('none')
 useEffect(() => {
  setVisibility('visible')
 }, [])

 const colorMode = useContext(ColorModeContext)
 const navListItems = [
  { number: '01', href: '#aboutMe', name: 'About', delay: '0ms' },
  { number: '02', href: '#projects', name: 'Projects', delay: '200ms' },
  { number: '03', href: '#contact', name: 'Contact', delay: '600ms' },
  { number: '04', href: '#blog', name: 'Blog', delay: '400ms' },
 ]
 const theme = useTheme()
 const [displayMenu, setDisplayMenu] = useState<Boolean>(false)
 const handleDisplayMenu = () => setDisplayMenu(prev => !prev)
 return (
  <Box
   sx={{
    position: 'fixed',
    top: 0,
    width: '100vw',
    height: { xs: '60px', sm: '100px' },
    fontFamily: 'monospace',
    boxShadow: `0 10px 30px -10px ${theme?.palette?.background?.default}`,
    zIndex: 20,
    color: `${theme?.palette.text?.secondary}`,
    backgroundColor:
     theme?.palette?.mode === 'dark'
      ? 'rgba(10, 25, 47, 0.85)'
      : 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(5px)',
    padding: { xs: '0 10px', sm: '0 10px', md: '0 50px' },
   }}
  >
   <Container maxWidth="xl">
    <Toolbar
     disableGutters
     sx={{
      display: 'flex',
      justifyContent: 'space-between',
      position: 'relative',
     }}
    >
     <Link
      href="/"
      passHref
      style={{ color: `${theme?.palette?.primary?.contrastText}` }}
     >
      <Image src="/logo.png" width={32} height={32} alt="logo" />
     </Link>
     <Box sx={{display:"flex",alignItems:"center",gap:"20px"}}>
     <IconButton onClick={colorMode.toggleColorMode} name="theme_button_toggle">
        {theme?.palette?.mode ? (
         <BsBrightnessHighFill fontSize="26px" />
        ) : (
         <BsBrightnessHigh fontSize="26px" />
        )}
       </IconButton>
       <List
      sx={{
       width: 'auto',
       display: 'flex',
       visibility: { md: 'visible', xs: displayMenu ? 'visible' : 'hidden' },
       opacity: { md: 1, xs: displayMenu ? 1 : 0 },
       position: { xs: 'absolute', md: 'static' },
       right: 0,
       top: '50px',
       flexDirection: { xs: 'column', md: 'row' },
       padding: { xs: '4px 15px', md: '0' },
       justifyContent: 'center',
       alignItems: 'center',
       fontSize: { xs: '20px', md: '13px' },
       borderRadius:"5px",
       backgroundColor: { xs: `${theme.palette.primary.light}`, md: 'inherit' },
       gap: '20px',
       letterSpacing: '1px',
      }}
     >
      {navListItems?.map((value, key) => (
       <ListItem
        key={key}
        disableGutters
        sx={{
         transition: 'all 300ms ease-in',
         transitionDelay: `${value?.delay}`,
         visibility: `${visibility}`,
        }}
       >
        <Box
         sx={{
          transition: 'all 300ms ease-in',
          display: 'flex',
          fontFamily: 'monospace',
          width: '100%',
          '&:hover': {
           color: `${theme?.palette?.primary?.contrastText}`,
           cursor: 'pointer',
          },
         }}
        >
         <Link href={`${value?.href}`} passHref>
          <Stack direction="row" alignItems="center">
           <Typography
            variant="caption"
            fontFamily="monospace"
            sx={{ color: `${theme?.palette?.primary?.contrastText}` }}
           >
            {value?.number}.
           </Typography>
            
           <Typography variant="caption" fontFamily="monospace" display="inline-flex">
            {value?.name}
           </Typography>
          </Stack>
         </Link>
        </Box>
       </ListItem>
      ))}
      <ListItem disableGutters>
       <GLobalButton name="resume" aria-label="resume">Resume</GLobalButton>
      </ListItem>
     </List>
     </Box>
     

     <Box sx={{ display: { xs: 'inline-block', md: 'none' } }}>
      <IconButton onClick={handleDisplayMenu} name="menuButton" aria-label="menu-drop-down">
       <BiMenuAltRight />
      </IconButton>
     </Box>
    </Toolbar>
   </Container>
  </Box>
 )
}
