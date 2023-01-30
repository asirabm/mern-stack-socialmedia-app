import React from 'react'
import Post from './post/post.js'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material'
//import Post from './post/post.js'

function Posts() {
  const posts=useSelector(state=>state.postReducer)
  console.log(posts)
  return (
    <>
      <Grid container alignItems={'stretch'} spacing={2}>
          {
            posts.map(post=>
              <Grid key={post._id} xs={12} sm={6} item ><Post post={post}/></Grid>
              )
          }
      </Grid>
    
    
    </>
  )
}

export default Posts