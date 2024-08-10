import { useBrandTheme } from "@specific/themeContext";

const Computer: React.FC<React.SVGAttributes<SVGSVGElement>> = (SVGprops) => {
  const theme = useBrandTheme();

  const { fill, ...props } = SVGprops;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      {...props}
    >
      <path
        d="M109.926 23.4878V17.417H20.0786V23.4878H14.0078V95.1232H20.0786V102.408H49.8255V108.479H80.1795V102.408H109.926V95.1232H115.997V23.4878H109.926ZM108.712 81.7674H21.2928V24.7019H108.712V81.7674Z"
        fill={fill || theme.colors.primary.default}
      />
      <path
        d="M92.3247 112.121H37.6875V119.406H92.3247V112.121Z"
        fill={fill || theme.colors.primary.default}
      />
    </svg>
  );
};

export default Computer;
