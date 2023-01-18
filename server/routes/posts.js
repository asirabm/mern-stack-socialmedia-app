import express from "express";
import { getPost,postPost } from "../controler/posts.js";

const routes=express.Router()

routes.get('/',getPost)
routes.post('/',postPost)

export default routes
