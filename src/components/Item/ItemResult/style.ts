import styled from "styled-components";
import { COLORS } from "../../../theme";

export const BodyContainer = styled.div`
  height: 50%;
`;
export const Image = styled.img`
  height: 150px;
  width: 100px;
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
  font-size: 14px;
`;
export const ImageContainer = styled.div`
  position: relative;
  height: 90%;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SumOfVotes = styled.span`
  font-size: 14px;
`;
export const CommentsContainer = styled.div`
  margin-top: 5px;
  height: 80%;
  font-size: 12px;
  position: relative;
`;
export const ButtonDropdown = styled.img`
  cursor: pointer;
  height: 30px;
  filter: sepia(100%) hue-rotate(190deg) saturate(500%);
  transition: transform 300ms ease-in-out 0s;
  position: absolute;
  bottom: 0;
  right: 0;

  &:focus {
    transform: rotate(180deg);
  }
`;
export const CommentItem = styled.div`
  width: 160px;
  border-bottom: 1px solid ${COLORS.color_lightblue};
  color: #707070;
  margin-bottom: 10px;
  font-size: 14px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${COLORS.color_lightblue};
  font-size: 14px;
`;
