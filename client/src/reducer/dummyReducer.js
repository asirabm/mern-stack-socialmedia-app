const initialstate='';

export const DummyReducer=(state=initialstate,action)=>{
   switch(action.type){
    case 'dum1': return 'Hello from dum1' 
    case 'dum2': return 'Hello from dum2'
    default:return state
   }
}