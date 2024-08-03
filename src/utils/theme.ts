import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  blackBg: "#0A1011",
  blackCard1: "#0E1719",
  blackCard2: "#1A2226",
  darkTurquoise: "#006E6F",
  turquoise: {
    100: "#00EAEA",
    30: "rgba(0, 234, 234, 0.30)",
    5: "rgba(0, 234, 234, 0.05)",
  },
  white: {
    100: "#FFFFFF",
    50: "rgba(255, 255, 255, 0.5)",
  },
};

export default extendTheme({ config, colors });
