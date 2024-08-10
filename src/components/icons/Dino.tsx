import { useBrandTheme } from "@specific/themeContext";

const Dino: React.FC<React.SVGAttributes<SVGSVGElement>> = (SVGprops) => {
  const theme = useBrandTheme();
  const { fill, ...props } = SVGprops;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130 130"
      fill="none"
      {...props}
    >
      <path
        d="M70.1 17V22.1H65V52.7H59.9V57.8H49.7V62.9H44.6V68H39.5V73.1H29.3V68H24.2V62.9H19.1V52.7H14V83.3H19.1V88.4H24.2V93.5H29.3V98.6H34.4V119H44.6V113.9H39.5V108.8H44.6V103.7H49.7V98.6H54.8V103.7H59.9V119H70.1V113.9H65V93.5H70.1V88.4H75.2V83.3H80.3V68H85.4V73.1H90.5V62.9H80.3V52.7H105.8V47.6H90.5V42.5H116V22.1H110.9V17M75.2 22.1H80.3V27.2H75.2V22.1Z"
        fill={fill || theme.colors.primary.default}
      />
    </svg>
  );
};

export default Dino;
