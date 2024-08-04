import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Flex,
  Link,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Burger from "@icons/Burger";
import Cross from "@icons/Cross";
import Logo from "@icons/Logo";
import bgImg from "@images/main__bg.jpg";
import navLinks from "@constants/navLinks";
import { useBrandTheme } from "@specific/themeContext";

const NavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useBrandTheme();
  return (
    <>
      <Button
        p={0}
        h={"fit-content"}
        variant={"none"}
        display={{ base: "block", lg: "none" }}
      >
        <Burger onClick={onOpen}></Burger>
      </Button>

      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay />
        <DrawerContent bgImage={bgImg}>
          <DrawerHeader
            as={Flex}
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            py={{ base: "10px", md: "20px" }}
            px={{ base: "15px", md: "20px" }}
          >
            <Logo />
            <Button onClick={onClose} variant={"none"} p={0}>
              <Cross />
            </Button>
          </DrawerHeader>
          <DrawerBody
            as={Flex}
            flexDirection={"column"}
            alignItems={"start"}
            gap={"30px"}
            px={{ base: "15px", md: "20px" }}
            pt={"20px"}
            pb={"40px"}
          >
            {navLinks.map((link) => (
              <Link
                onClick={onClose}
                as={ReactRouterLink}
                to={link.link}
                key={link.name}
                textColor={theme.colors.white[100]}
                transition={"all"}
                transitionDuration={"500ms"}
                _hover={{
                  textDecor: "none",
                }}
                sx={{
                  "@media (hover: hover)": {
                    "&:hover": {
                      textColor: theme.colors.primary,
                      textDecor: "none",
                    },
                  },
                  "@media (hover: none)": {
                    "&:active": {
                      textColor: theme.colors.primary,
                    },
                  },
                }}
                className="navigation"
              >
                {link.name}
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
