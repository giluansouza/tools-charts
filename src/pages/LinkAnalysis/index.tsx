import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkExample, PageContainer, VerticalBar } from './styles';
import { ForceDirectedGraph } from './components/ForceDirectedGraph';
import { SubHeader } from '../../components/SubHeader';
import queryString from 'query-string'

import data0 from '../../data/data0.json'

 export default function LinkAnalysis() {
  const [indice, setIndice] = useState(0)
  const location = useLocation();
  const parsedQuery = queryString.parse(location.search)
  let dataSimplified: any = data0
   

  useEffect(() => {
    if (parsedQuery.ex) {
      let val = Number(parsedQuery.ex) - 1
      setIndice(val)
      console.log(val)
    }
  }, [parsedQuery.ex])

  return (
    <>
      <SubHeader>
        .análise de vínculos
      </SubHeader>

      <PageContainer>
        <p>
          Exemplos:{' '} 
          <LinkExample to="/link-analysis?ex=1">Exemplo 1</LinkExample>
          {' - '}
          <LinkExample to="/link-analysis?ex=2">Exemplo 2</LinkExample>
          {' - '}
          <LinkExample to="/link-analysis?ex=3">Exemplo 3</LinkExample>
        </p>
        <ForceDirectedGraph
          width={1200}
          height={600}
          data={dataSimplified.data[indice]}
        />
      </PageContainer>

    </>
  );

}