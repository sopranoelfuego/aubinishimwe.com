import { Header } from '@components'
import { Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import {FiGithub} from "react-icons/fi"
import {AiFillLinkedin, AiOutlineInstagram,AiOutlineTwitter} from "react-icons/ai"
import React from 'react'
import Link from 'next/link'

export const Layout: React.FC = ({ children }: any) => {
 return (
  <>
   <Header />
   <Grid container spacing={2}>
    <Grid item xs={2}>
     <Stack>
      <FiGithub/>
     </Stack>
     <Stack>
      <AiOutlineInstagram/>
     </Stack>
     <Stack>
      <AiOutlineTwitter/>
     </Stack>
     <Stack>
      <AiFillLinkedin/>
     </Stack>
    </Grid>
    <Grid item xs={8}>
     {children}
    </Grid>
    <Grid item xs={2}>
      <Stack>
        <Typography>
          <Link as="a" href="mailto:aubinjaja@gmail.com">aubinjaja@gmail.com</Link>
        </Typography>
      </Stack>
    </Grid>
   </Grid>

   {children}
  </>
 )
}
