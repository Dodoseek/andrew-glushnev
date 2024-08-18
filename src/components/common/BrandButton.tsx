import { Button, ButtonProps, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useBrandTheme } from "../specific/themeContext";

interface BrandButtonProps extends ButtonProps {
  children: ReactNode;
}

const BrandButton: React.FC<BrandButtonProps> = ({ children, ...props }) => {
  const theme = useBrandTheme();

  return (
    <Button
      rounded={"5px"}
      borderWidth={"1px"}
      borderColor={theme.colors.primary[5]}
      borderStyle={"solid"}
      bgColor={theme.colors.blackCard1}
      border={"1px solid var(rgba(0, 234, 234, 0.05))"}
      h={"50px"}
      w={{ base: "100%", sm: "330px", md: "480px" }}
      {...props}
      color={theme.colors.primary.default}
      _hover={{
        bgColor: "none",
      }}
      sx={{
        "@media (hover: hover)": {
          "&:hover": {
            bgColor: theme.colors.blackCard2,
          },
        },
        "@media (hover: none)": {
          "&:active": {
            bgColor: theme.colors.blackCard2,
          },
        },
      }}
    >
      <Text className="button__text">{children}</Text>
    </Button>
  );
};

export default BrandButton;
