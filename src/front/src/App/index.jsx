import React from "react";
import Router from "@/router";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Box, CssBaseline } from "@mui/material";
import AppBar from "@/components/AppBar";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ClearUserHandler from "../components/ClearUserHandler";
import ChangeThemeMotor from "../components/ChangeThemeMotor";
import ChangeThemeHandler from "../components/ChangeThemeHandler";
import ShareHandler from "../components/ShareHandler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const persistor = persistStore(store);

const queryClient = new QueryClient();

const App = () => {
  return (
    <SnackbarProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <QueryClientProvider client={queryClient}>
            <ChangeThemeMotor>
              <CssBaseline />
              <ClearUserHandler />
              <ChangeThemeHandler />
              <ShareHandler />
              <Box
                sx={{
                  maxWidth: {
                    md: "50%",
                    sm: "70%",
                    xs: "90%",
                  },
                  pt: "104px",
                  mx: "auto",
                  minHeight: "100vh",
                }}
              >
                <Router excedent={<AppBar />} />
              </Box>
            </ChangeThemeMotor>
            <ReactQueryDevtools />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </SnackbarProvider>
  );
};

export default App;
