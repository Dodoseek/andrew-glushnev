import { useBrandTheme } from "@specific/themeContext";

const FingersOne: React.FC<React.SVGAttributes<SVGSVGElement>> = (SVGprops) => {
  const theme = useBrandTheme();
  const { fill, ...props } = SVGprops;

  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_21891_1887"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="41"
      >
        <rect
          y="0.333252"
          width="40"
          height="40"
          fill="url(#pattern0_21891_1887)"
        />
      </mask>
      <g mask="url(#mask0_21891_1887)">
        <rect
          x="-0.5"
          y="-1.16675"
          width="40.5"
          height="44"
          fill={fill || theme.colors.primary.dark}
        />
      </g>
      <defs>
        <pattern
          id="pattern0_21891_1887"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use transform="scale(0.00195312)" />
        </pattern>
        <image id="image0_21891_1887" width="512" height="512" />
      </defs>
    </svg>
  );
};

export default FingersOne;
