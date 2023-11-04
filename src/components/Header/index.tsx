import { Flower } from "lucide-react";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <a href="https://devboot.com.br" target="_blank">
        <Flower size={24} color="red" />
        <h1>Devboot</h1>
      </a>
    </HeaderContainer>
  )
}