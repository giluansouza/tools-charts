import { SubHeaderContainer } from "./styles";

export function SubHeader({ children }: { children: React.ReactNode }) {
  return (
    <SubHeaderContainer>
      <h2>{children}</h2>
      <a href='/'>Início</a>
    </SubHeaderContainer>
  )
}