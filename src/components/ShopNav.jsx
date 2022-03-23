import React, { useState, useCallback } from "react";
import styled from "styled-components";
import {
  MenuOutlined,
  CloseOutlined,
  Search,
  ShoppingCart,
} from "@material-ui/icons";

function ShopNav() {
  const [meganum, setMeganum] = useState(0);

  const renderContent = React.useCallback(() => {
    switch (meganum) {
      case 1:
        return (
          <MegaMenu key={1}>
            <Ul>
              <li>
                <a href="#">At Home</a>
              </li>
            </Ul>
            <Ul>
              <li>
                <a href="#">On the road</a>
              </li>
            </Ul>
            <Ul>
              <li>
                <a href="#">Parts</a>
              </li>
            </Ul>
            <Image>
              <img src="/images/wall_connector.jpg" alt="" />
              <Hz>Wall Connector</Hz>
            </Image>
          </MegaMenu>
        );
      case 2:
        return (
          <MegaMenu key={2}>
            <Ul>
              <li>
                <a href="#">Model S</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Interior</a>
              </li>
              <li>
                <a href="#">Exterior</a>
              </li>
              <li>
                <a href="#">Wheels and Tries</a>
              </li>
              <li>
                <a href="#">Floor Mats</a>
              </li>
              <li>
                <a href="#">Parts</a>
              </li>
              <li>
                <a href="#">Keys</a>
              </li>
            </Ul>
            <Ul>
              <li>
                <a href="#">Model 3</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Interior</a>
              </li>
              <li>
                <a href="#">Exterior</a>
              </li>
              <li>
                <a href="#">Wheels and Tries</a>
              </li>
              <li>
                <a href="#">Floor Mats</a>
              </li>
              <li>
                <a href="#">Parts</a>
              </li>
              <li>
                <a href="#">Keys</a>
              </li>
            </Ul>
            <Ul>
              <li>
                <a href="#">Model X</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Interior</a>
              </li>
              <li>
                <a href="#">Exterior</a>
              </li>
              <li>
                <a href="#">Wheels and Tries</a>
              </li>
              <li>
                <a href="#">Floor Mats</a>
              </li>
              <li>
                <a href="#">Parts</a>
              </li>
              <li>
                <a href="#">Keys</a>
              </li>
            </Ul>
            <Ul>
              <li>
                <a href="#">Model Y</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Interior</a>
              </li>
              <li>
                <a href="#">Exterior</a>
              </li>
              <li>
                <a href="#">Wheels and Tries</a>
              </li>
              <li>
                <a href="#">Floor Mats</a>
              </li>
              <li>
                <a href="#">Parts</a>
              </li>
              <li>
                <a href="#">Keys</a>
              </li>
            </Ul>
          </MegaMenu>
        );
      case 3:
        return (
          <MegaMenu key={3}>
            <Ul>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Tees</a>
              </li>
              <li>
                <a href="#">Sweatshirts & Hoodies</a>
              </li>
              <li>
                <a href="#">OuterWear</a>
              </li>
              <li>
                <a href="#">Joggers</a>
              </li>
              <li>
                <a href="#">Hats</a>
              </li>
              <li>
                <a href="#">Socks</a>
              </li>
            </Ul>
            <Ul>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Tees</a>
              </li>
              <li>
                <a href="#">Sweatshirts & Hoodies</a>
              </li>
              <li>
                <a href="#">OuterWear</a>
              </li>
              <li>
                <a href="#">Joggers</a>
              </li>
              <li>
                <a href="#">Hats</a>
              </li>
              <li>
                <a href="#">Socks</a>
              </li>
            </Ul>
            <Ul>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Best Sellers</a>
              </li>
              <li>
                <a href="#">Tees</a>
              </li>
              <li>
                <a href="#">OuterWear</a>
              </li>
              <li>
                <a href="#">Hats</a>
              </li>
              <li>
                <a href="#">Socks</a>
              </li>
            </Ul>
            <Image>
              <img src="/images/chill-pullover-hoodie.jpg" alt="" />
              <Hz>Chill Pullover Hoodie</Hz>
            </Image>
          </MegaMenu>
        );
      case 4:
        return (
          <MegaMenu key={4}>
            <Ul>
              <li>
                <a href="#">At Home</a>
              </li>
            </Ul>
            <Ul>
              <li>
                <a href="#">On the road</a>
              </li>
            </Ul>
            <Ul>
              <li>
                <a href="#">Parts</a>
              </li>
            </Ul>
            <Image>
              <img src="/images/wireless-portable-charger.jpg" alt="" />
              <Hz>Wireless Portable Charger 2.0</Hz>
            </Image>
          </MegaMenu>
        );
      default:
        return;
    }
  }, [meganum]);
  return (
    <>
      <Container>
        <a href="/home">
          <img src="./images/logo.svg" alt="logo" />
        </a>
        <a href="/shop">Shop</a>
        <Menu>
          <a href="#" onMouseOver={() => setMeganum(1)}>
            Charging
          </a>
          <a href="#" onMouseOver={() => setMeganum(2)}>
            Vehicule Accessories
          </a>
          <a href="#" onMouseOver={() => setMeganum(3)}>
            Apparel
          </a>
          <a href="#" onMouseOver={() => setMeganum(4)}>
            Lifestyle
          </a>
        </Menu>
        <RightMenu>
          <a href="#">
            <Search />
          </a>
          <a href="#">
            <ShoppingCart />
          </a>
          <a href="#">Menu</a>
          <CustomMenu />
        </RightMenu>
        <SideNav>
          <CustomClose />
          <li>
            <a href="#">Shop FAQ</a>
          </li>
          <li>
            <a href="/">Sign In</a>
          </li>
          <li>
            <select name="" id="">
              <option value="en_US">English (English)</option>
              <option value="ar_AE">العربية (Arabic)</option>
              <option value="fr_FR">Français (French)</option>
            </select>
          </li>
        </SideNav>
      </Container>
      <div className="container">{renderContent()}</div>
    </>
  );
}
const Hz = styled.h2`
  margin-top: 10px;
`;
const Image = styled.div`
  img {
    height: 200px;
    width: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const Ul = styled.ul`
  width: 200px;
  li:first-child {
    border-bottom: 2px solid #0005;
    padding-bottom: 10px;
    a {
      color: #000;
    }
  }
  li {
    margin: 5px 10px;
    display: block;
    font-size: 18px;
    padding-bottom: 10px;
    padding-top: 10px;
    a {
      color: #0008;
    }
  }
