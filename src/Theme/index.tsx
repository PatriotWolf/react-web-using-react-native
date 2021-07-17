import { ThemeProvider } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      main: string;
      secondary: string;
      statusBar: string;
    };
    fonts: string[];
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
  }
}

const theme = {
  colors: {
    background: "#fff",
    main: "#fcb8ab",
    secondary: "#feeae6",
    statusBar: "dark-content",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
};

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
