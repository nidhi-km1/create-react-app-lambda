import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: ["Avenir", "sans-serif"].join(","),
      textTransform: "none",
      fontSize: 16,
      color: "#121212",
    },
  },
  palette: {
    primary: {
      main: "#3700B3",
    },
    secondary: {
      main: "#FAF4F2",
    },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
