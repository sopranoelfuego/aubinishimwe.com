import { Box, Grid } from '@mui/material'
import ComponentTitle from '@utils/ComponentTitle'
import React from 'react'
import SingleProject from './SingleProject'

function Projects() {
 const projects = [
  {
   name: 'Ult-Connect',
   description: '',
   image: '/projects/ultConnect.png',
   gitRepos: '',
   stack: 'React material-Ui Mongodb Firebase(auth)',
  },
  {
   name: 'Education website',
   description: '',
   image: '/projects/education.png',
   gitRepos: '',
   stack: 'Javascript html css',
  },
 ]
 return (
  <Box
   id="projects"
   sx={{
    minHeight: '100vh',
    width: '100%',
    margin: '0 auto',
    padding: { xs: '60px 0', sm: 'none' },
    maxWidth: '1000px',
   }}
  >
   <ComponentTitle number="02." nameTitle="Projects" />
   <Grid container spacing={2} justifyContent="center">
    {projects?.map((value, key) => (
     <SingleProject key={key} project={value} />
    ))}
   </Grid>
  </Box>
 )
}

export default Projects
