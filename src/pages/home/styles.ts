import styled from "styled-components";

export const CardsContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const FooterContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  div {
    background-color: var(--color-darkBlue);
    border-radius: 50px;
    padding: 20px;
    color: #fff;
    a {
      color: #fff;
      text-decoration: underline;
    }
  }
`;
