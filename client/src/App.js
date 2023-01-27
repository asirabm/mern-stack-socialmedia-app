import React, { useEffect } from 'react'
import {Typography,Container, AppBar, Toolbar, Grid, Grow} from '@mui/material'
import Posts from './components/posts/posts'
import Form from './components/form/Form'
import memories from './images/memories.png'
import { StyleAppBar,StyleImage } from './components/posts/style'
//import Testing from './components/Testing'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from './actions/Actions' 
//import { useSelect } from '@mui/base'



function App(){
   const dispatch=useDispatch()
   const posts=useSelector(state=>state.postReducer)
   useEffect(()=>{
      
      dispatch(getAllPosts())
   
   },[dispatch])



   console.log(posts)

   return(
        <>
       
           <Container>
             <StyleAppBar color='inherit' position='sticky'>
                
                    <Typography variant='h2' align='center'>Asir Memories</Typography>
                    <StyleImage src={memories} alt='memories' height={60}/>
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