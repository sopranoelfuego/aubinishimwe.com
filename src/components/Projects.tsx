import { Box, Grid } from '@mui/material'
import ComponentTitle from '@utils/ComponentTitle'
import React from 'react'
import SingleProject from './SingleProject'

function Projects() {
    const projects=[
        {name:"ultConnect",description:"",image:"/projects/ultConnect.png",gitRepos:"",stack:"React material-Ui Mongodb Firebase(auth)"},
        {name:"education website",description:"",image:"/projects/education.png",gitRepos:"",stack:"Javascript html css"},
    ]
  return (
    <Box id="#projects" sx={{ minHeight: '100vh', width:"100%", padding: ' 0 150px' }}>
        
        <ComponentTitle number="02." nameTitle="Projects"/>
      <Grid container spacing={2} >
        {projects?.map((value, key)=><SingleProject key={key} project={value}/>)}
      </Grid>
    </Box>
  )
}

export default Projects