

export const postReducer=(posts=[],action)=>{
    switch(action.type){
        case 'fetch_post':return action.payload
        case 'create_post':return [...posts,action.payload]
        default: return posts
    }
}