import { Flower } from "lucide-react";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Flower size={24} color="red" />
      <h1>Devboot</h1>
    </HeaderContainer>
  )
}