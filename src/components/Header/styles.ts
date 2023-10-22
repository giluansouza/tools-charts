import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[600]};
  padding: 0 1.5rem;
  gap: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.5rem;
  }
`
