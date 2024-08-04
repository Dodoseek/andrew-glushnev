import { Container, Text } from "@chakra-ui/react";
import mainBg from "@images/main__bg.jpg";
import Header from "@common/Header";
import SectionContainer from "@/components/common/SectionContainer";

export default function Main() {
  return (
    <Container
      maxW={"100%"}
      h={"100dvh"}
      p={0}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgImage={mainBg}
    >
      <SectionContainer>
        <Header />
        <Text className="h1__pixel">Landing</Text>
      </SectionContainer>
    </Container>
  );
}
