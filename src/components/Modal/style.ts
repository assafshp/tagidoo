import styled from "styled-components";
import { COLORS } from "../../theme";

export const Background = styled.div`
  height: 100%;
  width: 60%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 300px;
  height: 100px;
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

export const ModalContent = styled.div``;
export const CloseModalButton = styled.button`
  cursor: pointer;
  background-color: #45d9d5;
  border: none;
  border-radius: 20px;
  width: 50px;
  margin-top: 20px;
  color: white;
`;
