
import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
const ListColumn = () => {
  return(
    <Box sx={{
      bgcolor:'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX:'auto',
      overflowY:'hidden'
    }}>
      <Column/>
      <Column/>
      <Column/>
      <Column/>
      <Column/>
      {/* {button add new column} */}
      <Box sx={{
        minWidth: '200px',
        maxWidth: '200',
        mx:2,
        borderRadius: '6px',
        height: 'fit-content',
        bgcolor : '#ffffff3d'
      }}>
        <Button sx={{
          width:'100%',
          color:'white',
          justifyContent: 'flex-start',
          pl: 2.5,
          py:1
        }} startIcon={<NoteAddIcon/>}>Add new column</Button>
      </Box>
    </Box>
  )
}

export default ListColumn