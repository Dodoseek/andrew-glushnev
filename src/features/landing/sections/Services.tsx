import SectionContainer from "@common/SectionContainer";
import TitleDescriptor from "@landing/components/TitleDescriptor";
import ServiceElements from "@landing/components/ServiceElements";

const Services = () => {
  return (
    <SectionContainer>
      <TitleDescriptor
        descriptor="Мой процесс работы чётко разбит на этапы. Окончательная стоимость и сроки выполнения работы определяются после проведения брифа."
        title="Услуги"
      />
      <ServiceElements />
    </SectionContainer>
  );
};

export default Services;
