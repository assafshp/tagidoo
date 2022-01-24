import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100px;
    justify-content: space-around;
`
export const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #707070;
`
export const Icon = styled.img<any>`
  height: 35px;
  cursor: pointer;
  filter: ${props => props.filter ? 'grayscale' : 'grayscale' };
`;