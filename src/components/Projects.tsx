import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import ComponentTitle from '@utils/ComponentTitle'
import React from 'react'
import SingleProject from './SingleProject'

function Projects() {
 const projects = [
  {
   name: 'Ult-Connect',
   description: 'A social network application for the ult university, with 4 modules(multimedia publications,instant messaging,notifications system,admin panel) and 2 actors(students,admin)  ',
   image: '/projects/ult.webp',
   gitRepos: '',
   stack: 'React . material-Ui . Socket.io . Mongodb . Firebase(auth) ',
  },
  {
   name: 'Education website',
   description: 'A education website ui for praticing css cores stuffs like flexbox,grid,frame and much more,is a vanilla javascript project with pure html and css ',
   image: '/projects/educ.webp',
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
  
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    margin: '0 auto',
    padding: { xs: '60px 0', sm: 'none' },
    maxWidth: '1000px',
   }}
  >
   <ComponentTitle number="02." nameTitle="Projects" />
    
   <Grid container spacing={2}  sx={{width:"100%"}} justifyContent={{xs:"center",sm:"flex-start"}}>
    {projects?.map((value, key) => (
     <SingleProject key={key} project={value} />
    ))}
   </Grid>
  </Box>
 )
}

export default Projects
