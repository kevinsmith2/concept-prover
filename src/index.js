import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { pink } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    warning: {
      main: pink[300],
    },
  },
  components: {
    ThemedButton: {
      variants: [
        {
          props: { variant: "contained", color: "warning" },
          style: {
            border: "2px dashed darkred",
          },
        },
      ],
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
