import styled from "styled-components";

export const FooterContainer = styled.header`
  width: 100vw;
  height: 40px;
  border-top: 1px solid ${(props) => props.theme.colors.gray[600]};
  padding: 0.75rem 0;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 0.8rem;
  }
`
