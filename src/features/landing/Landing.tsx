import LandingContainer from "@landing/layout/LandingContainer";
import Main from "./sections/Main";
import Header from "@/components/common/Header";
import SectionContainer from "@common/SectionContainer";

export default function Landing() {
  return (
    <LandingContainer>
      <SectionContainer zIndex={50} position={"fixed"} left={0} right={0}>
        <Header />
      </SectionContainer>
      <Main />
    </LandingContainer>
  );
}
