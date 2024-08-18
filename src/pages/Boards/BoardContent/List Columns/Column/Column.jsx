import React from 'react'
import { Tooltip, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import AddCardIcon from '@mui/icons-material/AddCard'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import ListCards from './List Cards/ListCards'

const Column = () => {
  
  const COLUMN_HEADER_HEIGHT = '50px'
  const COLUMN_FOOTER_HEIGHT = '56px'
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box sx={{
      minWidth:'300px',
      maxWidth:'300px',
      bgcolor:(theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
      ml: 2,
      borderRadius:1,
      height:'fit-content',
      maxHeight:  (theme) => `calc( ${theme.trelloCustom.boardContentHeight} - ${'40px'})`,
    }}>
      {/* Box Header Card */}
      <Box sx={{
        height: COLUMN_HEADER_HEIGHT,
        p:2,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        borderRadius:1,
      }}>
        <Typography sx={{
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>Column title</Typography>
        <Box>
          <Tooltip title='More options'>
            <ExpandMoreIcon
              sx={{
                cursor:'pointer'
              }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown',
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add New Card</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘C
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘V
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remove this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* Box List Card */}
      <ListCards/>
      {/* Box Footer Column */}
      <Box sx={{
        height: COLUMN_FOOTER_HEIGHT,
        p:2,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        borderRadius:1,
      }}>
        <Button startIcon={<AddCardIcon fontSize="small" />}>Add new card</Button>
        <Tooltip>
          <DragHandleIcon sx={{cursor:'pointer'}}/>
        </Tooltip>
      </Box>
    </Box>
  )
}
export default Column