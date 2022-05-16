import React from "react";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import ShopNav from "../components/ShopNav";
import Footer from "../components/Footer";
import "../App.css"; //react-elastic-carousel style
import BestCarousel from "../components/BestCarousel";

import ScrolTtop from "../components/ScrolTtop";

// Images:
import carouselshop1 from "../assets/images/carousel-shop1.avif";
import carouselshop2 from "../assets/images/carousel-shop2.avif";
import carouselshop3 from "../assets/images/carousel-shop3.avif";
import shopmodels from "../assets/images/shop-category-models.avif";
import shopmodel3 from "../assets/images/shop-category-model3.avif";
import shopmodelx from "../assets/images/shop-category-modelx.avif";
import shopmodely from "../assets/images/shop-category-modely.avif";
import shopcharging from "../assets/images/shop-category-charging.avif";
import shopmensapp from "../assets/images/shop-category-mensapp.avif";
import shopwomensapp from "../assets/images/shop-category-womensapp.avif";
import shoplifestyle from "../assets/images/shop-category-lifestyle.avif";

function Shop() {
  return (
    <Container>
      <ShopNav />
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
      >
        <CaroselItem>
          <a href="#">
            <img src={carouselshop1} />
          </a>
        </CaroselItem>
        <CaroselItem>
          <a href="#">
            <img src={carouselshop2} />
          </a>
        </CaroselItem>
        <CaroselItem>
          <a href="#">
            <img src={carouselshop3} />
          </a>
        </CaroselItem>
      </Carousel>
      <BestCarousel />

      <Categories>
        <Category style={{ gridArea: "s" }}>
          <a href="#">
            <h3>Model S Accessoiries</h3>
            <img src={shopmodels} alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "t" }}>
          <a href="#">
            <h3>Model 3 Accessoiries</h3>
            <img src={shopmodel3} alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "x" }}>
          <a href="#">
            <h3>Model X Accessoiries</h3>
            <img src={shopmodelx} alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "y" }}>
          <a href="#">
            <h3>Model Y Accessoiries</h3>
            <img src={shopmodely} alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "c" }}>
          <a href="#">
            <h3>Charging</h3>
            <img src={shopcharging} alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "m" }}>
          <a href="#">
            <h3>Men's Apparel</h3>
            <img src={shopmensapp} alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "w" }}>
          <a href="#">
            <h3>Women's Apparel</h3>
            <img src={shopwomensapp} alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "l" }}>
          <a href="#">
            <h3>Life Style</h3>
            <img src={shoplifestyle} alt="" />
          </a>
        </Category>
      </Categories>
      <ScrolTtop />
      <Footer />
    </Container>
  );
}
const Container = styled.div``;
const CaroselItem = styled.div`
  cursor: pointer;

  img {
    width: 100vw;
    height: 95vh;
  }
`;

const Categories = styled.div`
  display: grid;
  grid-template-areas:
    "s s s s"
    "t t x x"
    "y y y y"
    "c c m m"
    "c c w w"
    "l l l l";

  grid-gap: 30px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;
const Category = styled.div`
  a {
    display: inline-block;
    position: relative;
    h3 {
      color: #000;
      font-size: 25px;
      font-weight: 400;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 5;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
  &:nth-of-type(1) {
    h3 {
      left: 75%;
    }
  }
  &:nth-of-type(4),
  &:nth-of-type(8) {
    h3 {
      left: 25%;
    }
  }
  &:nth-of-type(2),
  &:nth-of-type(3),
  &:nth-of-type(6) {
    h3 {
      color: #fff;
    }
  }
  &:nth-of-type(5) {
    h3 {
      top: 25%;
    }
  }
`;

export default Shop;
