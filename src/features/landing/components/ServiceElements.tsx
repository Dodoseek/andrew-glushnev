import { useHoverActive } from "@hooks/useHoverActive";
import { Box, Text, useDisclosure, Collapse } from "@chakra-ui/react";
import serviceElements from "@landing/constants/serviceElements";
import Minus from "@landing/components/icons/Minus";
import Plus from "@landing/components/icons/Plus";
import Masonry from "react-masonry-css";
import "@landing/assets/css/mansory.scss";

const ServiceElements = () => {
  return (
    <Masonry
      breakpointCols={{ default: 4, 1300: 2, 768: 1 }}
      className="langing-masonry"
      columnClassName="langing-masonry-column"
    >
      {serviceElements.map((element) => {
        const { isOpen, onToggle } = useDisclosure();
        const { ref, isHoverEffect } = useHoverActive();
        return (
          <Box
            sx={{
              breakInside: "avoid",
            }}
            mb={{ base: "10px", lg: 0 }}
            p={"25px"}
            position={"relative"}
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
            <Text
              className="h4"
              color={"primary.default"}
              position={"relative"}
              pointerEvents={"none"}
              mb={"10px"}
            >
              {element.title}
            </Text>
            <Text
              className="cuption"
              color={"white.50"}
              position={"relative"}
              pointerEvents={"none"}
              mb={"5px"}
            >
              {element.time}
            </Text>
            <Text
              className="price"
              color={"white.100"}
              position={"relative"}
              pointerEvents={"none"}
              mb={"20px"}
            >
              {element.price}
            </Text>
            <Collapse in={isOpen} animateOpacity>
              <Text
                position={"relative"}
                pointerEvents={"none"}
                w="100%"
                textAlign={"start"}
                className="text1"
                color={"white.50"}
                mb={"20px"}
              >
                {element.description}
              </Text>
            </Collapse>
            <Box position={"relative"} pointerEvents={"none"}>
              {isOpen ? (
                <Minus
                  boxSize="20px"
                  color={isHoverEffect ? "primary.default" : "primary.dark"}
                />
              ) : (
                <Plus
                  boxSize="20px"
                  color={isHoverEffect ? "primary.default" : "primary.dark"}
                />
              )}
            </Box>
          </Box>
        );
      })}
    </Masonry>
  );
};

export default ServiceElements;
