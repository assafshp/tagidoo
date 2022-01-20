import styled from "styled-components";

export const Background = styled.div`
  height: 100%;
  width: 100%;
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
  align-items: center;
`;

export const ModalContent = styled.div``;
export const CloseModalButton = styled.button`
  cursor: pointer;
`;
