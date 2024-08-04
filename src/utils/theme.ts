// "@utils/theme.ts"
import { extendTheme, theme } from "@chakra-ui/react";

export const brandTheme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    blackBg: "#0A1011",
    blackCard1: "#0E1719",
    blackCard2: "#1A2226",
    darkTurquoise: "#006E6F",
    turquoise: {
      100: "#00EAEA",
      30: "rgba(0, 234, 234, 0.30)",
      5: "rgba(0, 234, 234, 0.05)",
    },
    primary: "#00EAEA",
    white: {
      100: "#FFFFFF",
      50: "rgba(255, 255, 255, 0.5)",
    },
  },
  breakpoints: {
    sm: "360px",
    md: "768px",
    lg: "1300px",
    xl: "1600px",
    "2xl": "1920px",
  },
};

const customTheme = extendTheme(brandTheme);

export default customTheme as typeof brandTheme & typeof theme;
