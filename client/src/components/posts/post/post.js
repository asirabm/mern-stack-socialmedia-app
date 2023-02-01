import React from 'react'
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { StyleCard,StyleCardMeadia,Overlay,Overlay2,Details,SCardActions } from './style';
import moment  from 'moment'
import { deletePost,LikeCountPost } from '../../../actions/Actions';
import { useDispatch } from 'react-redux';

function Post({post,setCurrentId}) {
  const dispatch=useDispatch()
  //console.log(post.selectedFile)
   const updatePost=()=>{
    console.log('From updatePost')
    setCurrentId(post._id)
   }
   const dPost=()=>{
    dispatch(deletePost(post._id))
  }
  const lCount=()=>{
   dispatch(LikeCountPost(post._id))
  }
  
  return (
    <>
     <StyleCard>
       <StyleCardMeadia  image={post.selectedFile} title={post.title} />
         <Overlay>
         <Typography variant='h6'>{post.creator}</Typography>
         <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
         </Overlay>
         <Overlay2>
           <Button sx={{color:'white'}} size='small' onClick={updatePost}>
             <MoreHorizIcon/>
           </Button>
         </Overlay2>
         <Details>
           <Typography variant='body2'>{post.tags.map(tag=>`#${tag}`)}</Typography>
         </Details>
         <div>
           <CardContent>
           <Typography sx={{padding:'0 16px'}}>{post.message}</Typography>
           </CardContent>
           <SCardActions>
              <Button size='small' color='primary' onClick={lCount}>
                <ThumbUpOffAltIcon fontSize={'small'}/>
                {post.LikeCount}
              </Button>
              <Button size='small' color='primary' onClick={dPost}>
                <DeleteIcon fontSize={'small'}/>
              </Button>

           </SCardActions>
         </div>
     </StyleCard>
    </>
  )
}

export default Post