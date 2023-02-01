import mongoose from "mongoose"
import { postModel } from "../model/post.js"

export const getPost=async (req,res)=>{
  try{
    const postMessage=await postModel.find()
    res.status(200).json(postMessage)
  }
  catch(e){
    res.status(404).json({message:e.message})
  }
}
export const postPost=async(req,res)=>{
   try{
    //console.log(req.body.selectedFile)
    const Post=new postModel(req.body)
    await Post.save()
    res.status(202).json(Post)
   }
   catch(e){
     console.log(e.message)
   }
   

}

export const updatePost=async(req,res)=>{
  //console.log('Heloooooo')
  const upPost=req.body;
  //console.log(upPost.title)
  const {id:_id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')
  const upatedP=await postModel.findByIdAndUpdate(_id,{...upPost,_id},{new:true})
  res.json(upatedP)
}

export const deletePost=async(req,res)=>{
  const {id:_id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')
  await postModel.findByIdAndDelete(_id)
  res.json({message:'Poste deleted sucessfully'})

}
export const LikePost=async(req,res)=>{
  const {id}=req.params
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')
  const post=await postModel.findById(id)
  post.LikeCount= post.LikeCount+1
  const updatedPost=await post.save()
  res.json(updatedPost)
}