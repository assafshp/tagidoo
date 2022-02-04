import styled from "styled-components";

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const CloseButton = styled.div`
  cursor: pointer;
  height: 20px;
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


export const SharePage = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
export const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;
