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


