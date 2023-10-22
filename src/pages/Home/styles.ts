import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const Card = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.theme.colors.gray[800]};

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  header {
    padding: 1rem;
  }

  div {
    margin-top: 1rem;
    padding: 1rem;
    flex: 1;
  }

  footer {
    padding: 1rem;
  }
`