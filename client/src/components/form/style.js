import { Paper } from "@mui/material";
import { styled } from "@mui/system";


export const StylePaper=styled(Paper)((theme)=>(
   
    {
      padding:100 
    }
))

export const StyleForm=styled('form')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
})
export const StyleFileInput=styled('div')({
    width: '97%',
    margin: '10px 0'
}
)
