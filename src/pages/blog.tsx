import { Layout } from '@layout'
import Box from '@mui/system/Box'
import useTheme from '@mui/material/styles/useTheme'
import React from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import { Header } from '@components/Header'
import { NextSeo } from 'next-seo'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { GLobalButton } from '@utils'

function blog() {
 const theme = useTheme()
 return (
  <>
   <NextSeo
    title="aubinishimwe | blog"
    description="my name is aubin ishimwe am a web developper and this is my personal portefolio and blog included"
    additionalLinkTags={[
     {
      rel: 'icon',
      href: 'logo.png',
     },
    ]}
    languageAlternates={[
     {
      hrefLang: 'de-AT',
      href: 'https://www.canonical.ie/de',
     },
    ]}
    twitter={{
     handle: '@aubinishimwe2',
     site: '@aubinishimwe2',
     cardType: 'summary_large_image',
    }}
   />
   <Box
    sx={{
     paddingTop: '100px',
     bgcolor: `${theme?.palette?.background?.default}`,
     fontFamily: 'monospace',
     textAlign: 'center',
     height:{ xs:"100vh",sm:"auto"}
    }}
   >
    <Header />
    <Layout>
     <Image src="/blog.svg" height={300} width={300} alt="no-blog" />
     <Stack spacing={2}>

     <Typography
      variant="h2"
      component="h2"
      fontSize="clamp(30px, 8vw, 60px)"
      fontWeight="600"
      fontFamily="monospace"
      width="100%"
      color={`${theme?.palette?.text?.primary}`}
     >
      i'm coding it
     </Typography>
     <Typography variant="body1">comming soon ...!</Typography>
     <Stack direction="row" justifyContent="center" paddingBottom={5} width='100%'>
      <TextField
       id="subscribe-email"
       size="small"
       label="email"
       sx={{
        border: `1px solid ${theme?.palette.text?.secondary}`,
        borderRadius: '4px',
       }}
       variant="outlined"
      />{' '}
      <GLobalButton name="subscribe" aria-label="subscriber-button">subscribe</GLobalButton>
     </Stack>
     </Stack>
    </Layout>
   </Box>
  </>
 )
}

export default blog
