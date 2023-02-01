import express from "express";
import { getPost,postPost,updatePost,deletePost,LikePost} from "../controler/posts.js";

const routes=express.Router()

routes.get('/',getPost)
routes.post('/',postPost)
routes.patch('/:id',updatePost)
routes.delete('/:id',deletePost)
routes.patch('/:id/likepost',LikePost)

export default routes
