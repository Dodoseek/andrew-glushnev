// @specific/themeContext.tsx
import { createContext, ReactNode, useContext } from "react";
import { useTheme, theme as defaultTheme } from "@chakra-ui/react";
import { brandTheme } from "@/utils/theme";

const ThemeContext = createContext(defaultTheme);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const chakraTheme = useTheme() as typeof defaultTheme & typeof brandTheme;
  return (
    <ThemeContext.Provider value={chakraTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useBrandTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useBrandTheme must be used within a CustomThemeProvider");
  }
  return context as typeof defaultTheme & typeof brandTheme;
};
