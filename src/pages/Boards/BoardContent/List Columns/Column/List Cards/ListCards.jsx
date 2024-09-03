import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Typography } from '@mui/material'
import TrelloCard from './Card/TrelloCard'
import { useState } from 'react'
const ListCards = ({cards}) => {
  const COLUMN_HEADER_HEIGHT = '50px'
  const COLUMN_FOOTER_HEIGHT = '56px'
  return (
    <Box sx={{
      p: '0 5px',
      m:'0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX:'hidden',
      overflowY:'auto',
      maxHeight: (theme) => `calc(${theme.trelloCustom.boardContentHeight} - ${'40px'} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0da'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#fff'
      }
    }}>
      {cards?.map((card, index ) =>{
        return <TrelloCard key={card?._id} card={card}/>
      })}
    </Box>
  )
}
export default ListCards