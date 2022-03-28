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
  const [search, setSearch] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

  const renderContent = useCallback(() => {
    switch (meganum) {
      case 1:
        return (
          <MegaMenu onMouseLeave={() => setMeganum(0)} key={1}>
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
          <MegaMenu onMouseLeave={() => setMeganum(0)} key={2}>
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
          <MegaMenu onMouseLeave={() => setMeganum(0)} key={3}>
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
          <MegaMenu onMouseLeave={() => setMeganum(0)} key={4}>
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
          <div className={search ? "search" : ""}>
            {search && (
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Tap to search"
              />
            )}

            <a href="#">
              <Search
                onClick={() => {
                  !search ? setSearch(true) : setSearch(false);
                }}
              />
            </a>
          </div>
          <a href="#">
            <ShoppingCart />
          </a>
          <a href="#" onClick={() => setSideMenu(true)}>
            Menu
          </a>
          <CustomMenu onClick={() => setSideMenu(true)} />
        </RightMenu>
        <SideNav show={sideMenu}>
          <CustomClose onClick={() => setSideMenu(false)} />
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
      <div>{renderContent()}</div>
    </>
  );
}
const MegaMenu = styled.div`
  border-top: 1px solid #0004;
  position: absolute;
  top: 60px;
  z-index: 500;
  background-color: #fff9;
  width: 100%;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  transition: 300ms ease-in;
`;
const Ul = styled.ul`
  width: 200px;
  margin-bottom: 20px;

  li:first-child {
    border-bottom: 3px solid #0005;
    padding-bottom: 10px;
    a {
      font-weight: bold;
    }
  }
  li {
    margin: 5px 10px;
    display: block;
    font-size: 18px;
    padding-bottom: 10px;
    padding-top: 10px;
    a {
      display: inline-block;
      color: #000;
      transition: 200ms;
      &:hover {
        font-weight: bold;
        transform: translateX(2px);
      }
    }
  }
`;
const Image = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  img {
    height: 200px;
    width: 300px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const Hz = styled.h2`
  margin-top: 10px;
  text-align: center;
`;

// ------------------------
// ------------------------
// ------------------------
const Container = styled.div`
  height: 60px;
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
    a {
      color: #000;
    }
    .MuiSvgIcon-root,
    .search .MuiSvgIcon-root {
      color: black;
    }
    input,
    input:focus,
    input:active {
      color: #000;
      &::placeholder {
        color: #000;
      }
    }
  }
  a {
    color: #fff;
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
  .MuiSvgIcon-root {
    color: #fff;
  }
  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    border-radius: 10px;
    border: 1px solid #0005;

    input {
      outline: none;
      border: none;
      caret-color: red;
      padding: 3px 10px;
      background-color: transparent;
      color: #fff;
      &::placeholder {
        color: #fff;
      }
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
