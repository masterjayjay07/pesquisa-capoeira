import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 300px;
  border: 4px solid var(--color-darkRed);
  border-radius: 5px;
  background-color: var(--color-darkBlue);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: calc(0.5s);
  div {
    width: 280px;
    height: 280px;
    border: 4px solid #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    img {
      width: 250px;
      height: 230px;
      border-radius: 4px;
    }
    a {
      cursor: pointer;
      color: #fff;
      font-size: 25px;
    }
  }
  :hover {
    transform: scale(1.05);
    transition: calc(0.5s);
  }
`;
