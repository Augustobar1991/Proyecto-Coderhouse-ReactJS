// import React from "react";
// import "../styles/header.css";

// import IconButton from '@mui/material/IconButton';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import "../styles/navbar.css";

// const logo = 'multimedia/image/icon.png';


// const Navbar = ({ setShow, size }) => {


//     const [auth, setAuth] = React.useState(true);
//     const [anchorEl, setAnchorEl] = React.useState(null);
  
//     const handleMenu = (event) => {
//         setAnchorEl(event.currentTarget);
//       };

//     const handleClose = () => {
//       setAnchorEl(null);
//     };
//   return (
    
//     <header>
//       <a href="index.html">
//             <img className="cabeceraIcon" src={logo} alt="Icono de cabecera de la casa de las llantas"/>
//         </a>
//             <ul className="cabecera__lista">
//                 <li><a href="index.html">Inicio</a></li>
//                 <li><a href="#automotores">Automotores</a>
//                     <ul className="cabecera__sublista">
//                         <li><a href="#peugeot-308">Peugeot 308</a></li>
//                         <li><a href="#gol-trend">Gol Trend</a></li>
//                     </ul>
//                 </li>
//                 <li><a href="#chapa-y-pintura">Chapa y Pintura</a></li>
//                 <li><a href="#lubricentro">Lubricentro</a></li>
//                 <li><a href="#tallermecanico">Taller Mecanico</a></li>
//                 <li><a href="#llantas">Llantas</a>
//                     <ul className="cabecera__sublista">
//                         <li><a href="#ReparacionDeLlantas">Reparacion De Llantas</a></li>
//                         <li><a href="./carrito.html">Venta De Llantas</a>
//                     </li>
//                     </ul>
//                 </li>
//                 <li><a href="#contacto">Contacto</a></li>
                
//               <li className="cart" onClick={() => setShow(false)}>
//                 <span>
//                   <i className="fas fa-cart-plus"></i>
//                 </span>
//                 <span>{size}</span>
//               </li>

//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit">
//                 <AccountCircle style={{ fill: '#FFFFFF' }}/>
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}>
//                 <MenuItem onClick={handleClose}>Perfil</MenuItem>
//                 <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
//               </Menu>
            
          

//             </ul>
//             {/* {conBoton ? <button onClick={() => funcionLogin()}>LOGIN</button> : null} */}
//     </header>
//   );
// }

// export default Navbar;


import "../styles/header.css";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "@mui/material";
import CartWidget from "./CartWidget";

const pages = [{label:"Inicio", link:"/"},
               {label:"Automotores", link:"#Automotores"}, 
               {label:"Chapa y Pintura", link:"#ChapayPintura"},
               {label:"Lubricentro", link:"#lubricentro"}, 
               {label:"Taller Mecanico", link:"#tallerMecanico"}, 
               {label:"Llantas", link:"#llantas"}];
const settings = [{label:'Perfil', link:'#Perfil'},
                  {label:'Cuenta', link:'#Cuenta'}, 
                  {label:'Desloguearte', link:'#Desloguearte'}];

const subItemAuto = [{label:'Peugeot 308', link:'#308'},
                     {label:'Gol Trend', link:'#gol'}];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container  style ={{backgroundColor:"rgb(33, 33, 33)"}} maxWidth="xl">
        <Toolbar disableGutters>
          <Link
              href="#"
              underline="none"
              sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
              }}>
              <img
                  className="nav-logo"
                  src="./multimedia/image/icon.png"
                  alt="Porousway Logo"
                  width="55"
                  height="55"
              />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <a rel="stylesheet" href={page.link} />
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <img
              className="nav-logo"
              src="./multimedia/image/icon.png"
              alt="Porousway Logo"
              width="55"
              height="55"
          />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                
              >
                <a rel="stylesheet" href={page.link}>{page.label}</a>
                
              </Button>
            ))}
          </Box>
          <Box>
          <Tooltip title="Cart">
              <IconButton sx={{ my: 2, color: 'white', display: 'block' }}>
                <CartWidget/>
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                  <a href={settings.link}>
                    {setting.label}
                  </a>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
