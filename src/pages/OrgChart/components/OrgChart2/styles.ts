import styled from "styled-components";

export const OrgChartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`

export const OrgChartContent = styled.div`
  background-color: ${(props) => props.theme.colors.gray[400]};
  width: 100%;
  height: 100%;
`