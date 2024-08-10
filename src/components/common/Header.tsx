import { Flex, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import Logo from "@icons/Logo";
import navLinks from "@constants/navLinks";
import { useBrandTheme } from "../specific/themeContext";
import SectionContainer from "@common/SectionContainer";
import NavDrawer from "@common/NavDrawer";

export default function Header() {
  const theme = useBrandTheme();
  return (
    <SectionContainer zIndex={50} position={"fixed"} left={0} right={0}>
      <Flex
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={{ base: "10px", md: "20px" }}
      >
        <Link as={ReactRouterLink} to={"/"}>
          <Logo />
        </Link>

        <Flex
          display={{ base: "none", lg: "flex" }}
          alignItems={"center"}
          gap={"78px"}
        >
          {navLinks.map((link) => (
            <Link
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
                    textColor: theme.colors.primary.default,
                    textDecor: "none",
                  },
                },
                "@media (hover: none)": {
                  "&:active": {
                    textColor: theme.colors.primary.default,
                  },
                },
              }}
              className="navigation"
            >
              {link.name}
            </Link>
          ))}
        </Flex>
        <NavDrawer />
      </Flex>
    </SectionContainer>
  );
}
