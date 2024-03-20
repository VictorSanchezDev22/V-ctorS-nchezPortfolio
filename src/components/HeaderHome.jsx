import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {Logo} from "../assets/HeaderHome";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import { Grid} from '@mui/material';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Toolbar from '@mui/material/Toolbar';

import { Main } from "./HeaderFunctions";
import { DrawerHeader } from "./HeaderFunctions";
import { AppBar } from "./HeaderFunctions";

export function HeaderHome({children}) {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //NavBar Scrolleable 
  useEffect(() => {
    const changeBg = () => {
      if (window.scrollY >= 830) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBg);
    
    return () => {
      window.removeEventListener("scroll", changeBg);
    }
  });

  return (
    <Box sx={{height:70, display: 'flex' }}>
      <AppBar  open={open} sx={{ backgroundColor: '#212121' }}>
        <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: 'none' }) }}  >
            
              <MenuIcon />
              </IconButton>
              <Divider />
              
              <Grid item xs></Grid>
              <Grid item xs={2} container justifyContent="center">
                <Link to="/webdev" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem sx={{ display: 'flex', alignItems: 'center', position: 'fixed', left: '820px', top: '15px', ...(isMobile && { left: '100px', top: '10px' })  }}>
                    <Typography >Web DEV</Typography>
                  </MenuItem>
                </Link>
              </Grid>
              <Grid item xs={2} container justifyContent="center">
                <Link to="/gamedev" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem sx={{ display: 'flex', alignItems: 'center', position: 'fixed', left: '920px', top: '15px', ...(isMobile && { left: '200px', top: '10px' })   }}>
                    <Typography >Game DEV</Typography>
                  </MenuItem>
                </Link>
              </Grid>              
          
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', marginRight: '3em', alignItems: 'center' }}>
    </Box>
        </Toolbar>
      </AppBar>
    <Drawer
        sx={{
          width: '12.5rem',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '17rem',
            boxSizing: 'border-box',
            border: '0',
            backgroundColor: '#1B1C20'
          },
          }}
        variant="persistent"
        anchor="left"
        open={open}>
        <Grid container spacing={1} justifyContent="space-between" alignItems="start" >
          <Grid item xs={1}>
            <Link to="/">
                <Logo />
            </Link>
          </Grid>
          <Grid item xs={4}>
            <IconButton
                sx= {{marginTop: 1.5, color : 'white'}}
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerClose}
                edge="end" >
                <MenuIcon/>
            </IconButton> 
          </Grid>
        </Grid>
        {/* <Sidebar INFO /> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}