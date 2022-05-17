import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#2e4b60",
    },
    secondary: {
      main: "#b7dadb",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: "Roboto Mono",
  },
});
