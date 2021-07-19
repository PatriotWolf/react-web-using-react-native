import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Box, Typography } from "../components/common";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      main: string;
      secondary: string;
      statusBar: string;
      text: string;
    };
    fonts: string[];
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}

const LightTheme = {
  colors: {
    background: "#fff",
    main: "#fcb8ab",
    secondary: "#feeae6",
    statusBar: "dark-content",
    text: "#000000",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const DarkTheme = {
  colors: {
    background: "#656565",
    main: "#fcb8ab",
    secondary: "#feeae6",
    statusBar: "dark-content",
    text: "#ffffff",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(`light`);
  const themeMode = theme === "light" ? LightTheme : DarkTheme;
  const toggleTheme = () => {
    theme === `light` ? setTheme("dark") : setTheme(`light`);
  };
  return (
    <ThemeProvider theme={themeMode}>
      <Box
        style={{
          flexDirection: "column",
          flex: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => toggleTheme()}
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            zIndex: 1,
          }}
        >
          <Typography>Toggle theme</Typography>
        </TouchableOpacity>
        {children}
      </Box>
    </ThemeProvider>
  );
};
export default Theme;
