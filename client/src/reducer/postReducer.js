const initialState=[]

export const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'fetch_post':return action.payload
        case 'create_post':return state
        default: return state
    }
}