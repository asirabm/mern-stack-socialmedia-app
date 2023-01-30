import React, { useState } from 'react'
import { TextField,Button,Typography, Paper } from '@mui/material'
import FileBase from 'react-file-base64'
import { StylePaper,StyleForm,StyleFileInput } from './style'
import {useDispatch} from 'react-redux'
import { postPost } from '../../actions/Actions'

function FormPost() {
  const dispatch=useDispatch()
  const[postData,setPostData]=useState({
    creator:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:''
  })

const formhandle=(e)=>{
  e.preventDefault()
 dispatch(postPost(postData))
 
}
const clear=()=>{

}



  return (
    <StylePaper>
      <StyleForm onSubmit={formhandle}>
        <Typography>Creating a Memories</Typography>
        <TextField  name='creator' 
        variant='outlined' 
        label="creator"
        value={postData.creator}
        onChange={(e)=>setPostData({
          ...postData,
          creator:e.target.value
        })}
        fullWidth/>

         <TextField name='title' 
        variant='outlined' 
        label="title"
        value={postData.title}
        onChange={(e)=>setPostData({
          ...postData,
          title:e.target.value
        })}
        fullWidth/>
         <TextField name='message' 
        variant='outlined' 
        label="message"
        value={postData.message}
        onChange={(e)=>setPostData({
          ...postData,
          message:e.target.value
        })}

        fullWidth/>
         <TextField name='tags' 
        variant='outlined' 
        label="tags"
        value={postData.tags}
        onChange={(e)=>setPostData({
          ...postData,
          tags:e.target.value
        })}
        fullWidth/>

         <StyleFileInput>
        <FileBase type='file' multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/>
        </StyleFileInput> 
        <Button sx={{marginBottom: 2}} variant='contained' fullWidth size='large' color='primary' type='submit'>Submit</Button>
        <Button  variant='contained' fullWidth size='small' color='error' onClick={clear}>Clear</Button>


      </StyleForm>
    </StylePaper>
  )
}

export default FormPost