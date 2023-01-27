import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";


const StyleAppBar=styled(AppBar)({
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
})
const StyleImage=styled('img')({
    marginLeft:'15px'
})
export {StyleAppBar,StyleImage}