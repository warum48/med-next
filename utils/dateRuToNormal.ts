export function formatDateRuToNormal(dateString:string):string {
    const parts = dateString.split('.');
    const year = parts[2];
    const month = parts[1];
    const day = parts[0];
    return `${year}-${month}-${day}`;
  }
  
  //const inputDate = '31.12.2012';
  //const outputDate = formatDate(inputDate);