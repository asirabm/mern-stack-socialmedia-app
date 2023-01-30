import express from "express";
import { getPost,postPost,updatePost } from "../controler/posts.js";

const routes=express.Router()

routes.get('/',getPost)
routes.post('/',postPost)
routes.patch('/:id',updatePost)

export default routes
