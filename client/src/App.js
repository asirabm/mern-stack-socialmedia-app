import React from 'react'
import {Container,Grid,Typography,Grow,AppBar} from '@mui/material'
import memories from './images/memories.png'

function App(){
    return(
        <Container maxWidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>Memories</Typography>
                <img src={memories} alt="memories" height="60"></img>
            </AppBar>
            
        </Container>
    )
}
export default App