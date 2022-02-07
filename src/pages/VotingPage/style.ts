import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
export const HeaderContainer = styled.div``;
export const InputTitle = styled.div`
  font-size: 25px;
  font-weight: 500;
`;
export const Link = styled.a`
  color:white;
`
export const IconMessage = styled.img``;
export const InputMessage = styled.input`
  outline: 0;
  border-width: 0 0 1px;
  border-color: white;
  background-color: transparent;
  color: white;
  text-align: center;
  font-size: 18px;
  width: 80%;

  &::placeholder {
    color: white;
  }
`;
