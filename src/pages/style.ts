import styled from "styled-components";

import { COLORS } from "../theme";

export const Container = styled.div`
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
  border: 1px solid ${COLORS.color_light_grey};
  width: 480px;
  height: 100vh;
  margin: 10%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
`;
export const Body = styled.div`
  height: 80%;
  padding: 20px;
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
  font-size: 18px;
  line-height: 32px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  color: white;
  align-self: center;
  font-size: 28px;
  padding-bottom: 10px;
  background: linear-gradient(
    to right,
    ${COLORS.color_lightblue} 50%,
    #a7ede5,
    #45d9d5
  );
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;
export const Subtitle = styled.div`
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 10px;
  color: ${COLORS.color_lightblue};
  font-size: 28px;
  font-weight: 300;
`;

export const Footer = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const SquareButton = styled.button`
  height: 42px;
  width: 250px;
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
