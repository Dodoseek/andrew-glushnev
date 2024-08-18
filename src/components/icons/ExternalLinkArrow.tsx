import { Icon, IconProps } from "@chakra-ui/react";

const ExternalLinkArrow: React.FC<IconProps> = (props) => {
  return (
    <Icon viewBox="0 0 12 12" {...props}>
      <path
        d="M1.41421 11.9077L0 10.4935L8.48528 2.00818H0.707107V0H11.9077V11.2006H9.8995V3.4224L1.41421 11.9077Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default ExternalLinkArrow;
