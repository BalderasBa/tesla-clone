import React, { useState } from "react";
import styled from "styled-components";
import { MenuOutlined, CloseOutlined } from "@material-ui/icons";
import { selectCars } from "../features/car/CarSlice";
import { useSelector } from "react-redux";

function Header() {
  const [sideStatus, setSideStatus] = useState(false);
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
        <a href="#" onClick={() => setSideStatus(true)}>
          Menu
        </a>
        {/* <CustomMenu onClick={() => setSideStatus(true)} /> */}
      </RightMenu>
      <SideNav show={sideStatus}>
        <CustomClose onClick={() => setSideStatus(false)} />
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
          <a href="#">
            United State <span>English</span>
          </a>
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
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuOutlined)`
  cursor: pointer;
`;

const SideNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 100;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  transform: ${(props) => (props.show ? "TranslateX(0)" : "TranslateX(100%)")};
  transition: transform 300ms;
  li {
    padding: 10px 0;
    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(CloseOutlined)`
  align-self: flex-end;
  cursor: pointer;
`;
