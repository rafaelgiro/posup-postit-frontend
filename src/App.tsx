import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { PostIt } from "./components/PostIt";
import { Board } from "./components/Board";

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
      <Board>
        <PostIt content="Hello World" id={0} />
        <PostIt content="Beijo no jandinho" id={0} />
        <PostIt content="hiupsajkelashuifjksaesa" id={0} />
        <PostIt content="sajfsklakdkopsadsa" id={0} />
        <PostIt
          content="asehiuuasijo  haisujkel hiufjklsah iuejskal eas"
          id={0}
        />
        <PostIt content=" saejhas lnkfhsa ejklsah fiuasjkl ehaiufjksa" id={0} />
        <PostIt
          content="lorem aiuphsejklasiuphfsajklhasi hsaj eisua kjeahs alsh eiuas jke"
          id={0}
        />
      </Board>
    </ThemeProvider>
  );
};

export default App;
