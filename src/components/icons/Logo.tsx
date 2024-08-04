import { useBrandTheme } from "@specific/themeContext";

const Logo: React.FC<React.SVGAttributes<SVGSVGElement>> = (props) => {
  const theme = useBrandTheme();

  return (
    <svg
      {...props}
      width="67"
      height="50"
      viewBox="0 0 67 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="&#208;&#187;&#208;&#190;&#208;&#179;&#208;&#190;">
        <g id="AG">
          <path
            d="M2 39.5998V15.5998C2 14.7198 2.21333 13.9198 2.64 13.1998C3.06667 12.4531 3.64 11.8665 4.36 11.4398C5.10667 11.0131 5.92 10.7998 6.8 10.7998H26C26.88 10.7998 27.68 11.0131 28.4 11.4398C29.1467 11.8665 29.7333 12.4531 30.16 13.1998C30.5867 13.9198 30.8 14.7198 30.8 15.5998V39.5998H27.56V29.0798H5.24V39.5998H2ZM5.24 25.8398H27.56V15.5998C27.56 15.1731 27.4 14.8131 27.08 14.5198C26.7867 14.1998 26.4267 14.0398 26 14.0398H6.8C6.37333 14.0398 6 14.1998 5.68 14.5198C5.38667 14.8131 5.24 15.1731 5.24 15.5998V25.8398Z"
            fill={theme.colors.primary}
          />
          <path
            d="M40.1575 39.5998C39.2775 39.5998 38.4642 39.3865 37.7175 38.9598C36.9975 38.5331 36.4242 37.9598 35.9975 37.2398C35.5708 36.4931 35.3575 35.6798 35.3575 34.7998V15.5998C35.3575 14.7198 35.5708 13.9198 35.9975 13.1998C36.4242 12.4531 36.9975 11.8665 37.7175 11.4398C38.4642 11.0131 39.2775 10.7998 40.1575 10.7998H59.3575C60.2375 10.7998 61.0375 11.0131 61.7575 11.4398C62.5042 11.8665 63.0908 12.4531 63.5175 13.1998C63.9442 13.9198 64.1575 14.7198 64.1575 15.5998V16.7598H60.9175V15.5998C60.9175 15.1731 60.7575 14.8131 60.4375 14.5198C60.1442 14.1998 59.7842 14.0398 59.3575 14.0398H40.1575C39.7308 14.0398 39.3575 14.1998 39.0375 14.5198C38.7442 14.8131 38.5975 15.1731 38.5975 15.5998V34.7998C38.5975 35.2265 38.7442 35.5998 39.0375 35.9198C39.3575 36.2131 39.7308 36.3598 40.1575 36.3598H59.3575C59.7842 36.3598 60.1442 36.2131 60.4375 35.9198C60.7575 35.5998 60.9175 35.2265 60.9175 34.7998V27.6798H53.7975V24.3998H64.1575V34.7998C64.1575 35.6798 63.9442 36.4931 63.5175 37.2398C63.0908 37.9598 62.5042 38.5331 61.7575 38.9598C61.0375 39.3865 60.2375 39.5998 59.3575 39.5998H40.1575Z"
            fill={theme.colors.primary}
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
