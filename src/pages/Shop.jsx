import React from "react";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import ShopNav from "../components/ShopNav";
import Footer from "../components/Footer";
import "../App.css"; //react-elastic-carousel style
import BestCarousel from "../components/BestCarousel";

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
            <img src="/images/carousel-shop1.avif" />
          </a>
        </CaroselItem>
        <CaroselItem>
          <a href="#">
            <img src="/images/carousel-shop2.avif" />
          </a>
        </CaroselItem>
        <CaroselItem>
          <a href="#">
            <img src="/images/carousel-shop3.avif" />
          </a>
        </CaroselItem>
      </Carousel>
      <BestCarousel />

      <Categories>
        <Category style={{ gridArea: "s" }}>
          <a href="#">
            <h3>Model S Accessoiries</h3>
            <img src="/images/shop-category-models.avif" alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "t" }}>
          <a href="#">
            <h3>Model 3 Accessoiries</h3>
            <img src="/images/shop-category-model3.avif" alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "x" }}>
          <a href="#">
            <h3>Model X Accessoiries</h3>
            <img src="/images/shop-category-modelx.avif" alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "y" }}>
          <a href="#">
            <h3>Model Y Accessoiries</h3>
            <img src="/images/shop-category-modely.avif" alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "c" }}>
          <a href="#">
            <h3>Charging</h3>
            <img src="/images/shop-category-charging.avif" alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "m" }}>
          <a href="#">
            <h3>Men's Apparel</h3>
            <img src="/images/shop-category-mensapp.avif" alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "w" }}>
          <a href="#">
            <h3>Women's Apparel</h3>
            <img src="/images/shop-category-womensapp.avif" alt="" />
          </a>
        </Category>
        <Category style={{ gridArea: "l" }}>
          <a href="#">
            <h3>Life Style</h3>
            <img src="/images/shop-category-lifestyle.avif" alt="" />
          </a>
        </Category>
      </Categories>

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
