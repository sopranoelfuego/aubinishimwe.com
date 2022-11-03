import React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import {useTheme} from "@mui/material/styles"
import { afterLine } from '@utils'
import SocialMedias from './SocialMedias'
import Footer from '@components/Footer'

export const Layout: React.FC = ({ children }: any) => {
 const theme = useTheme()
 const AfterLine = afterLine({ width: '1px', height: '200px' })

 return (
  <>
   <Box
    sx={{
     width: '100vw',
     margin: '0 auto',
     maxWidth: '2400px',
     padding: { xs: '20px', sm: '0 90px', md: '0 150px' },
     position: 'relative',
     color: `${theme?.palette.text?.secondary}`,
     overflowY: 'auto',
     transition: 'all 300ms ease-in',
    }}
   >
    <Box sx={{ width: '100%' }}>
     <SocialMedias />
     <Box
      flexGrow={1}
      sx={{
       width: '100%',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
      }}
     >
      {children}
      <Footer />
     </Box>
     <Stack
      direction="column"
      sx={{
       position: 'fixed',
       display: { xs: 'none', sm: 'flex', md: 'flex' },
       flexDirection: 'column',
       gap: '20px',
       alignItems: 'center',
       bottom: 0,
       right: 50,
      }}
     >
      <Typography
       variant="caption"
       fontWeight="bold"
       letterSpacing={2}
       sx={{ writingMode: 'vertical-lr' }}
      >
       <Link
        sx={{
         display: 'flex',
         flexDirection: 'column',
         textDecoration:"none",
         color: `inherit`,
         transition: 'all  300ms ease-in',
         '&:hover': {
          transform: 'translateY(-3px)',
          color: `${theme?.palette?.primary?.contrastText}`,
         },
        }}
        href="mailto:aubinjaja@gmail.com"
       >
        aubinjaja@gmail.com
       </Link>
      </Typography>
      <AfterLine />
     </Stack>
    </Box>
   </Box>
  </>
 )
}
