import React, { Suspense } from 'react'
import { Header } from '@components'
import Box from "@mui/material/Box"
import useTheme from "@mui/material/styles/useTheme"
import { NextSeo } from 'next-seo'
import { Layout } from '@layout'
import { Hero } from '@components/Hero'
import dynamic from 'next/dynamic'
import Experience from '@components/Experience'
const ContactMe = dynamic(() => import('@components/ContactMe'),{suspense:true})
const Projects = dynamic(() => import('@components/Projects'),{suspense:true})
const AboutMe = dynamic(() => import('@components/AboutMe'),{suspense:true})
const Home = () => {
 const theme = useTheme()
 return (
  <>
   <NextSeo
    title="aubin ishimwe"
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
     bgcolor: `${theme?.palette?.background?.default}`,
     fontFamily: 'monospace',
    }}
   >
    <Header />
    <Layout>
     <Hero />
     <Suspense fallback={<div>Loading ...</div>}>
     <AboutMe />
     <Experience/>
      <Projects />
      <ContactMe />
     </Suspense>
    </Layout>
   </Box>
  </>
 )
}

export default Home
