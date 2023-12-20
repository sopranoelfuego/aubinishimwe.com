import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import ComponentTitle from '@utils/ComponentTitle'
import React from 'react'
import SingleProject from './SingleProject'

function Projects() {
 const projects = [
  {
    id:1,
   name: 'Personal template for Management Systems',
   description: 'A personal Template for Systems build in next 14.',
   image: '/projects/UI_ADMIN.png',
   gitRepos: 'https://github.com/sopranoelfuego/test.git',
   link:"",
   stack: 'Next 14 . Material-Ui',
  },
  {
    id:2,
   name: 'Contributions,loans applications reimboursement Funds app',
   description: 'A internal tool for contributions ,Loans applications and Reimboursement app which allow members to contribute and  take out a loans and reimbourse with interest in a given period of time.',
   image: '/projects/ziganya.png',
   link:"",
   gitRepos: '',
   stack: 'Next 13 . Spring boot',
  },
  {
    id:3,
   name: 'Ult-Connect',
   description: 'A social network application for the ult university, with 4 modules(multimedia publications,instant messaging,notifications system,admin panel) and 2 actors(students,admin)  ',
   image: '/projects/messenger_page.png',
   gitRepos: '',
   link:"",
   stack: 'React . material-Ui . Socket.io . Mongodb . Firebase(auth) ',
  },
  {
    id:4,
   name: 'Education website',
   description: 'A education website ui for praticing css cores stuffs like flexbox,grid,frame and much more,is a vanilla javascript project with pure html and css ',
   image: '/projects/educ.webp',
   gitRepos: 'https://github.com/sopranoelfuego/onlinecourses_ui.git',
   link:"https://studies0098.netlify.app/",
   stack: 'Javascript . html . css',
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
    justifyContent:"center",
    alignItems:"flex-start",
    margin: '0 auto',
    padding: { xs: '60px 0', sm: 'none' },
    maxWidth: '1000px',
   }}
  >
   <ComponentTitle number="02." nameTitle="Projects" />
    
   <Grid container spacing={1} justifyContent="flex-start"   >
    {projects?.map(value => (
     <SingleProject key={value.id} project={value} />
    ))}
   </Grid>
  </Box>
 )
}

export default Projects
