import { useBrandTheme } from "@specific/themeContext";

const Window: React.FC<React.SVGAttributes<SVGSVGElement>> = (props) => {
  const theme = useBrandTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130 130"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111.69 20V27.5584H118V110.701H111.69V45.1948H18.3095V110.701H12V27.5584H18.3095V20H111.69ZM18.3095 110.701L18.3095 117H111.69V110.701H18.3095ZM28.4048 64.0909H102.857V70.3896H28.4048V64.0909ZM65 80.4675H28.4048V86.7662H65V80.4675ZM82.1627 29.3725H89.0275V36.2254H82.1627V29.3725ZM102.757 29.3725H95.8922V36.2254H102.757V29.3725Z"
        fill={theme.colors.primary}
      />
    </svg>
  );
};

export default Window;
