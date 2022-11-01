import { Header } from '@components'
import { Box, useTheme } from '@mui/material'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { Layout } from '@layout'
import { Hero } from '@components'
import AboutMe from '@components/AboutMe'
import ContactMe from '@components/ContactMe'
import Projects from '@components/Projects'

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
    languageAlternates={[{
      hrefLang: 'de-AT',
      href: 'https://www.canonical.ie/de',
    }]}
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
     <AboutMe />
     <Projects />
     <ContactMe />
    </Layout>
   </Box>
  </>
 )
}

export default Home
