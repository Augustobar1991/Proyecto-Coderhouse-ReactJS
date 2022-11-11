import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CartWidget from "./CartWidget";
import "../App.css";
import { Link } from "react-router-dom";


const pages = [
  { label: "Inicio", link: "/" },
  { label: "18", link: "/category/18" },
  { label: "17", link: "/category/17" },
  { label: "16", link: "/category/16" },
  { label: "15", link: "/category/15" },
  { label: "Checkout", link: "/checkout" },
  { label: "Contacto", link: "/contacto" },
];
const settings = [
  { label: "Perfil", link: "#Perfil" },
  { label: "Cuenta", link: "#Cuenta" },
  { label: "Desloguearte", link: "#Desloguearte" },
];

// const subItemAuto = [
//   { label: "Peugeot 308", link: "#308" },
//   { label: "Gol Trend", link: "#gol" },

export default function Navmui() {
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
          <Container style={{ backgroundColor: "rgb(33, 33, 33)" }} maxWidth="xl">
            <Toolbar disableGutters>
              <Link
                href=""
                underline="none"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                }}
              >
                <img className="nav-logo" src="../multimedia/image/icon.png" alt="La casa de las llantas" width="55" height="55" />
              </Link>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.link}>{page.label}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img className="nav-logo" src="../multimedia/image/icon.png" alt="La casa de las llantas" width="55" height="55" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
              <Link to={page.link}>{page.label}</Link>
              </Button>
            ))}
          </Box>
           <Box>
           <Tooltip title="Cart">
               <IconButton sx={{ my: 2, color: "white", display: "block" }}>
                 <CartWidget />
               </IconButton>
             </Tooltip>
           </Box>
          <Box sx={{ flexGrow: 0 }}>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
