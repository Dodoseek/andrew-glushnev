import {
  Grid,
  GridItem,
  Text,
  Image,
  ListItem,
  UnorderedList,
  SimpleGrid,
} from "@chakra-ui/react";
import SectionContainer from "@common/SectionContainer";
import designerImg from "@landing/assets/images/designer.jpg";
import ExternalLink from "@/components/text/ExternalLink";
import DesignerSertificate from "@landing/components/DesignerSertificate";

const Partnership = () => {
  return (
    <SectionContainer>
      <Grid
        templateColumns={{ base: "1, 1fr", lg: "repeat(3, 1fr)" }}
        h={"fit-content"}
        w={"100%"}
        mb={"30px"}
      >
        <GridItem mb={{ base: "30px", md: 0 }}>
          <Text w={"100%"} color={"white.100"} className="h2" as={"h2"}>
            Партнёрство с UI/UX Дизайнером
          </Text>
        </GridItem>
        <GridItem
          ms={{ lg: 4 }}
          mt={{ base: "30px", lg: 0 }}
          as={Grid}
          colSpan={2}
          templateColumns={{ base: "1, 1fr", md: "2, 1fr" }}
          h={"fit-content"}
        >
          <GridItem
            colSpan={2}
            display={"flex"}
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: "20px", md: "40px" }}
          >
            <Image
              w={"200px"}
              src={designerImg}
              alt="Катерина Турцева"
              rounded={"10px"}
            />
            <UnorderedList
              display={"flex"}
              flexDir={"column"}
              gap={"20px"}
              m={0}
              listStyleType="none"
            >
              <ListItem
                as={ExternalLink}
                text="BEHANCE"
                href="https://www.behance.net/katerinturtsev1"
              />
              <ListItem
                as={ExternalLink}
                text="WHATSAPP"
                href="https://api.whatsapp.com/send?phone=79133916028"
              />
              <ListItem
                as={ExternalLink}
                text="TELEGRAM"
                href="https://t.me/katyarosenrot"
              />
            </UnorderedList>
          </GridItem>
          <GridItem
            className="text4"
            mt={"20px"}
            as={Text}
            colSpan={2}
            color={"white.100"}
            w={{ base: "100%", md: "728px", lg: "790px", xl: "890px" }}
          >
            Я работаю в актуальном, лаконичном стиле. Провожу конкурентный
            анализ, изучаю нишу и разрабатываю концептуальный дизайн, который
            подчеркивает вашу индивидуальность и соответствует современным
            стандартам и запросу пользователей.
          </GridItem>
          <GridItem
            className="descriptor3"
            mt={"20px"}
            as={Text}
            colSpan={2}
            color={"primary.default"}
          >
            — Катерина Турцева, UI/UX дизайнер
          </GridItem>
          <GridItem
            colSpan={2}
            display={"flex"}
            gap={{ base: "30px", md: "60px", xl: "160px" }}
            mt={{ base: "30px", md: "60px", lg: "80px" }}
            flexDir={{ base: "column", md: "row" }}
          >
            <DesignerSertificate
              title="Сертификат"
              descriptor="калифорнийского университета искусств CalArts"
            />
            <DesignerSertificate
              title="Диплом"
              descriptor="ведущей школы UI/UХ дизайна - Uprock"
            />
          </GridItem>
        </GridItem>
      </Grid>
    </SectionContainer>
  );
};

export default Partnership;
