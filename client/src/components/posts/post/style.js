import { Card, CardActions, CardMedia } from "@mui/material";
import { styled } from "@mui/system";


export const StyleCard=styled(Card)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative'
})
export const StyleCardMeadia=styled(CardMedia)({
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',

})
export const Overlay=styled('div')({
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white'
})
export const Overlay2=styled('div')({
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
})
export const Details=styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
})
export const SCardActions=styled(CardActions)({
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between'
})