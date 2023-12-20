import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import {useTheme} from "@mui/material/styles"
import Image from 'next/image'
import {  useRouter } from "next/router"
import React, { useEffect, useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

function SingleProject({ project }) {
 const theme = useTheme()
 const [length, setLength] = useState<number>(100)
 const router=useRouter()

 const [subDescription, setSubDescription] = useState<string>(project?.description?.substr(0,length))
 useEffect(() => {
     setSubDescription(project?.description?.substr(0,length))
 }, [length])
 const handleIncrementLength=()=>setLength(prev => prev + 100)
 const handleDecrementLength=()=>setLength(prev => prev - 100)
 return (
  <Grid
   item
   xs={12}
   md={6}
   lg={4}

  //  columnSpacing={2}
   sx={{
    maxWidth: {xs:"auto",sm:400},
    transition: 'transform 300ms ease-in',
    display:"flex",
    width: '100%',
    boxShadow: `0 10px 20px -10px ${theme?.palette?.background?.default}`,
    '&:hover': {
     transform: 'translateY(-5px)',
    },

    '&:hover  h5': {
     color: `${theme?.palette?.primary?.contrastText}`,
    },
   }}
  >
   <Card
    sx={{
     width: '100%',
      padding:0,
      height:"auto",
      margin:0,
     '&:hover > img': {
      filter: 'none',
     },
    }}
   >
    <Image
     alt={project?.name}
     height="100%"
     width="100%"
     layout="responsive"
     objectFit='fill'
     src={project?.image}
     
    />
    <CardContent sx={{'&:hover':{cursor:"pointer"}}}>
     <Typography
      gutterBottom
      variant="h5"
      color={`${theme?.palette?.text?.primary}`}
      fontFamily="monospace"
      sx={{ transition: 'all  300ms ease-in' }}
     >
      {project?.name}
     </Typography>
     <Typography variant="body2" color="text.secondary" textAlign="match-parent" fontFamily="monospace">
     {subDescription}
     </Typography>
   {length >= project?.description?.length?'': <Typography variant="body2"  onClick={handleIncrementLength} color={`${theme?.palette?.primary?.contrastText}`}>more</Typography>}
   {length > 100? <Typography variant="body2"  onClick={handleDecrementLength} color={`${theme?.palette?.primary?.contrastText}`}>reduce</Typography>:""}
     <Box
      sx={{
       width: '100%',
       display: 'flex',
       justifyContent: 'flex-end',
       fontSize: '10px',
       fontFamily: 'monospace',
       opacity: '0.70',
       padding: '10px',
      }}
     >
      {project?.stack}
     </Box>
    </CardContent>
    <CardActions
     sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
    >
     <IconButton size="small" name="github_button" aria-label="gitub-product" onClick={()=>router.push(`${project.gitRepos}`)}>
      <FiGithub />
     </IconButton>
     <IconButton size="small" name="view_button" aria-label="view-button" onClick={()=>router.push(`${project.link}`)}>
      <FiExternalLink />
     </IconButton>
    </CardActions>
   </Card>
  </Grid>
 )
}

export default SingleProject
