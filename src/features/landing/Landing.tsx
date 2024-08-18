import LandingContainer from "@landing/layout/LandingContainer";
import Main from "@landing/sections/Main";
import AboutMe from "@landing/sections/AboutMe";
import Header from "@common/Header";
import CleanCode from "@landing/sections/CleanCode";
import Services from "@landing/sections/Services";
import Partnership from "@landing/sections/Partnership";

export default function Landing() {
  return (
    <LandingContainer>
      <Header />
      <Main />
      <AboutMe />
      <CleanCode />
      <Services />
      <Partnership />
    </LandingContainer>
  );
}
