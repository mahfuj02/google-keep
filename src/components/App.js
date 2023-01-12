import {
  createTheme,
  ThemeProvider,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import CreateText from "./CreateText";
import Header from "./Header";
import Note from "./Note";
import { getDesignTokens } from "./Theme";

function App() {
  const [themeType, setThemeType] = useState("dark");
  const theme = createTheme(getDesignTokens(themeType));
  function handleSwitch(e) {
    setThemeType((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header handleSwitch={handleSwitch} themeType={themeType} />
       <CreateText />
       <Note></Note>
      
    </ThemeProvider>
  );
}

export default App;
