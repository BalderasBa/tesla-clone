import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

import {
  HomeOutlined,
  PersonOutlineOutlined,
  PaymentOutlined,
  Battery90Outlined,
  InboxOutlined,
  HistorySharp,
  ExitToAppOutlined,
} from "@material-ui/icons";
import Footer from "../components/Footer";

function Account() {
  return (
    <div>
      <Header />
      <Container>
        <LeftSideAccount>
          <Ul>
            <li className="active">
              <span>
                <HomeOutlined fontSize="large" />
              </span>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <span>
                <PersonOutlineOutlined fontSize="large" />
              </span>
              <a href="#">Profile Settings</a>
            </li>
            <li>
              <span>
                <PaymentOutlined fontSize="large" />
              </span>
              <a href="#">Payment Method</a>
            </li>
            <li>
              <span>
                <Battery90Outlined fontSize="large" />
              </span>
              <a href="#">Charging</a>
            </li>
            <li>
              <span>
                <InboxOutlined fontSize="large" />
              </span>
              <a href="#">Loot Box</a>
            </li>
            <li>
              <span>
                <HistorySharp fontSize="large" />
              </span>

              <a href="#">Order History</a>
            </li>
            <li>
              <span>
                <ExitToAppOutlined fontSize="large" />
              </span>

              <a href="#">Sign Out</a>
            </li>
          </Ul>
        </LeftSideAccount>
        <Main>
          <MainHead>Dashboard</MainHead>
          <Boxes>
            <Box>
              <img src="/images/solar-panel.jpg" alt="" />
              <p>Order Tesla Solar</p>
              <span>Produce energy to power your Tesla life</span>
              <a href="#">View Solar</a>
            </Box>
            <Box>
              <img src="/images/Tesla-cars.webp" alt="" />
              <p>Reserve a Car</p>
              <span>Produce energy to power your Tesla life</span>
              <a href="/shope">Shop Now</a>
            </Box>
            <Box>
              <img src="/images/new-interior.jpg" alt="" />
              <p>Purchased a car from a third party?</p>
              <a href="#">Add</a>
            </Box>
          </Boxes>
        </Main>
      </Container>
      <Footer />
    </div>
  );
}

const MainHead = styled.h1`
  margin-bottom: 20px;
  user-select: none;
`;
const Container = styled.div`
  margin-top: 12vh;
  display: flex;
`;
const LeftSideAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  margin-right: 5vw;
  /* position: fixed; */
`;
const Ul = styled.ul`
  margin-top: 4vh;
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0;
    margin: 15px 20px;
    cursor: pointer;
    font-size: 16px;
    a {
      margin-left: 10px;
    }
    span {
      border-radius: 50%;
    }
    &.active span {
      background-color: #e8212720;
    }
  }
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const Boxes = styled.div`
  display: flex;
`;
const Box = styled.div`
  border-radius: 10px;
  box-shadow: -1px 1px 3px 1px #0003;
  max-width: 300px;
  margin: 10px;
  padding: 10px;
  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
  }
  p {
    font-weight: 400;
    font-size: 15px;
  }
  span {
    display: block;
    font-weight: 300;
    font-size: 14px;
  }
  a {
    display: block;
    margin-top: 20px;
    text-decoration: underline;
    font-weight: 400;
    color: #00000075;
    &:hover {
      color: #000;
    }
  }
`;
export default Account;