`;
const MegaMenu = styled.div`
  position: absolute;
  z-index: 500;
  background-color: #fff8;
  height: 75vh;
  width: 100%;
  /* margin-top: 12vh; */
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  transition: 300ms ease-in;
`;

// ------------------------
// ------------------------
// ------------------------
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10001;
  @media (max-width: 991px) {
    justify-content: space-between;
  }
  :hover {
    background-color: #fff;
  }
  a {
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    padding: 5px 10px;
    border-radius: 5px;
    transition: 250ms ease-in;
    &:hover {
      background-color: #0001;
    }
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 991px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    &:last-of-type {
      font-weight: 600;
      @media (max-width: 991px) {
        display: none;
        opacity: 0;
      }
    }
    @media (max-width: 991px) {
      margin-right: 50px;
    }
  }
`;
const CustomMenu = styled(MenuOutlined)`
  cursor: pointer;
  display: none;
  opacity: 0;
  transition: 250ms;
  @media (max-width: 991px) {
    display: block;
    opacity: 1;
  }
`;
const SideNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  overflow-y: scroll;
  z-index: 100;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transform: ${(props) => (props.show ? "TranslateX(0)" : "TranslateX(100%)")};
  transition: transform 300ms;
  li {
    padding: 10px 0;
    a {
      font-weight: 600;
    }
  }
  select {
    cursor: pointer;
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
    outline: none;
  }
`;
const CustomClose = styled(CloseOutlined)`
  position: absolute;
  align-self: flex-end;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: #0001;
  }
`;

export default ShopNav;
