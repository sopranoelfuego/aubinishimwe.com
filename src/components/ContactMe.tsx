import { Box, Grid } from '@mui/material'
import { Stack } from '@mui/system'
import Babalao from "../../public/contact.svg"
import ComponentTitle from '@utils/ComponentTitle'
import Image from 'next/image'
import React from 'react'

function ContactMe() {
  return (
    <Box sx={{padding:" 100px 150px"}}>
        <ComponentTitle number="03." nameTitle="Contact me"/>

        <Grid container>
            <Grid item xs={12} md={6} sx={{position:"relative",height:"400px"}}>
                <Image src={Babalao}  objectFit='contain' layout="fill"/>
                <Box>
                    <Stack direction="row">
                    </Stack>
                    <Stack></Stack>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                form here
            </Grid>
        </Grid>
    </Box>
  )
}

export default ContactMe