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
function Main() {
  return (
    <Container>
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelx}
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={models}
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={model3}
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={modely}
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg={solarpanel}
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn more"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg={solarroof}
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg={accessories}
        leftBtnTxt="Shop Now"
      />
    </Container>
  );
}

export default Main;

const Container = styled.div`
  /* height: 100vh; */
`;
