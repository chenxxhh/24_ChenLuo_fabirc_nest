import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  postAddFile(file: any): string {
    const wb = XLSX.read(file.buffer, { type: 'buffer' });
    const jsonData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
    console.log(jsonData);
    const newData = jsonData.map((item) => {
      const listTitle = item['列表标题'].split('\r\n').filter((i) => i);
      const listContent = item['列表内容'].split('\r\n').filter((i) => i);
      const list = listTitle.map((title, index) => {
        return {
          title,
          content: listContent[index],
        };
      });
      return {
        title: item['主标题'],
        subTitile: item['副标题'],
        list,
      };
    });
    return JSON.stringify(newData);
  }
}
