import {
  Button,
  createTheme,
  Switch,
  ThemeProvider,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

import { getDesignTokens } from "./Theme";

function App() {
  const [themeType, setThemeType] = useState("dark");
  const theme = createTheme(getDesignTokens(themeType));
  function handleChange(e) {
    setThemeType((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography color="primary"> Helllo React</Typography>
      <Switch
        chacked={themeType === "dark"}
        onChange={handleChange}
        color="primary"
      />
    </ThemeProvider>
  );
}

export default App;
