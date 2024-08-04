import { useBrandTheme } from "@specific/themeContext";

const Burger: React.FC<React.SVGAttributes<SVGSVGElement>> = (props) => {
  const theme = useBrandTheme();

  return (
    <svg
      {...props}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="50"
        y="12"
        width="2"
        height="50"
        transform="rotate(90 50 12)"
        fill={theme.colors.primary}
      />
      <rect
        x="50"
        y="24"
        width="2"
        height="50"
        transform="rotate(90 50 24)"
        fill={theme.colors.primary}
      />
      <rect
        x="50"
        y="36"
        width="2"
        height="50"
        transform="rotate(90 50 36)"
        fill={theme.colors.primary}
      />
    </svg>
  );
};

export default Burger;
