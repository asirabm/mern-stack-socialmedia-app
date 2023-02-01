import mongoose, { model } from 'mongoose'

const postSchmea=mongoose.Schema({
  title:String,
  message:String,
  creator:String,
  tags:[String],
  selectedFile:String,
  LikeCount:{
    type:Number,
    default:0
  },
  createdAt: {
    type:Date,
    default:new Date()
  }

})
export const postModel=mongoose.model('postModel',postSchmea)