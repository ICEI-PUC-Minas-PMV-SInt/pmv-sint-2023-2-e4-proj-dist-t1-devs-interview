import {
  AppBar,
  Avatar,
  Box,
  Collapse,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import ContentDrawer from "./components/ContentDrawer";
import { ToolbarStyle } from "./style";
import { HomeButton } from "./components/HomeButton";
import { useSelector } from "react-redux";

const AppBarNoMui = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const { name = "" } = useSelector((state) => state.user);

  return (
    <Collapse in={name}>
      <AppBar position="fixed">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Toolbar sx={ToolbarStyle}>
            <HomeButton />
            <Tooltip title="Abrir Menu">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => setIsDrawerOpen(true)}
              >
                <Avatar src={`https://robohash.org/${name}`} />
              </IconButton>
            </Tooltip>
          </Toolbar>

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
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Sair</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </AppBar>
      <SwipeableDrawer
        onOpen={() => setIsDrawerOpen(true)}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <ContentDrawer onClose={() => setIsDrawerOpen(false)} />
      </SwipeableDrawer>
    </Collapse>
  );
};

export default AppBarNoMui;
