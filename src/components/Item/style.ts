import styled from "styled-components";
import { COLORS } from "../../theme";

export const Container = styled.div`
  height: 40%;
  background: white;
  border-bottom: 1px solid #4ba6f8;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 15px;
  position: relative;
  justify-content: space-around;
`;
export const Body = styled.div`
  height: 90%;
  width: 100%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ImageItem = styled.img`
  height: 90%;
  object-fit: cover;
`;
export const HeaderItem = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.div`
  color: ${COLORS.color_grey};
`;
export const Price = styled.div`
  font-size: 18px;
  padding-top: 10px;
  color: ${COLORS.color_grey};
`;

export const IconButton = styled.img`
  height: 17px;
  cursor: pointer;
`;
