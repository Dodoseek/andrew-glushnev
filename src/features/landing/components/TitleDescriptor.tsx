import { Grid, GridItem, Text } from "@chakra-ui/react";

type TitleDescriptorProps = {
  title: string;
  descriptor: string;
};

const TitleDescriptor = ({ descriptor, title }: TitleDescriptorProps) => {
  return (
    <Grid
      templateColumns={{ base: "1, 1fr", md: "repeat(3, 1fr)" }}
      h={"fit-content"}
      w={"100%"}
      mb={"30px"}
    >
      <GridItem mb={{ base: "30px", md: 0 }}>
        <Text w={"100%"} color={"white.100"} className="h2" as={"h2"}>
          {title}
        </Text>
      </GridItem>
      <GridItem colSpan={2}>
        <Text
          ms={{ base: 0, md: 4 }}
          w={{ base: "100%", md: "80%", lg: "780px", xl: "990px" }}
          color={"white.50"}
          className="text3"
          as={"h2"}
        >
          {descriptor}
        </Text>
      </GridItem>
    </Grid>
  );
};

export default TitleDescriptor;
