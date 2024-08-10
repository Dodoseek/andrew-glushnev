import { Container } from "@chakra-ui/react";
import { useBrandTheme } from "@specific/themeContext";
import { FC } from "react";

const LandingContainer: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const theme = useBrandTheme();

  return (
    <Container
      display={"flex"}
      flexDir={"column"}
      gap={{ base: "90px", md: "130px", lg: "150px", xl: "180px" }}
      pb={{ base: "90px", md: "110px", lg: "120px", xl: "140px" }}
      px={0}
      maxW={"100%"}
      bgColor={theme.colors.blackBg}
    >
      {children}
    </Container>
  );
};

export default LandingContainer;
