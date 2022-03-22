import React from "react";
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
      &:nth-of-type(3),
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
  return (
    <Foot>
      <a href="#">Tesla &copy; {new Date().getFullYear()} </a>
      <a href="#">Privacy & Legal</a>
      <a href="#">Contact</a>
      <a href="#">Careers</a>
      <a href="#">News</a>
      <a href="#">Engage</a>
      <a href="#">Locations</a>
    </Foot>
  );
}

export default Footer;
