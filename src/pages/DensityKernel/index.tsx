import { ChangeEvent, useState } from 'react';
import { SubHeader } from '../../components/SubHeader'
import { Map } from './components/Map';
import { Main, MainInput } from './styles';
import * as XLSX from 'xlsx';

interface Data {
  latitude: number;
  longitude: number;
  intensidade: number;
}

 export default function DensityKernel() {
  const [jsonData, setJsonData] = useState<Data[]>([
    {
      latitude: 0,
      longitude: 0,
      intensidade: 0
    }
  ]);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const file = e.target?.result

        if (file) {
          const data = file as ArrayBuffer;
          const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          
          const sheet = workbook.Sheets[sheetName];
          const dataJson: any = XLSX.utils.sheet_to_json(sheet);
          
          setJsonData(dataJson);
        }
      };
  
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <SubHeader>
        .densidade kernel
      </SubHeader>

      <Main>
        <MainInput>
          <div>
            <label>
              Upload da planilha
            </label>
            <input
              type="file" 
              accept=".xlsx" 
              onChange={handleFileUpload} 
            />
          </div>
          <a 
            target="_blank" 
            href="https://docs.google.com/spreadsheets/d/1H98aKoO_-NBN-bnEsO6YjjXLexJ4KERk/edit?usp=drive_link&ouid=109370909611652809334&rtpof=true&sd=true"
          >
            Baixar planilha modelo
          </a>
        </MainInput>
        <Map data={jsonData} />
      </Main>

    </div>
  );

}
