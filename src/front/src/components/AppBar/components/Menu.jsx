import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Clear,
  History,
  Home,
  Share,
  SwitchAccount,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ListItemStyle } from "../style";
import { appEmitter, EventTypes } from "@/config/events";

export const Menu = ({ onClose }) => {
  return (
    <Box>
      <List>
        <ListItem sx={ListItemStyle}>
          <ListItemButton onClick={onClose} component={Link} to="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Início" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={ListItemStyle}>
          <ListItemButton onClick={onClose} component={Link} to="/historico">
            <ListItemIcon>
              <History />
            </ListItemIcon>
            <ListItemText primary="Histórico" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={ListItemStyle}>
          <ListItemButton
            onClick={() => {
              onClose();
              appEmitter.emit(EventTypes.CLEAR_USER);
            }}
          >
            <ListItemIcon>
              <Clear />
            </ListItemIcon>
            <ListItemText primary="Limpar Tudo" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={ListItemStyle}>
          <ListItemButton
            onClick={() => {
              appEmitter.emit(EventTypes.CHANGE_THEME);
            }}
          >
            <ListItemIcon>
              <SwitchAccount />
            </ListItemIcon>
            <ListItemText primary="Alterar Cores" />
          </ListItemButton>
        </ListItem>
        <ListItem sx={ListItemStyle}>
          <ListItemButton
            onClick={() => {
              appEmitter.emit(EventTypes.SHARE_APP);
            }}
          >
            <ListItemIcon>
              <Share />
            </ListItemIcon>
            <ListItemText primary="Compartilhar" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};
