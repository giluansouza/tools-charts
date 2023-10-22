import { Barchart } from '../../components/BarChart';
import { SubHeader } from '../../components/SubHeader';

 export default function OrgChart() {

  return (
    <div>
      <SubHeader>
        Organograma
      </SubHeader>

      <div>
        <Barchart />
      </div>

    </div>
  );

}
