import SectionContainer from "@common/SectionContainer";
import AdvantagesAccordion from "@landing/components/AdvantagesAccordion";
import TitleDescriptor from "@landing/components/TitleDescriptor";

const CleanCode = () => {
  return (
    <SectionContainer>
      <TitleDescriptor
        descriptor="Разработка сайтов на чистом коде это - создание уникальных и
            кастомизированных сайтов без ограничений шаблонов и инструментов."
        title="чистый код"
      />
      <AdvantagesAccordion />
    </SectionContainer>
  );
};

export default CleanCode;
