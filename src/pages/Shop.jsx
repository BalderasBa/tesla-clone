import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";

function Shop() {
  return (
    <div>
      {/* header with search & wallet */}
      <Header />
      {/* with mega menus */}
      <HeaderShop />
      <Landining />
      <BestSellers />
      <Categories />
      <Items />
      <Footer />
    </div>
  );
}
const HeaderShop = styled.div``;
const Landining = styled.div``;
const BestSellers = styled.div``;
const Categories = styled.div``;
const Items = styled.div``;
export default Shop;
