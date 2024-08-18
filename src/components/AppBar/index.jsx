import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as trelloIcon } from '~/assets/trelloicon.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import WorkSpace from './Menus/WorkSpaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import NotificationsIcon from '@mui/icons-material/Notifications'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profiles from './Menus/Profiles'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
function AppBar() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trelloCustom.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: '10px',
      overflowX: 'auto',
      bgcolor: (theme ) =>(theme.palette.mode === 'dark' ? '#2c3e50' :'#1565c0')
    }}>
      <Box sx={{display:'flex', alignItem:'center', gap: 2}}>
        <AppsIcon sx={{ color: '#fff'}} />
        <Box sx={{display: 'flex', alignItems: 'center', color: '#fff', gap: 0.5}}>
          <SvgIcon component={trelloIcon} inheritViewBox sx={{color: '#fff'}}/>
          <Typography sx={{fontSize: '1.2rem', fontWeight: 'bold'}}>Trello</Typography>

          <Box sx={{display:{xs:'none', md:'flex'}}}>
            <WorkSpace/>
            <Recent/>
            <Starred/>
            <Templates/>
            <Button sx={{color:'#fff'}} variant="outlined" startIcon={<LibraryAddIcon/>}>Create</Button>
          </Box>

        </Box>
      </Box>

      <Box sx={{ display:'flex', alignItems:'center', gap:2, marginRight:'20px', color:'#fff' }}>
        <TextField
          onChange={ (e) => setSearchValue(e.target.value)}
          value={searchValue}
          sx={{
            minWidth:'120px',
            maxWidth:'200px',
            '& label':{ color:'#fff' },
            '& input':{ color:'#fff' },
            '& label.Mui-focused':{ color:'#fff' },
            '& .MuiOutlinedInput-root':{
              '& fieldset':{ borderColor:'#fff' },
              '&:hover fieldset':{ borderColor:'#fff' },
              ' &.Mui-focused fieldset':{ borderColor:'#fff' }
            }
          }}
          id="outlined-search"
          label="Search..."
          type="text"
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{color:'#fff'}} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize='small' 
                sx={{color: searchValue ? '#fff': 'transparent', cursor:'pointer'}}
                onClick={() => setSearchValue('')}
              />
            )
          }}
        />
        <ModeSelect sx={{color:'#fff'}} />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor:'pointer' }}>
            <NotificationsIcon/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon/>
        </Tooltip>
        <Profiles/>
      </Box>
    </Box>
  )
}
export default AppBar