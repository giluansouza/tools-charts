import { SubHeader } from '../../components/SubHeader'
import { OrgChart2 } from './components/OrgChart2';
// import { OrgChartComponent } from './components/OrgChart'

 export default function OrgChartPage() {

  return (
    <div>
      <SubHeader>
        .organograma
      </SubHeader>

      <div>
        {/* <OrgChartComponent /> */}
        <OrgChart2 />
      </div>

    </div>
  );

}
