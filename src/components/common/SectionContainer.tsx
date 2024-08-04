import { Container, ContainerProps } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface BrandContainerProps extends ContainerProps {
  children: ReactNode;
}

const SectionContainer: FC<BrandContainerProps> = ({ children, ...props }) => {
  return (
    <Container
      position={"relative"}
      px={{ base: "15px", md: "20px", lg: 0 }}
      maxW={{ base: "100%", lg: "1200px", xl: "1500px" }}
      centerContent
      h={"fit-content"}
      {...props}
    >
      {children}
    </Container>
  );
};

export default SectionContainer;
