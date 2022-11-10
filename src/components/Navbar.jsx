import "../styles/header.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";
import CartWidget from "./CartWidget";

const pages = [
  { label: "Inicio", link: "/" },
  { label: "Automotores", link: "#Automotores" },
  { label: "Chapa y Pintura", link: "#ChapayPintura" },
  { label: "Lubricentro", link: "#lubricentro" },
  { label: "Taller Mecanico", link: "#tallerMecanico" },
  { label: "Llantas", link: "#llantas" },
];
const settings = [
  { label: "Perfil", link: "#Perfil" },
  { label: "Cuenta", link: "#Cuenta" },
  { label: "Desloguearte", link: "#Desloguearte" },
];

const subItemAuto = [
  { label: "Peugeot 308", link: "#308" },
  { label: "Gol Trend", link: "#gol" },
];

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
      <Container style={{ backgroundColor: "rgb(33, 33, 33)" }} maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            href="#"
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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page.label} onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
              <a rel="stylesheet" href={page.link}>
                {page.label}
              </a>
                <a rel="stylesheet" href={page.link}>{page.label}</a>
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
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
                  <a href={settings.link}>{setting.label}</a>
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
