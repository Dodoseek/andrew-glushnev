import {
  Text,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  Flex,
  useDisclosure,
  Collapse,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import advantagesElements from "@landing/constants/advantagesElements";
import Plus from "@landing/components/icons/Plus";
import Minus from "@landing/components/icons/Minus";
import { useBrandTheme } from "@/components/specific/themeContext";
import { useHoverActive } from "@hooks/useHoverActive";

const AdvantagesAccordion = () => {
  const theme = useBrandTheme();

  return (
    <Accordion as={Flex} gap={"10px"} flexDir={"column"} w={"100%"} allowToggle>
      {advantagesElements.map((element) => {
        const { isOpen, onToggle } = useDisclosure();
        const { ref, isHoverEffect } = useHoverActive();
        return (
          <AccordionItem
            position={"relative"}
            borderWidth={"1px"}
            borderStyle={"solid"}
            borderColor={"primary.5"}
            rounded={{ base: "7px", md: "10px" }}
            key={element.id}
          >
            <Box
              ref={ref}
              onClick={onToggle}
              position={"absolute"}
              bgColor={
                isOpen
                  ? "blackCard2"
                  : isHoverEffect
                  ? "blackCard2"
                  : "blackCard1"
              }
              transitionDuration="0.3s"
              transitionTimingFunction="ease"
              rounded={{ base: "7px", md: "10px" }}
              top={0}
              left={0}
              right={0}
              bottom={0}
              zIndex={0}
            />
            <AccordionButton
              transition={"all"}
              pointerEvents={"none"}
              position={"relative"}
              zIndex={0}
              py={{ base: "15px", md: "20px", lg: "30px" }}
              px={{ base: "10px", md: "30px" }}
              _hover={{
                bgColor: "none",
              }}
              display={"flex"}
              alignItems={"center"}
            >
              <Grid
                w={"100%"}
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(9, 1fr)",
                }}
                display={{ base: "flex", md: "grid" }}
                justifyContent={"space-between"}
                alignItems={"start"}
                gap={{
                  base: "10px",
                }}
              >
                <GridItem colSpan={3} as={Flex} alignItems={"center"}>
                  ИКОНКА
                </GridItem>
                <GridItem
                  colSpan={5}
                  as={Flex}
                  w={"100%"}
                  h={"100%"}
                  pt={{ base: 1, md: 0 }}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Text
                    pointerEvents={"none"}
                    color={"primary.default"}
                    textAlign={"start"}
                    whiteSpace={"nowrap"}
                    className="h3"
                  >
                    {element.name}
                  </Text>
                  <Collapse in={isOpen} animateOpacity>
                    <Text
                      w={{
                        base: "100%",
                        sm: "190px",
                        md: "370px",
                        lg: "570px",
                      }}
                      mt={"10px"}
                      textAlign={"start"}
                      className="text1"
                      color={"white.50"}
                    >
                      {element.text}
                    </Text>
                  </Collapse>
                </GridItem>

                <GridItem as={Flex} colSpan={1} justifyContent={"end"}>
                  {isOpen ? (
                    <Minus
                      boxSize={{ base: "26px", md: "36px", lg: "55px" }}
                      color={
                        isHoverEffect
                          ? theme.colors.primary.default
                          : theme.colors.primary.dark
                      }
                    />
                  ) : (
                    <Plus
                      boxSize={{ base: "26px", md: "36px", lg: "55px" }}
                      color={
                        isHoverEffect
                          ? theme.colors.primary.default
                          : theme.colors.primary.dark
                      }
                    />
                  )}
                </GridItem>
              </Grid>
            </AccordionButton>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default AdvantagesAccordion;
