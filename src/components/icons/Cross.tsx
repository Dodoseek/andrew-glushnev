import { useBrandTheme } from "@specific/themeContext";

const Cross: React.FC<React.SVGAttributes<SVGSVGElement>> = (SVGprops) => {
  const theme = useBrandTheme();
  const { fill, ...props } = SVGprops;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="51"
      height="31"
      viewBox="0 0 51 31"
      fill="none"
      {...props}
    >
      <path
        d="M50.9706 28.3733L49.9782 30.0656L0.985352 2.21965L1.97784 0.527344L50.9706 28.3733Z"
        fill={fill || theme.colors.primary.default}
      />
      <path
        d="M1.99255 30.5273L1.00005 28.835L49.9929 0.989047L50.9854 2.68135L1.99255 30.5273Z"
        fill={fill || theme.colors.primary.default}
      />
    </svg>
  );
};

export default Cross;
