import styled from "styled-components";
import { COLORS } from "../../theme";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.55);
`;

export const ModalWrapper = styled.div`
  width: 50%;
  height: 40%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  background-color: ${COLORS.color_lightblue};
  color: white;
  padding: 10px;
`;

export const ModalContent = styled.div`
  width: 80%;
`;
export const IconCloseBtn = styled.div`
  height: 30px;
  width: 30px;
  background: transparent;
  border: 2px white solid;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
export const CloseModalButton = styled.button`
  cursor: pointer;
  height: 50px;
  padding:15px;
  margin:10px;
  background-color: #45d9d5;
  border: none;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
