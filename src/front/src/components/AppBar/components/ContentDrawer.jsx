import { Box } from "@mui/material";
import { UserInformation } from "./UserInformation";
import { Menu } from "./Menu";

const baseStyle = {
  width: 550,
  p: 0,
};

export const ContentDrawer = ({ onClose }) => {
  return (
    <>
      <Box xs={baseStyle} role="presentation">
        <UserInformation />
        <Menu onClose={onClose} />
      </Box>
    </>
  );
};

export default ContentDrawer;
