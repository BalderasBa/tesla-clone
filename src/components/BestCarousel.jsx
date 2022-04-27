import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

// Images:
import bestsellers1 from "../assets/images/best-sellers1.gif";
import bestsellers2 from "../assets/images/best-sellers2.jpg";
import bestsellers3 from "../assets/images/best-sellers3.jpg";
import bestsellers4 from "../assets/images/best-sellers4.jpg";
import bestsellers5 from "../assets/images/best-sellers5.jpg";
import bestsellers6 from "../assets/images/best-sellers6.jpg";
import bestsellers7 from "../assets/images/best-sellers7.jpg";

function BestCarousel() {
  return (
    <div>
      <Carousel
        itemsToShow={3}
        itemsToScroll={1}
        enableAutoPlay
        autoPlaySpeed={1500}
        itemPadding={[10, 30]}
        isRTL={true}
        pagination={false}
      >
        <Box>
          <img src={bestsellers1} />
          <h4>Tesla Shop Gift Card</h4>
        </Box>
        <Box>
          <img src={bestsellers2} />

          <h4>Men’s Chill Crew Neck Sweatshirt</h4>
        </Box>
        <Box>
          <img src={bestsellers3} />

          <h4>Wireless Portable Charger 2.0</h4>
        </Box>
        <Box>
          <img src={bestsellers4} />

          <h4>Model S Roof Rack - Glass Roof</h4>
        </Box>
        <Box>
          <img src={bestsellers5} />

          <h4>Men's Raven Lightweight Zip Up Bomber Jacket</h4>
        </Box>
        <Box>
          <img src={bestsellers6} />

          <h4>Wall Connector</h4>
        </Box>
        <Box>
          <img src={bestsellers7} />
          <h4>Model 3 Illuminated Door Sills</h4>
        </Box>
      </Carousel>
    </div>
  );
}
const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 30px;
  background-color: #0001;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
  }
  img {
    width: 335px;
    height: 335px;
    object-fit: cover;
  }
  h4 {
    text-align: center;
    min-height: 40px;
    letter-spacing: 0.7px;
    font-weight: normal;
    margin: 20px 0;
  }
`;
export default BestCarousel;
