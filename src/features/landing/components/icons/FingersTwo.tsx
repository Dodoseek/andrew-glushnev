import { Icon, IconProps } from "@chakra-ui/react";

const FingersTwo: React.FC<IconProps> = (props) => {
  return (
    <Icon viewBox="0 0 80 80" {...props}>
      <path
        d="M27.5 17.5H22.5V25H25V32.5H27.5V37.5H40V30H42.5V22.5H45V15H40V22.5H37.5V30H35V32.5H32.5V30H30V25H27.5V17.5Z"
        fill="currentColor"
      />
      <path
        d="M42.5 30H47.5V40H42.5V45H32.5V47.5H30V50V57.5H25V52.5H22.5V45H25V42.5H27.5V40H42.5V30Z"
        fill="currentColor"
      />
      <path d="M55 30H50V40H55V30Z" fill="currentColor" />
      <path
        d="M30 60H27.5V70H30V72.5H52.5V70H55V60H52.5V62.5H42.5V60H35V62.5H30V60Z"
        fill="currentColor"
      />
      <path
        d="M30 57.5V50H32.5V47.5H42.5V45H45V42.5H47.5V40H50V42.5H55V57.5H52.5V60H42.5H30V57.5Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default FingersTwo;
