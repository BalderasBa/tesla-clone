import React from "react";
import styled from "styled-components";
import Section from "./Section";

// Images:
import modelx from "../assets/images/model-x.jpg";
import models from "../assets/images/model-s.jpg";
import model3 from "../assets/images/model-3.jpg";
import modely from "../assets/images/model-y.jpg";
import solarpanel from "../assets/images/solar-panel.jpg";
import solarroof from "../assets/images/solar-roof.jpg";
import accessories from "../assets/images/accessories.jpg";
import { useTranslation } from "react-i18next";
function Main() {
  const { t } = useTranslation();
  return (
    <Container>
      <Section
        title="Model X"
        description={t("section.order")}
        backgroundImg={modelx}
        leftBtnTxt={t("section.custom")}
        rightBtnTxt={t("section.existing")}
      />
      <Section
        title="Model S"
        description={t("section.order")}
        backgroundImg={models}
        leftBtnTxt={t("section.custom")}
        rightBtnTxt={t("section.existing")}
      />
      <Section
        title="Model 3"
        description={t("section.order")}
        backgroundImg={model3}
        leftBtnTxt={t("section.custom")}
        rightBtnTxt={t("section.existing")}
      />
      <Section
        title="Model Y"
        description={t("section.order")}
        backgroundImg={modely}
        leftBtnTxt={t("section.custom")}
        rightBtnTxt={t("section.existing")}
      />
      <Section
        title={t("home.solarp")}
        description={t("section.solar")}
        backgroundImg={solarpanel}
        leftBtnTxt={t("section.ordernow")}
        rightBtnTxt={t("section.learn")}
      />
      <Section
        title={t("home.solarr")}
        description={t("section.roof")}
        backgroundImg={solarroof}
        leftBtnTxt={t("section.ordernow")}
        rightBtnTxt={t("section.learn")}
      />
      <Section
        title={t("section.accssoir")}
        description=""
        backgroundImg={accessories}
        leftBtnTxt={t("home.shopnow")}
      />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  /* height: 100vh; */
`;
