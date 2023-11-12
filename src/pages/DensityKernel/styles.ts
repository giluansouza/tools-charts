import styled from "styled-components";

export const Main = styled.main`
  padding: 3rem;
  max-width: 100%;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MainInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: column; */
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray[300]};
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.red[500]};
    }
  }
`

export const FileInput = styled.input`
  /* Estilos para o container do input file */
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding: 10px 15px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.2s;
  outline: none;

  &:hover {
    background-color: #2980b9;
  }

  /* Estilos para o input real oculto */
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;