import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = [{title: 'Home', color: '#FB923C'}, {title: 'Best Seller', color: '#222224B2'}, {title: 'Menu',  color: '#222224B2'}, {title: 'Contact',  color: '#222224B2'}];

const AppBarComp = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{
      background: 'transparent'
        }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
          }}>
              <img src='/assets/images/logo.svg' alt='GaBite Logo' width='100px' height='70px' />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            sx={{ color : '#222224B2'}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{fontFamily: 'Poppins, sans-serif', textTransform : 'capitalize' }} color={page.color}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ 
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
          }}>
          <img src='/assets/images/logo.svg' alt='GaBite Logo' width='80px' height='50px' />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', fontSize: '24px' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={page.title === 'Home' ? { my: 2, color: '#FB923C', display: 'block', fontFamily: 'Poppins, sans-serif', textTransform : 'capitalize' } :{ my: 2, color: '#222224B2', display: 'block', fontFamily: 'Poppins, sans-serif', textTransform : 'capitalize', '&:hover' : { color : '#FB923C'} }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: 'flex' }}>
            <Button sx={{my: 2, color: '#222224B2', display: 'block', fontFamily: 'Poppins, sans-serif', textTransform : 'capitalize'}}>Login</Button>
            <Button sx={{my: 2, color: '#fff', display: 'block', fontFamily: 'Poppins, sans-serif', textTransform : 'capitalize', backgroundColor: '#FB923C', boxShadow: 'none', '&:hover' : {backgroundColor : '#FB923C !important'} }} variant='contained'>Sign In</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppBarComp;
