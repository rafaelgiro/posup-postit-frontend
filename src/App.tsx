import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { Board } from "./components/Board";
import { NotesProvider } from "./contexts/NotesContext";

const lightTheme = {
  themeName: "light",
  colors: {
    background: "#FFFFFF",
    text: "#111111",
    error: "#E03F3F",
    neutral0: "#FFFFFF",
    neutral100: "#000000",
  },
};

const darkTheme = {
  themeName: "dark",
  colors: {
    background: "#111111",
    text: "#FFFFFF",
    error: "#E03F3F",
    neutral0: "#FFFFFF",
    neutral100: "#000000",
  },
};

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark
    ? { ...darkTheme, setIsDark }
    : { ...lightTheme, setIsDark };

  return (
    <ThemeProvider theme={theme}>
      <NotesProvider>
        <Board />
      </NotesProvider>
    </ThemeProvider>
  );
};

export default App;
