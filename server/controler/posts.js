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
  const upPost=req.body;
  const {id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id')
  const upatedPost=await postModel.findByIdAndUpdate(id,upPost,{new:true})
}