import { Icon, IconProps } from "@chakra-ui/react";

const LeftBracket: React.FC<IconProps> = (props) => {
  return (
    <Icon viewBox="0 0 55 55" {...props}>
      <rect
        y="31"
        width="4"
        height="55"
        transform="rotate(-90 0 31)"
        fill="currentColor"
      />
    </Icon>
  );
};

export default LeftBracket;
