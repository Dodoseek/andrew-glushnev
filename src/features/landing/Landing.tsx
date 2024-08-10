import LandingContainer from "@landing/layout/LandingContainer";
import Main from "@landing/sections/Main";
import AboutMe from "@landing/sections/AboutMe";
import Header from "@/components/common/Header";

export default function Landing() {
  return (
    <LandingContainer>
      <Header />
      <Main />
      <AboutMe />
    </LandingContainer>
  );
}
