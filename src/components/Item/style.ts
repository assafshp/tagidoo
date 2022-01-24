import styled from "styled-components";
import { COLORS } from "../../theme";

export const Container = styled.div`
  background: white;
  border-bottom: 1px solid #4BA6F8;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const Body = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ImageItem = styled.img`
  max-width: 100%;
  height: 90%;
  width: 130px;
  padding-left: 10px;
  object-fit: cover;
`;
export const HeaderItemInit = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;
export const Title = styled.div`
  color: ${COLORS.color_grey};
`;
export const Price = styled.div`
  font-weight: bold;
  padding-top: 10px;
  color: ${COLORS.color_grey};
`;

export const IconButton = styled.img`
  height: 17px;
  cursor: pointer;
`;
