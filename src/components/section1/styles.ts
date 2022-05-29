import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  border: 4px solid #fff;
  border-radius: 5px;
  background-color: var(--color-darkBlue);
  padding: 10px;
  div {
    width: 300px;
    color: #fff;
    img {
      width: 290px;
      height: 290px;
    }
  }
`;
