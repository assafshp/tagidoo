import styled from "styled-components";

import { COLORS } from "../theme";

export const Container = styled.div`
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border: 1px solid ${COLORS.color_light_grey};
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const TitleContainer = styled.div`
  background: linear-gradient(
    to right,
    ${COLORS.color_lightblue} 50%,
    #a7ede5,
    #45d9d5
  );
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;
export const Body = styled.div`
  height: 70%;
  padding: 10px;
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${COLORS.color_lightblue};
    border-radius: 40px;
  }
  ::-webkit-scrollbar-track {
    padding: 10px;
  }
`;
export const Header = styled.div`
  height: 20%;
  font-size: 18px;
  line-height: 32px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Subtitle = styled.div`
  font-size: 20px;
  height: 50%;
  padding: 15px;
  width: 100%;
  text-align: center;
  background-color: #faf8f8;
  color: ${COLORS.color_lightblue};
  font-size: 22px;
  font-weight: 300;
`;
export const Logo = styled.img`
  height: 150%;
  filter: brightness(0) invert(1);
  padding-top: 30px;
`;
export const Footer = styled.div`
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SquareButton = styled.button`
  height: 42px;
  width: 90%;
  background: ${COLORS.color_lightblue};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: white;
  font-size: 18px;
  &:hover {
    background: lightgray;
  }
`;
export const IconBtn = styled.img`
  padding: 20px;
  width: 25px;
`;
