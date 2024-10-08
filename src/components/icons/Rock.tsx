import { useBrandTheme } from "@specific/themeContext";

const Rock: React.FC<React.SVGAttributes<SVGSVGElement>> = (SVGprops) => {
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
        d="M97.9977 90.6215V19.3646H87.0567V62.1187H82.9538V42.6851H72.0128V62.1187H67.9099V67.3011H58.3365V71.1878H47.3955V76.3701H41.925V71.1878H47.3955V67.3011H58.3365V58.232H62.4394V62.1187H67.9099V42.6851H56.9689V56.9364H52.866V9H41.925V56.9364H37.8221V62.1187H32.3516V85.4392H37.8221V90.6215H47.3955V94.5082H43.2926V112.646H46.0278V119.124H92.5272V112.646H97.9977V94.5082H92.5272V99.6905H73.3804V94.5082H92.5272V90.6215H97.9977ZM58.3365 99.6905H48.7631V95.8038H58.3365V99.6905ZM82.9538 67.3011H72.0128V62.1187H82.9538V67.3011Z"
        fill={fill || theme.colors.primary.default}
      />
    </svg>
  );
};

export default Rock;
