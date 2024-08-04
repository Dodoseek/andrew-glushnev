import { Container } from "@chakra-ui/react";
import { useBrandTheme } from "@specific/themeContext";
import { FC } from "react";

const LandingContainer: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const theme = useBrandTheme();

  return (
    <Container p={0} maxW={"100%"} bgColor={theme.colors.blackBg}>
      {children}
    </Container>
  );
};

export default LandingContainer;
