import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import FaceIcon from '@mui/icons-material/Face'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function BoardBar() {
  const MENU_STYLES= {
    color: '#fff',
    bgcolor: 'transparent',
    borderRadius: '4px',
    '.MuiSvgIcon-root': {
      color: '#fff'
    },
    '&:hover':{
      bgcolor: 'primary.50'
    }
  }
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trelloCustom.boardBarHeight,
      display: 'flex',
      justifyContent:'space-between',
      alignItems: 'center',
      overflowX: 'auto',
      gap: 2,
      borderTop: '1px solid #fff',
      paddingX: 2,
      bgcolor: (theme ) =>(theme.palette.mode === 'dark' ? '#31495e' :'#1976d2')
    }}>

      <Box sx={{display:'flex', alignItem:'center', gap: 2}}>
        <Chip 
          icon={<FaceIcon />}
          label="KhangQuach Dev"
          clickable={true}
          sx={MENU_STYLES}/>
        <Chip 
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable={true}
          sx={MENU_STYLES}/>
        <Chip 
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable={true}
          sx={MENU_STYLES}/>
        <Chip 
          icon={<ElectricBoltIcon />}
          label="Automation"
          clickable={true}
          sx={MENU_STYLES}/>
        <Chip 
          icon={<FilterListIcon />}
          label="Filters"
          clickable={true}
          sx={MENU_STYLES}/>
      </Box>

      <Box sx={{display:'flex', alignItem:'center', gap: 2}}>
        <Button 
          sx={{
            color: '#fff',
            borderColor: '#fff',
            '&:hover': {borderColor: '#fff'}
          }}
          variant="outlined" 
          startIcon={<PersonAddIcon/>}
        >Invite
        </Button>
        <AvatarGroup
          max={7}
          total={24}
          sx={{
            '& .MuiAvatar-root':{
              width: 34,
              height: 34,
              color:'#fff',
              cursor: 'pointer',
              '&:first-of-type':{
                bgColor:'#a4b0de'
              }
            }
          }}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </Box>
  )
}
export default BoardBar