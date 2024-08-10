import { Text, Grid, GridItem } from "@chakra-ui/react";
import SectionContainer from "@common/SectionContainer";
import AdvantagesAccordion from "@landing/components/AdvantagesAccordion";

const CleanCode = () => {
  return (
    <SectionContainer>
      <Grid
        templateColumns={{ base: "1, 1fr", md: "repeat(3, 1fr)" }}
        h={"fit-content"}
        w={"100%"}
        mb={"30px"}
      >
        <GridItem mb={{ base: "30px", md: 0 }}>
          <Text w={"100%"} color={"white.100"} className="h2" as={"h2"}>
            чистый код
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text
            ms={4}
            w={{ base: "100%", md: "80%", lg: "800px", xl: "990px" }}
            color={"white.50"}
            className="text3"
            as={"h2"}
          >
            Разработка сайтов на чистом коде это - создание уникальных и
            кастомизированных сайтов без ограничений шаблонов и инструментов.
          </Text>
        </GridItem>
      </Grid>
      <AdvantagesAccordion />
    </SectionContainer>
  );
};

export default CleanCode;
