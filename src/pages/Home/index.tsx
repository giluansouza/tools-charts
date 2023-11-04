import { FlowArrow, MapTrifold, TreeStructure } from "phosphor-react";
import { SubHeader } from "../../components/SubHeader";
import { Card, Main } from "./styles";

export function Home() {
  return (
    <>
      <SubHeader>
        .analytics
      </SubHeader>
      <Main>
        <Card>
          <MapTrifold size={32} />      
          <h2>
            Densidade Kernel
          </h2>
          <button disabled>Acessar</button>
        </Card>

        <Card>
          <TreeStructure size={32} />
          <h2>
            Organograma
          </h2>
          <a href="/org-chart">Acessar</a>
        </Card>
        
        <Card>
          <FlowArrow size={32} />      
          <h2>
            Análise de Vínculos
          </h2>
          <a href="/link-analysis">Acessar</a>
        </Card>

      </Main>
    </>
  )
}
