import { getPopperUnstyledUtilityClass, useSelect } from "@mui/base"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPosts,getDum } from "../actions/Actions"

const Testing=()=>{
  const dispatch=useDispatch();
  const post=useSelector(state=>state.postReducer)
  const dum=useSelector(state=>state.dummyReducer)
  console.log(post)
  console.log(dum)
  
 
    const getPost=()=>{
           dispatch(getPosts())
    }
    const getDums=()=>{
        dispatch(getDum())
    }

    return (
        <>
         <button onClick={getPost}>Get Posts</button>
         <button onClick={getDums}>Get Dummy</button>
        </>
    )
}
export default Testing