import Axios from 'axios'

const url='http://localhost:5000/posts'
const url1='https://jsonplaceholder.typicode.com/users'
export const FetchData=()=>Axios.get(url)
export const postData=(newPost)=>Axios.post(url,newPost)
export const deletePost=(id)=>Axios.delete(`${url}/${id}`)
export const updatData=(post,id)=>Axios.patch(`${url}/${id}`,post)
export const LikeCountPost=(id)=>Axios.patch(`${url}/${id}/likepost`)
