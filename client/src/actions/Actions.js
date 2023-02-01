import * as api from "../api"

/* const posts=[
    {name:'asir',age:12},
    {name:'asirab',age:12},
    {name:'aasir',age:14},
    {name:'aaasir',age:16},
    {name:'azir',age:32},
]



export const getDum=()=>{
    return{
        type:'dum1'
    }
} */

export const getPosts=(posts)=>{
    return {
        type:'fetch_post',
        payload:posts
    }
}

export const getAllPosts=()=>async(dispatch)=>{
    try{
        const {data}=await api.FetchData()
        dispatch(getPosts(data))
    }
    catch(e){
        console.log(e.message)
    }
}

export const postPost=(post)=>async(dispatch)=>{
    try{
     const {data}= await api.postData(post)
     console.log(data)
     dispatch({
        type:'create_post',
        payload:data
     })
    }
    catch(e){
      console.log(e.message)
    }
}
export const updataPost=(post,currentId)=>async(dispatch)=>{
    try{
        //console.log(`From disapatch ${post} ,${currentId}`)
       const {data}= await api.updatData(post, currentId)
       console.log(data)
      
       dispatch({
        type:'update_post',
        payload:data
       })
    }
    catch(e){
    console.log(e.message)
    }
}

export const deletePost=(id)=>async(dispatch)=>{
  try{
    await api.deletePost(id)
    dispatch({
        type:'delete_post',
        payload:id
    })
  }
  catch(e){
    console.log(e.message)
  }

}


export const LikeCountPost=(id)=>async(dispatch)=>{
    try{
       const {data}= await api.LikeCountPost(id)
       dispatch({
        type:'like_count',
        payload:data
       })
    }
    catch(e){
      console.log(e.message)
    }
}