import { useBrandTheme } from "@specific/themeContext";

const Glasses: React.FC<React.SVGAttributes<SVGSVGElement>> = (SVGprops) => {
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
        d="M29.7031 89.8185H22.9844V97.8733H31.0469V89.8185H37.7656V81.7637H29.7031V89.8185Z"
        fill={fill || theme.colors.primary.default}
      />
      <path
        d="M122.422 28.0649V21.3525H104.953V30.7498H121.078V81.7635H114.359V73.7087H107.641V66.9964H83.4531V73.7087H76.7344V81.7635H68.6719V89.8183H60.6094V81.7635H52.5469V73.7087H45.8281V66.9964H21.6406V73.7087H14.9219V81.7635H8.20312V30.7498H24.3281V21.3525H6.85938V28.0649H0.140625V83.106H8.20312V104.585H14.9219V112.64H21.6406V119.353H45.8281V112.64H53.8906V104.585H60.6094V97.8731H68.6719V104.585H75.3906V112.64H83.4531V119.353H107.641V112.64H114.359V104.585H121.078V83.106H129.141V28.0649H122.422ZM52.5469 103.243H45.8281V111.298H22.9844V103.243H16.2656V83.106H22.9844V75.0512H44.4844V83.106H52.5469V103.243ZM113.016 103.243H106.297V111.298H83.4531V103.243H76.7344V83.106H84.7969V75.0512H106.297V83.106H113.016V103.243Z"
        fill={fill || theme.colors.primary.default}
      />
      <path
        d="M90.1797 89.8185H83.4609V97.8733H91.5234V89.8185H98.2422V81.7637H90.1797V89.8185Z"
        fill={fill || theme.colors.primary.default}
      />
    </svg>
  );
};

export default Glasses;
