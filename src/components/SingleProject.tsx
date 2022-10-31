import {
 Box,
 Card,
 CardActions,
 CardContent,
 CardMedia,
 Grid,
 IconButton,
 Typography,
 useTheme,
} from '@mui/material'
import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

function SingleProject({ project }) {
 const theme = useTheme()
 return (
  <Grid item xs={12} md={6} lg={4} sx={{ maxWidth: 345,
    transition:"transform 300ms ease-in",
    width: '100%',
    boxShadow: `0 10px 20px -10px ${theme?.palette?.background?.default}`,
    "&:hover":{
      transform: 'translateY(-5px)'
    },
    "&:hover  h5":{
        color: `${theme?.palette?.primary?.contrastText}`
    }
   }}>
   <Card sx={{ width: '100%','&:hover > img':{
  filter: "none",
  } }}>
    <CardMedia
     component="img"
     alt="green iguana"
     height="250"
     image={project?.image}
     sx={{objectFit:"cover",flexGrow:1}}

    />
    <CardContent>
     <Typography gutterBottom variant="h5"  sx={{color:`${theme?.palette?.text?.primary}`,transition:"all  300ms ease-in"}}>
      {project?.name}
     </Typography>
     <Typography variant="body2" color="text.secondary">
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
     </Typography>
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
     <IconButton size="small">
      <FiGithub />
     </IconButton>
     <IconButton size="small">
      <FiExternalLink />
     </IconButton>
    </CardActions>
   </Card>
  </Grid>
 )
}

export default SingleProject
