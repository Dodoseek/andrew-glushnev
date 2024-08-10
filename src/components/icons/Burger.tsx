import { useBrandTheme } from "@specific/themeContext";

const Burger: React.FC<React.SVGAttributes<SVGSVGElement>> = (SVGprops) => {
  const theme = useBrandTheme();
  const { fill, ...props } = SVGprops;
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="50"
        y="12"
        width="2"
        height="50"
        transform="rotate(90 50 12)"
        fill={fill || theme.colors.primary.default}
      />
      <rect
        x="50"
        y="24"
        width="2"
        height="50"
        transform="rotate(90 50 24)"
        fill={fill || theme.colors.primary.default}
      />
      <rect
        x="50"
        y="36"
        width="2"
        height="50"
        transform="rotate(90 50 36)"
        fill={fill || theme.colors.primary.default}
      />
    </svg>
  );
};

export default Burger;
