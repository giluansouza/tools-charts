import styled from "styled-components";

export const Main = styled.div`
  flex: 1;
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  /* place-items: center; */
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas em telas maiores que 768px */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas em telas maiores que 1024px */
  }

  @media (min-width: 1367px) {
    grid-template-columns: repeat(5, 1fr); /* 3 colunas em telas maiores que 1024px */
  }
`

export const Card = styled.div`
  max-width: 320px;
  height: 160px;
  background-color: ${(props) => props.theme.colors.black};
  
  border: 2px solid transparent;
  border-image: linear-gradient(
    45deg, 
    ${(props) => props.theme.colors.gray[600]}, 
    ${(props) => props.theme.colors.black},
    ${(props) => props.theme.colors.red[900]}
  ) 4;
  border-image-slice: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray[400]};
    font-weight: bold;
    border: 1px solid ${(props) => props.theme.colors.gray[300]};
    border-radius: 8px;
    padding: 0.5rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors.gray[600]};
      color: ${(props) => props.theme.colors.gray[100]};
      border: 1px solid ${(props) => props.theme.colors.gray[300]};
    }
  }

  button {
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray[400]};
    font-weight: bold;
    border: 1px solid ${(props) => props.theme.colors.gray[300]};
    border-radius: 8px;
    padding: 0.5rem;
    transition: all 0.2s ease-in-out;
    cursor: not-allowed;

    &:disabled {
      opacity: 0.6;
    }

    /* &:hover {
      background-color: ${(props) => props.theme.colors.gray[600]};
      color: ${(props) => props.theme.colors.gray[100]};
      border: 1px solid ${(props) => props.theme.colors.gray[300]};
    } */
  }
`