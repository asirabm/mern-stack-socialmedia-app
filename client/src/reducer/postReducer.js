

export const postReducer=(posts=[],action)=>{
    switch(action.type){
        case 'fetch_post':return action.payload
        case 'create_post':return [...posts,action.payload]
        case'update_post': return posts.map(post=>post._id===action.payload_id?action.payload:post)
        case 'delete_post': return posts.filter(post=>post.id ==! action.payload)
        case 'like_count': return posts.map(post=>post._id===action.payload_id?action.payload:post)
        default: return posts
    }
}