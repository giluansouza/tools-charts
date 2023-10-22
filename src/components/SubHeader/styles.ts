import styled from "styled-components";

export const SubHeaderContainer = styled.div`
  width: 100vw;
  height: 50px;
  background: ${(props) => props.theme.colors.gray[800]};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[600]};
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`