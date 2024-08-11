import { Icon, IconProps } from "@chakra-ui/react";

const FingersThree: React.FC<IconProps> = (props) => {
  return (
    <Icon viewBox="0 0 80 80" {...props}>
      <path d="M32.5 15H27.5V37.5H32.5V15Z" fill="currentColor" />
      <path d="M35 40V32.5H40V42.5H37.5V40H35Z" fill="currentColor" />
      <path d="M42.5 42.5V32.5H47.5V42.5H42.5Z" fill="currentColor" />
      <path d="M50 42.5V32.5H55V42.5H50Z" fill="currentColor" />
      <path
        d="M52.5 57.5V60H42.5V62.5H35V60H30V57.5V50V47.5H35V45H40V42.5H42.5V45H47.5V42.5H50V45H55V57.5H52.5Z"
        fill="currentColor"
      />
      <path
        d="M30 60H27.5V70H30V72.5H52.5V70H55V60H52.5V62.5H30V60Z"
        fill="currentColor"
      />
      <path
        d="M35 45V40H25V42.5H22.5V55H25V57.5H30V50H27.5V47.5H30V45H35Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default FingersThree;
