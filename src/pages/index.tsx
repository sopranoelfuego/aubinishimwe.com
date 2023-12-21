import { Header } from '@components'
import  {useTheme}  from '@mui/material'
import Box from "@mui/material/Box"
import { NextSeo } from 'next-seo'
import { Layout } from '@layout'
import { Hero } from '@components/Hero'
import AboutMe from '@components/AboutMe'
import dynamic from 'next/dynamic'
const Projects = dynamic(() => import('@components/Projects'), {
  loading: () => <p>Loading...</p>,
})
const ContactMe = dynamic(() => import('@components/ContactMe'), {
  loading: () => <p>Loading...</p>,
})
 
const Home = () => {
 const theme = useTheme()
 return (
  <>
   <NextSeo
    title="aubin ishimwe"
    description="my name is aubin ishimwe am a software developper and this is my personal portefolio and blog included"
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
