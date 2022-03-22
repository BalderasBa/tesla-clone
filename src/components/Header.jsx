import React, { useState } from "react";
import styled from "styled-components";
import { MenuOutlined, CloseOutlined } from "@material-ui/icons";
import { selectCars } from "../features/car/CarSlice";
import { useSelector } from "react-redux";

function Header() {
  const [sideMenu, setSideMenu] = useState(false);
  // const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="/">
        <img src="./images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {/* {cars && cars.map((car, index) => <a key={index} href="#">{car}</a>)} */}
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solqr Panels</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#" onClick={() => setSideMenu(true)}>
          Menu
        </a>
        <CustomMenu onClick={() => setSideMenu(true)} />
      </RightMenu>
      <SideNav show={sideMenu}>
        <CustomClose onClick={() => setSideMenu(false)} />
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Commercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relations</a>
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
  );
}

export default Header;

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
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 400;
    font-size: 15px;
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
  @media (max-width: 991px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 400;
    text-transform: uppercase;
    margin-right: 10px;
    font-size: 15px;
    padding: 5px 10px;
    border-radius: 5px;
    transition: 250ms ease-in;
    &:hover {
      background-color: #0001;
    }
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
