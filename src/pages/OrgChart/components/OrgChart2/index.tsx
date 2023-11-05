import { useEffect } from "react";
import { OrgChart } from 'd3-org-chart'
import { OrgChartContainer, OrgChartContent } from "./styles";

export function OrgChart2() {

  useEffect(() => {
    const chart = new OrgChart()
    
    fetch('https://raw.githubusercontent.com/giluansouza/my-json-server/master/org-chart-data.json')
      .then((d) => d.json())
      .then((data) => {
        console.log({ data });

        chart.nodeHeight((_d) => 85 + 25)
          .nodeWidth((_d) => 220 + 2)
          .childrenMargin((d) => 50)
          .compactMarginBetween((d) => 35)
          .compactMarginPair((d) => 30)
          .neighbourMargin((a, b) => 20)
          .nodeContent(function (node: any, _index, _nodes, _state) {
            const color = '#FFFFFF';
            const imageDiffVert = 25 + 2;
            return `
              <div 
                style='width:222px;height:${node.height}px;padding-top:${imageDiffVert - 2}px;padding-left:1px;padding-right:1px'>
                <div style="font-family: 'Inter', sans-serif;background-color:${color};  margin-left:-1px;width:220px;height:${node.height - imageDiffVert}px;border-radius:10px;border: 1px solid #E4E2E9">
                  <div style="display:flex;justify-content:flex-end;margin-top:5px;margin-right:8px">#${
                    node.data.id
                  }</div>
                  <div style="background-color:${color};margin-top:${-imageDiffVert - 20}px;margin-left:${15}px;border-radius:100px;width:50px;height:50px;" ></div>
                  <div style="margin-top:${
                    -imageDiffVert - 20
                  }px;">   <img src=" ${node.data.image}" style="margin-left:${20}px;border-radius:100px;width:40px;height:40px;" /></div>
                  <div style="font-size:15px;color:#08011E;margin-left:20px;margin-top:10px">  ${
                    node.data.name
                  } </div>
                  <div style="color:#716E7B;margin-left:20px;margin-top:3px;font-size:10px;"> ${
                    node.data.position
                  } </div>
                </div>
              </div>`;
            })
          .container('.chart-container')
          .data(data)
          // .svgWidth(960)
          .svgHeight(600)
          .render();
    });

    return () => {
      // Cleanup if necessary
      if (chart) {
        chart.clear();
      }
    };
  }, []);

  return (
    <OrgChartContainer>
      <OrgChartContent className="chart-container"></OrgChartContent>
    </OrgChartContainer>
  );
}