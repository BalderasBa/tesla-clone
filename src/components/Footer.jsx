import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Foot = styled.div`
  display: flex;
  justify-content: center;
  min-height: 50px;
  gap: 20px;
  margin-top: 30px;
  a {
    color: #555;
    cursor: pointer;
    z-index: 10;
    &:hover {
      color: #000;
    }
    @media (max-width: 991px) {
      &:nth-of-type(2),
      &:nth-of-type(6),
      &:last-of-type {
        display: none;
      }
    }
  }
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }
`;

function Footer() {
  const { t } = useTranslation();

  return (
    <Foot>
      <a href="#">{t("tesla")} &copy; {new Date().getFullYear()} </a>
      <a href="#">{t("footer.privacy")}</a>
      <a href="contact">{t("footer.contact")}</a>
      <a href="#">{t("footer.career")}</a>
      <a href="#">{t("footer.news")}</a>
      <a href="#">{t("footer.engage")}</a>
      <a href="#">{t("footer.locations")}</a>
    </Foot>
  );
}

export default Footer;
