import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import mainBg from "@images/main__bg.jpg";
import Header from "@common/Header";
import SectionContainer from "@common/SectionContainer";
import heroImg from "@landing/assets/images/hero.jpg";
import Rock from "@icons/Rock";
import Lamp from "@icons/Lamp";
import Dino from "@icons/Dino";
import Window from "@icons/Window";
import Computer from "@icons/Computer";
import Glasses from "@icons/Glasses";
import BrandButton from "@common/BrandButton";
import { useBrandTheme } from "@/components/specific/themeContext";

export default function Main() {
  const iconBox = useBreakpointValue({
    base: "35px",
    md: "70px",
    lg: "120px",
  });
  const theme = useBrandTheme();
  return (
    <Container
      maxW={"100%"}
      minH={"100dvh"}
      h={"fit-content"}
      p={0}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgImage={mainBg}
    >
      <SectionContainer minH={{ base: "650px", lg: "920px" }} h={"100dvh"}>
        <Flex
          h={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection="column"
        >
          <Image
            borderRadius="5px"
            boxSize="120px"
            src={heroImg}
            alt="Andrew Glushnev"
          />
          <Flex
            mt={{ base: "20px", lg: "15px", xl: "16px" }}
            alignItems={"center"}
          >
            <Rock width={iconBox} height={iconBox} />
            <Lamp width={iconBox} height={iconBox} />
            <Text color={theme.colors.primary} className="h1__normal">
              Fullstack
            </Text>
            <Dino width={iconBox} height={iconBox} />
            <Window width={iconBox} height={iconBox} />
          </Flex>
          <Flex alignItems={"center"}>
            <Computer width={iconBox} height={iconBox} />
            <Text
              ms={{ base: "5px", md: "14px", lg: "8px", xl: "20px" }}
              me={{ base: "10px", md: "20px", lg: "30px" }}
              color={theme.colors.primary}
              className="h1__italic"
            >
              разработчик
            </Text>
            <Glasses width={iconBox} height={iconBox} />
          </Flex>
          <Flex
            textAlign={{ base: "center" }}
            flexDir={{ base: "column", md: "row" }}
            mt={"12px"}
          >
            <Text color={theme.colors.primary} className="h1__pixel">
              Андрей
            </Text>
            <Box ms={{ md: 4, lg: 6 }}>
              <Text
                as={"span"}
                position={"relative"}
                left={{ base: 1, md: 2, lg: 3, xl: 4 }}
                color={theme.colors.primary}
                className="h1__pixel"
              >
                Г
              </Text>
              <Text
                as={"span"}
                color={theme.colors.primary}
                className="h1__pixel"
              >
                лушнев
              </Text>
            </Box>
          </Flex>
          <Text
            w={{ base: "310px", md: "370px", lg: "550px" }}
            textAlign={"center"}
            color={theme.colors.white[100]}
            className="text2"
          >
            Разрабатываю сайты, тг-ботов, верстаю, пишу логику для вашего
            бизнеса
          </Text>
          <BrandButton mt={"30px"}>Обсудить проект</BrandButton>
        </Flex>
      </SectionContainer>
    </Container>
  );
}
