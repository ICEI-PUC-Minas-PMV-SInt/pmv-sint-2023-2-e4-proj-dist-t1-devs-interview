import { Link, useLocation } from "react-router-dom";
import { Home } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const HomeButton = (props) => {
  const { pathname } = useLocation();
  const { "data-testid": dataTestId, children } = props;
  return (
    <>
      {pathname !== "/" ? (
        <span role="button" data-testid={dataTestId}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            sx={{ color: "white" }}
            component={Link}
            to="/"
            {...props}
          >
            {children}
            <Home />
          </IconButton>
        </span>
      ) : (
        <span data-testid={dataTestId} {...props}></span>
      )}
    </>
  );
};
