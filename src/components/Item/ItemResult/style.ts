import styled from "styled-components";
import { COLORS } from "../../../theme";

export const BodyContainer = styled.div`
  font-size: 14px;
  height: 50%;
`;
export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  border: 5px solid #00a9ff;
`;
export const ImageTitle = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #00a9ff;
  width: 100%;
  color: white;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageContainer = styled.div`
  position: relative;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SumOfVotes = styled.span``;
export const CommentsContainer = styled.div`
  margin-top: 5px;
  height: 80%;
  font-size: 12px;
  position: relative;
`;
export const ButtonDropdown = styled.img`
  cursor: pointer;
  height: 35px;
  filter: sepia(100%) hue-rotate(190deg) saturate(500%);
  position: absolute;
  bottom: 0;
  right: 0;
`;
export const CommentItem = styled.div`
  width: 200px;
  border-bottom: 1px solid ${COLORS.color_lightblue};
  color: #707070;
  margin-bottom: 10px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${COLORS.color_lightblue};
  height: 35%;
`;
