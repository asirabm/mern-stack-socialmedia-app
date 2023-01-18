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
export const postPost=(req,res)=>{
    res.send('post Posts')
}