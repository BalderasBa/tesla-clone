import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftBtnTxt,
  rightBtnTxt,
  backgroundImg,
}) {
  window.addEventListener("keydown", function (event) {
    let pageHeight = window.innerHeight;
    console.log(event.key);
    switch (event.key) {
      case "ArrowUp" && "PageUp":
        event.preventDefault();
        window.scrollBy(0, -pageHeight);
        break;
      case "ArrowDown" && "PageDown":
        event.preventDefault();
        window.scrollBy(0, pageHeight);

        break;
    }
  });
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <ButtonGroup>
          <Fade left>
            <LeftButton>{leftBtnTxt}</LeftButton>
          </Fade>
          <Fade right>
            {rightBtnTxt && <RightButton>{rightBtnTxt}</RightButton>}
          </Fade>
        </ButtonGroup>
        <DownArrow
          src="./images/down-arrow.svg"
          onClick={() => {
            let pageHeight = window.innerHeight;
            window.scrollBy(0, pageHeight);
          }}
        />
      </Buttons>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url(/images/${props.bgImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div`
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 31, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  font-weight: bold;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.6;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animDown infinite 1.5s;
  overflow-x: hidden;
  cursor: pointer;
`;
export default Section;
