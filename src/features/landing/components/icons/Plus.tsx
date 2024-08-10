import { Icon, IconProps } from "@chakra-ui/react";

const LeftBracket: React.FC<IconProps> = (props) => {
  return (
    <Icon viewBox="0 0 55 55" {...props}>
      <path d="M26 0H30V55H26V0Z" fill="currentColor" />
      <path d="M0 31L4.77012e-08 27H55V31H0Z" fill="currentColor" />
    </Icon>
  );
};

export default LeftBracket;
