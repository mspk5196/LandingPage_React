import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Logo from '../../../public/images/logo.png';
import { useNavigate } from 'react-router-dom';
import './NavLinks.scss';
import AboutIcon from '../../../public/icons/about.png';
import HomeIcon from '../../../public/icons/home.png';
import ContactIcon from '../../../public/icons/chat.png';
import SignInIcon from '../../../public/icons/log-in.png';
import SignUpIcon from '../../../public/icons/user.png';
import ProfileIcon from '../../../public/icons/profile.png';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })( 
  ({ theme }) => ({ 
    flexGrow: 1, 
    padding: theme.spacing(3), 
    transition: theme.transitions.create('margin', { 
      easing: theme.transitions.easing.sharp, 
      duration: theme.transitions.duration.leavingScreen, 
    }), 
    marginRight: -drawerWidth, 
    position: 'relative', 
    variants: [ 
      { 
        props: ({ open }) => open, 
        style: { 
          transition: theme.transitions.create('margin', { 
            easing: theme.transitions.easing.easeOut, 
            duration: theme.transitions.duration.enteringScreen, 
          }), 
          marginRight: 0, 
        }, 
      }, 
    ], 
  }), 
);

const AppBar = styled(MuiAppBar, { 
  shouldForwardProp: (prop) => prop !== 'open', 
})(({ theme }) => ({ 
  transition: theme.transitions.create(['margin', 'width'], { 
    easing: theme.transitions.easing.sharp, 
    duration: theme.transitions.duration.leavingScreen, 
  }), 
  variants: [ 
    { 
      props: ({ open }) => open, 
      style: { 
        width: `calc(100% - ${drawerWidth}px)`, 
        transition: theme.transitions.create(['margin', 'width'], { 
          easing: theme.transitions.easing.easeOut, 
          duration: theme.transitions.duration.enteringScreen, 
        }), 
        marginRight: drawerWidth, 
      }, 
    }, 
  ], 
}));

const DrawerHeader = styled('div')(({ theme }) => ({ 
  display: 'flex', 
  alignItems: 'center', 
  padding: theme.spacing(0, 1), 
  ...theme.mixins.toolbar, 
  justifyContent: 'flex-start', 
}));

export default function NavLinkMobile() { 
  const theme = useTheme(); 
  const [open, setOpen] = useState(false); 
  const navigate = useNavigate(); 

  const handleDrawerOpen = () => { 
    setOpen(true); 
  }; 

  const handleDrawerClose = () => { 
    setOpen(false); 
  }; 

  return ( 
    <div className='nav-link-mobile'> 
      <Box sx={{ display: 'flex' }}> 
        <CssBaseline /> 
        <AppBar position="fixed" open={open} color='backgroundColor:"rgba(0, 0, 0, 0.474)"'> 
          <Toolbar sx={{ backgroundColor: "rgba(1, 161, 166, 0.59)" }}> 
            <img src={Logo} style={{ width: '25px', height: '30px' }} alt="logo" /> 
            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div"> 
              &nbsp; WEBSOLE 
            </Typography> 
            <IconButton 
              color="inherit" 
              aria-label="open drawer" 
              edge="end" 
              onClick={handleDrawerOpen} 
              sx={[open && { display: 'none' }]} 
            > 
              <MenuIcon /> 
            </IconButton> 
          </Toolbar> 
        </AppBar> 
        <Main open={open}> 
          <DrawerHeader /> 
        </Main> 
        <Drawer 
          sx={{ 
            width: drawerWidth, 
            flexShrink: 0, 
            '& .MuiDrawer-paper': { 
              width: drawerWidth, 
            }, 
          }} 
          variant="persistent" 
          anchor="right" 
          open={open} 
        > 
          <DrawerHeader> 
            <IconButton onClick={handleDrawerClose}> 
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />} 
            </IconButton> 
          </DrawerHeader> 
          <Divider /> 
          <List> 
            {['Home', 'About', 'Contact'].map((text, index) => ( 
              <ListItem key={text} disablePadding> 
                <ListItemButton onClick={() => { navigate(`/LandingPage_React/${text}`); handleDrawerClose(); }}> 
                  <ListItemIcon> 
                    {index === 0 ? <img src={HomeIcon} alt="Home" style={{ width: '25px', height: '25px' }}/> : index === 1 ? <img src={AboutIcon} alt="About" style={{ width: '25px', height: '25px' }}/> : <img src={ContactIcon} alt="Contact" style={{ width: '25px', height: '25px' }}/>} 
                  </ListItemIcon> 
                  <ListItemText primary={text} /> 
                </ListItemButton> 
              </ListItem> 
            ))} 
          </List> 
          <Divider /> 
          <List> 
            {['Sign IN', 'Create New Account', 'PROFILE'].map((text, index) => ( 
              <ListItem key={text} disablePadding> 
                <ListItemButton> 
                  <ListItemIcon> 
                    {index === 0 ? <img src={SignInIcon} alt="Sign In" style={{ width: '25px', height: '25px' }}/> : index === 1 ? <img src={SignUpIcon} alt="Sign Up" style={{ width: '25px', height: '25px' }}/> : <img src={ProfileIcon} alt="Profile" style={{ width: '25px', height: '25px' }}/>} 
                  </ListItemIcon> 
                  <ListItemText primary={text} /> 
                </ListItemButton> 
              </ListItem> 
            ))} 
          </List> 
        </Drawer> 
      </Box> 
    </div> 
  ); 
}
