import { csvFormat } from "d3";

export const message = (data) => {
    let message = '';
    message += data.length + ' rows\n';
    message += data.columns.length + ' columns\n';
    message += Math.round(csvFormat(data).length / 1024) + ' KB';
    return message
  }