import SectionContainer from "@common/SectionContainer";
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import aboutMeElements from "@landing/constants/aboutMeElements";
import LeftBracket from "@icons/LeftBracket";
import RightBracket from "@icons/RightBracket";
import { useBrandTheme } from "@specific/themeContext";
import { useState } from "react";

const AboutMe = () => {
  const theme = useBrandTheme();

  const heightBracket = useBreakpointValue({
    base: "143px",
    lg: 260,
  });

  const widthBracket = useBreakpointValue({
    base: 23,
    lg: 35.4,
  });

  return (
    <SectionContainer>
      <Text w={"100%"} color={"white.100"} className="h2" as={"h2"} mb={"30px"}>
        Обо мне
      </Text>
      <SimpleGrid
        w={"100%"}
        columns={{ base: 0, md: 3 }}
        spacing={{ base: "30px", md: "10px", lg: "20px", xl: "30px" }}
      >
        {aboutMeElements.map((element) => {
          const [isHovered, setHovered] = useState(false);
          return (
            <Flex
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              position={"relative"}
              justifyContent={"space-between"}
              key={element.id}
              flexDir={"column"}
              h={{ base: "143px", lg: "260" }}
              py={{ base: "18.5px", lg: "40px" }}
              px={{ base: "42px", lg: "68px" }}
              _groupHover={{
                left: 2,
                right: 2,
              }}
            >
              <Box
                w={widthBracket}
                h={heightBracket}
                position={"absolute"}
                color={isHovered ? "primary.default" : "primary.dark"}
                left={isHovered ? 2 : 0}
                transition={"left 0.3s ease"}
                top={0}
                bottom={0}
              >
                <LeftBracket fill="currentColor" />
              </Box>
              <Text
                color={theme.colors.primary.default}
                w={"fit-content"}
                className="numbers1"
              >
                {element.id}
              </Text>
              <Text
                color={theme.colors.white[100]}
                w={"fit-content"}
                className="text2"
              >
                {element.text}
              </Text>
              <Box
                w={widthBracket}
                h={heightBracket}
                position={"absolute"}
                color={isHovered ? "primary.default" : "primary.dark"}
                right={isHovered ? 2 : 0}
                transition={"right 0.3s ease"}
                top={0}
                bottom={0}
              >
                <RightBracket fill="currentColor" />
              </Box>
            </Flex>
          );
        })}
      </SimpleGrid>
    </SectionContainer>
  );
};

export default AboutMe;
