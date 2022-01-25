import styled from "styled-components";
import { COLORS } from "../../../theme";

export const BodyContainer = styled.div`
  font-size: 14px;
  height: 65%;
`;
export const SumOfVotes = styled.span``;
export const CommentsContainer = styled.div`
  margin-top: 5px;
  height: 80%;
  font-size: 12px;
  position: relative;
`;
export const CommentItem = styled.div`
  padding-left: 5px;
  padding-top: 10px;
  width: 200px;
  border-bottom: 1px solid ${COLORS.color_lightblue};
  color: #707070;
  margin-bottom: 10px;
`;
export const Row = styled.div`
  padding-top: 3px;
  padding-left: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${COLORS.color_lightblue};
`;
export const Square = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid ${COLORS.color_grey};
  z-index: 2;
  background-color: white;
`;
