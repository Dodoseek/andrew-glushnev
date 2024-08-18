import { Box, Text } from "@chakra-ui/react";

interface DesignerSertificate {
  title: string;
  descriptor: string;
}

const DesignerSertificate = ({ title, descriptor }: DesignerSertificate) => {
  return (
    <Box
      w={{ base: "300px", lg: "350px" }}
      borderColor={"primary.default"}
      borderTop={"1px solid"}
      borderTopColor={"primary.30"}
      display={"flex"}
      flexDir={"column"}
      gap={"10px"}
      pt={"10px"}
    >
      <Text className="h3" color={"primary.default"}>
        {title}
      </Text>
      <Text className="text1" color={"white.50"}>
        {descriptor}
      </Text>
    </Box>
  );
};

export default DesignerSertificate;
