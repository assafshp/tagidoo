import styled from "styled-components";
import { COLORS } from "../../theme";

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  top: 101%;
  left: 0;
  z-index: 2;
  padding: 20px 0;
`;
export const VotesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  color: #707070;
  & > div:not(:last-child) {
    border-right: 2px solid ${COLORS.color_lightblue};
  }
  border-bottom: 2px solid ${COLORS.color_lightblue};
  padding-bottom: 20px;
`;
export const Column = styled.div`
  width: 20%;
  text-align: center;
`;
export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  color: #707070;
`;
export const VoteRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SmallIcon = styled.img`
  height: 25px;
  padding-right: 20px;
`;
