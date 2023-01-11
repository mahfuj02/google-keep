import { createTheme } from "@mui/material";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#E8EAED",
          },
          background: {
            default: "#202124",
          },
        }
      : {
          primary: {
            main: "#202124",
          },
          background: {
            default: "#FFFFFF",
          },
        }),
  },
});
