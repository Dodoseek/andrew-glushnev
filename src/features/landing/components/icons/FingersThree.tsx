import { Icon, IconProps } from "@chakra-ui/react";

const FingersThree: React.FC<IconProps> = (props) => {
  return (
    <Icon viewBox="0 0 80 80" {...props}>
      <path
        d="M30 15H35V32.5H37.5V10H42.5V32.5H45V15H50V32.5H55V42.5H50V32.5H47.5V40H45V37.5H32.5V40H30V15Z"
        fill="currentColor"
      />
      <path
        d="M45 40H32.5V42.5H27.5V45H25V55H27.5V57.5H32.5V50V47.5H35V45H45V40Z"
        fill="currentColor"
      />
      <path
        d="M32.5 60V50H35V47.5H45V45H47.5V42.5H50V45H55V57.5H52.5V60H45V62.5H37.5V60H32.5Z"
        fill="currentColor"
      />
      <path
        d="M32.5 62.5H37.5H52.5V60H55V70H52.5V72.5H32.5V70H30V60H32.5V62.5Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default FingersThree;
