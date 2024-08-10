import { useBrandTheme } from "@specific/themeContext";

const Lamp: React.FC<React.SVGAttributes<SVGSVGElement>> = (SVGprops) => {
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
        d="M101.119 39.1728V30.0123H91.9254V22.1605H83.3881V13H46.6119V22.1605H38.0746V30.0123H28.8806V39.1728H21V75.8148H28.8806V84.9753H38.0746V94.1358H47.9254V119H82.0746V94.1358H91.9254V84.9753H101.119V75.8148H109V39.1728H101.119ZM98.4925 74.5062H90.6119V83.6667H81.4179V92.8272H70.2537V65.3457H78.1343V57.4938H51.8657V65.3457H59.7463V92.8272H48.5821V83.6667H39.3881V74.5062H31.5075V40.4815H39.3881V32.6296H48.5821V23.4691H81.4179V32.6296H90.6119V40.4815H98.4925V74.5062Z"
        fill={fill || theme.colors.primary.default}
      />
    </svg>
  );
};

export default Lamp;
