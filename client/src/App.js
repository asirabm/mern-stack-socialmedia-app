import React from 'react'
import {Typography,Container, AppBar, Toolbar, Grid, Grow} from '@mui/material'
import Posts from './components/posts/posts'
import Form from './components/form/Form'
import memories from './images/memories.png'
import { StyleAppBar,StyleImage } from './components/posts/style'


function App(){
    return(
        <>
          <Container>
             <StyleAppBar color='inherit' position='sticky'>
                
                    <Typography variant='h2' align='center'>Asir Memories</Typography>
                    <img src={memories} alt='memories' height={60}/>
                
             </StyleAppBar>
          </Container>
          <Grow in>
          <Container sx={{m:10}}>
          <Grid container justifyContent={'space-between'} alignItems={'center'} >
                 <Grid item xs={12} sm={7}>
                    <Posts/>
                 </Grid>
                 <Grid item xs={12} sm={5}>
                    <Form/>
                 </Grid>
             </Grid>

          </Container>
          </Grow>

        </>
    )
}
export default App