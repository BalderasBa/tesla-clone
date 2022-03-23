import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

import Carousel from "react-elastic-carousel";
import ShopNav from "../components/ShopNav";

function Shop() {
  return (
    <Container>
      <ShopNav />

      {/* <Header /> */}
      {/* for ARABIC: isRTL={true} */}
      <Carousel itemsToShow={1}>
        <img
          src="/images/model-s.jpg"
          style={{ height: "70vh", width: "100vw", objectFit: "cover" }}
          alt=""
        />
        <img
          src="/images/model-3.jpg"
          style={{ height: "70vh", width: "100vw", objectFit: "cover" }}
          alt=""
        />
        <img
          src="/images/model-x.jpg"
          style={{ height: "70vh", width: "100vw", objectFit: "cover" }}
          alt=""
        />
        <img
          src="/images/model-y.jpg"
          style={{ height: "70vh", width: "100vw", objectFit: "cover" }}
          alt=""
        />
      </Carousel>
      <BestSellers />
      <Categories />
      <Items />

      <Footer />
    </Container>
  );
}
const Container = styled.div`
  padding-top: 100px;
`;
const BestSellers = styled.div``;
const Categories = styled.div``;
const Items = styled.div``;
export default Shop;
