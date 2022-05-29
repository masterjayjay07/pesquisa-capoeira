import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  a {
    color: #fff;
  }
  h2 {
    font-size: 30px;
    color: #fff;
    padding: 10px;
    box-shadow: 1px 1px 40px 80px var(--color-darkBlue);
    background-color: var(--color-darkBlue);
  }
`;

export const ContainerInfos = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  p {
    padding: 10px;
  }
`;
