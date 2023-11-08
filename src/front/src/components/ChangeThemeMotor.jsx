import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const ChangeThemeMotor = ({ children }) => {
  const { preferDark } = useSelector((state) => state.user);
  const selectedTheme = preferDark ? darkTheme : lightTheme;
  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export default ChangeThemeMotor;
