
import Box from '@mui/material/Box'
import ListColumn from './List Columns/ListColumns'
import { mapOrder } from '~/utils/sorts'
function BoardContent({board}) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box sx={{
      bgcolor:(theme)=> (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width: '100%',
      height: (theme) => theme.trelloCustom.boardContentHeight,
      padding:'10px 0'
    }}>
      <ListColumn columns ={orderedColumns}/>
    </Box>
  )
}
export default BoardContent