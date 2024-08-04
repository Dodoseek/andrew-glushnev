import { Container } from "@chakra-ui/react";
import { FC } from "react";

const SectionContainer: FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Container
      px={{ base: "15px", md: "20px", lg: 0 }}
      maxW={{ base: "100%", lg: "1200px", xl: "1500px" }}
      centerContent
    >
      {children}
    </Container>
  );
};

export default SectionContainer;
