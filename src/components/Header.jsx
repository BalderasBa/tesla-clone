import React, { useState } from "react";
import styled from "styled-components";
import { MenuOutlined, CloseOutlined } from "@material-ui/icons";
import { selectCars } from "../features/car/CarSlice";
import { useSelector } from "react-redux";

import logo from "../assets/images/logo.svg";
import Langue from "./Langue";
import { useTranslation } from "react-i18next";

function Header() {
  const [sideMenu, setSideMenu] = useState(false);
  // const cars = useSelector(selectCars);
  const { t } = useTranslation();

  return (
    <Container>
      <a href="/teslaclone/home">
        <img src={logo} alt="logo" />
      </a>
      <Menu>
        {/* {cars && cars.map((car, index) => <a key={index} href="#">{car}</a>)} */}
        <a href="#">{t("home.model")} S</a>
        <a href="#">{t("home.model")} 3</a>
        <a href="#">{t("home.model")} X</a>
        <a href="#">{t("home.model")} Y</a>
        <a href="#">{t("home.solarr")}</a>
        <a href="#">{t("home.solarp")}</a>
      </Menu>
      <RightMenu>
        <a href="/teslaclone/shop">{t("home.shop")}</a>
        <a href="/teslaclone/account">{t("home.account")}</a>
        <a href="#" onClick={() => setSideMenu(true)}>
          {t("home.menu")}
        </a>
        <CustomMenu onClick={() => setSideMenu(true)} />
      </RightMenu>
      <SideNav show={sideMenu}>
        <CustomClose onClick={() => setSideMenu(false)} />

        <li>
          <a href="#">{t("home.menu.existing")}</a>
        </li>
        <li>
          <a href="#">{t("home.menu.used")}</a>
        </li>
        <li>
          <a href="#">{t("home.menu.trade")}</a>
        </li>
        <li>
          <a href="#">{t("home.menu.test")}</a>
        </li>
        <li>
          <a href="#">{t("home.menu.cybertruck")}</a>
        </li>
        <li>
          <a href="#">{t("home.menu.roadster")}</a>
        </li>
        <li>
          <a href="#">{t("home.menu.semi")}</a>
        </li>
        <li>
          <a href="#">{t("home.menu.charging")}</a>
        </li>

        <li>
          <a href="#">{t("home.menu.powerwall")}</a>
        </li>
        <li>
          <a href="#">{t("home.menu.commercial")}</a>
        </li>
        <li>
          <a href="#">{t("home.menu.utilities")}</a>
        </li>
        <li>
          <a href="#">{t("home.menu.find")}</a>
        </li>
        <li>
          <a href="#">{t("home.menu.support")}</a>
        </li>
        <li>
          <a href="#">{t("home.menu.investor")}</a>
        </li>
        <li>
          <Langue />
        </li>
      </SideNav>
    </Container>
  );
}

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
  a {
    color: #000;
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
export default Header;
