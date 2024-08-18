import { Link } from "@chakra-ui/react";
import ExternalLinkArrow from "@icons/ExternalLinkArrow";
import useHoverActive from "@/hooks/useHoverActive";

interface ExternalLinkProp {
  text: string;
  href: string;
}

const ExternalLink = ({ text, href }: ExternalLinkProp) => {
  const { isHoverEffect, ref } = useHoverActive();

  return (
    <Link
      // @ts-ignore
      ref={ref}
      textDecoration={"none"}
      _hover={{
        textDecoration: "none",
      }}
      target="_blank"
      href={href}
      display={"flex"}
      color={isHoverEffect ? "primary.dark" : "primary.default"}
      className="h5"
      textTransform={"uppercase"}
      gap={isHoverEffect ? "14px" : "7px"}
      alignItems={"center"}
      transition={"gap 0.2s ease-in-out"}
      w={"fit-content"}
    >
      {text} <ExternalLinkArrow boxSize={"12px"} />
    </Link>
  );
};

export default ExternalLink;
