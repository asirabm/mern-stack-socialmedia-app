import React from 'react'
import {Card,CardActions,CardContent,CardMedia,Button,Typography} from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { StyleCard,StyleCardMeadia,Overlay,Overlay2,Details,SCardActions } from './style';
import moment  from 'moment'


function Post({post}) {
  //console.log(post.selectedFile)
  return (
    <>
     <StyleCard>
       <StyleCardMeadia  image={post.selectedFile} title={post.title} />
         <Overlay>
         <Typography variant='h6'>{post.creator}</Typography>
         <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
         </Overlay>
         <Overlay2>
           <Button sx={{color:'white'}} size='small' onClick={()=>{}}>
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
              <Button size='small' color='primary' onClick={()=>{}}>
                <ThumbUpOffAltIcon fontSize={'small'}/>
                {post.LikeCount}
              </Button>
              <Button size='small' color='primary' onClick={()=>{}}>
                <DeleteIcon fontSize={'small'}/>
              </Button>

           </SCardActions>
         </div>
     </StyleCard>
    </>
  )
}

export default Post