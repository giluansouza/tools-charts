import { ForceDirectedGraph } from '../../components/ForceDirectedGraph/index';
import { SubHeader } from '../../components/SubHeader';
import { GraphContainer } from './styles';

import MyrielImage from '../../assets/13810676.png';
import ValjeanImage from '../../assets/13810676.png';
import CosetteImage from '../../assets/13810676.png';

const dataSimplified: any = {
    "nodes": [
      {"id":"Fulana","group":1, image: MyrielImage},
      {"id":"Pai de Fulana","group":1, image: ValjeanImage},
      {"id":"Mãe de Fulana","group":1, image: CosetteImage},
      {"id":"Irmao de Fulana","group":1, image: CosetteImage},
      {"id":"ocorrencia1","group":2},
      {"id":"ocorrencia2","group":2},
      {"id":"ocorrencia3","group":2},
      {"id":"ocorrencia4","group":2},
      {"id":"ocorrencia5","group":2},
      {"id":"ocorrencia6","group":2},
      
    ],
    "links": [
      {"source": "Fulana", "target":"ocorrencia1","value":8},
      {"source":"Fulana","target":"ocorrencia2","value":8},
      {"source":"Fulana","target":"ocorrencia3","value":8},
      {"source":"Fulana","target":"ocorrencia4","value":8},
      {"source":"Fulana","target":"ocorrencia5","value":8},
      {"source":"Fulana","target":"ocorrencia6","value":8},
      {"source":"Pai de Fulana","target":"ocorrencia1","value":8},
      {"source":"Pai de Fulana","target":"ocorrencia3","value":8},
      {"source":"Pai de Fulana","target":"ocorrencia4","value":8},
      {"source":"Pai de Fulana","target":"ocorrencia5","value":8},
      {"source":"Pai de Fulana","target":"ocorrencia6","value":8},
      {"source":"Mãe de Fulana","target":"ocorrencia2","value":8},
      {"source":"Mãe de Fulana","target":"ocorrencia4","value":8},
      {"source":"Irmao de Fulana","target":"ocorrencia2","value":8},
      {"source":"Irmao de Fulana","target":"ocorrencia4","value":8},
    ]
  }

 export default function LinkAnalysis() {

  return (
    <GraphContainer>
      <SubHeader>.Análise de Vínculo</SubHeader>
      <ForceDirectedGraph 
        data={dataSimplified} 
        width={960}
        height={600}
      />
    </GraphContainer>
  );

}