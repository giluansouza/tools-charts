import { SubHeader } from "../../components/SubHeader";
import { Card, Main } from "./styles";

export function Home() {
  return (
    <>
      <SubHeader>
        .Analytics - Gráficos
      </SubHeader>
      <Main>
        <Card>
          <header>Organograma</header>
          <div>
            Crie organogramas de forma simples e intuitiva
          </div>
          <footer>
            <a href="/org-chart">Acessar</a>
          </footer>
        </Card>
        
        <Card>
          <header>Análise de Vínculos</header>
          <div>
            Crie suas análises de vínculos e facilite o entendimento dos seus dados
          </div>
          <footer>
            <a href="/link-analysis">Acessar</a>
          </footer>
        </Card>
      </Main>
    </>
  )
}
