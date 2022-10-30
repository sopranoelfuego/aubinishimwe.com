import React, { useContext, useEffect, useState } from 'react'
import {
 Container,
 IconButton,
 List,
 ListItem,
 Stack,
 styled,
 Toolbar,
 Typography,
 useTheme,
} from '@mui/material'
import { BiMenuAltRight } from 'react-icons/bi'
import { BsBrightnessHigh, BsBrightnessHighFill } from 'react-icons/bs'
import { Box } from '@mui/system'
import { ColorModeContext } from '@pages/_app'
import { GLobalButton } from '@utils/Button'
import Link from './CustomLink'
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
    position: 'sticky',
    top: 0,
    width: '100vw',
    height: '100px',
    fontFamily: 'monospace',
    boxShadow: `0 10px 30px -10px ${theme?.palette?.background?.default}`,
    zIndex: 20,
    color: `${theme?.palette.text?.secondary}`,
    backgroundColor:
     theme?.palette?.mode === 'dark'
      ? 'rgba(10, 25, 47, 0.85)'
      : 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(5px)',
    padding: {xs:"0 10px",sm:'0 10px',md:'0 50px'},
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
     <Link href="/" passHref>
      <h1>A</h1>
     </Link>

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
       backgroundColor: { xs: `${theme.palette.primary.light}`, md: 'inherit' },
       gap: '20px',
       letterSpacing: '1px',
      }}
     >
      <ListItem disableGutters>
       <IconButton onClick={colorMode.toggleColorMode}>
        {theme?.palette?.mode ? (
         <BsBrightnessHighFill fontSize="26px" />
        ) : (
         <BsBrightnessHigh fontSize="26px" />
        )}
       </IconButton>
      </ListItem>
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
            sx={{ color: `${theme?.palette?.primary?.contrastText}` }}
           >
            {value?.number}.
           </Typography>
           <Typography variant="caption">{value?.name}</Typography>
          </Stack>
         </Link>
        </Box>
       </ListItem>
      ))}
      <ListItem disableGutters>
       <GLobalButton>Resume</GLobalButton>
      </ListItem>
     </List>

     <Box sx={{ display: { xs: 'inline-block', md: 'none' } }}>
      <IconButton onClick={handleDisplayMenu}>
       <BiMenuAltRight />
      </IconButton>
     </Box>
    </Toolbar>
   </Container>
  </Box>
 )
}
