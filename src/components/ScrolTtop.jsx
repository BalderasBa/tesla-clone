import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import styled from "styled-components";

const Scrol = styled.div`
  position: fixed;
  bottom: 2em;
  right: 4em;
  border-radius: 50%;
  padding: 5px 8px;
  background-color: #4444;
  z-index: 1001;
  transition: 200ms;
  animation: '${bouncing}' 900ms alternate infinite;
  svg {
    color: #f005;
    transition: 200ms;
  }
  &:hover svg {
    color: #f00;
  }
  &:hover {
    background-color:#444;
  }
`;

const bouncing = `
 @keyframes bouncing {
    0%,
    10%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
  
    40%,
    60% {
      transform: translateY(-7px);
    }
}`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return isVisible ? (
    <Scrol>
      <a href="#">
        <ArrowUpwardIcon />
      </a>
    </Scrol>
  ) : null;
};

export default ScrollToTop;
