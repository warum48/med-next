export function formatDateRuToNormal(dateString:string):string {
    const parts = dateString.split('.');
    const year = parts[2];
    const month = parts[1];
    const day = parts[0];
    return `${year}-${month}-${day}`;
  }

  export function formatDateNormalToRu(dateString:string | undefined | null):string {
    if(dateString){
    const parts = dateString.split('-');
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];
    return `${day}.${month}.${year}`;
    }else{
      return ''
    }
  }  
  
  //const inputDate = '31.12.2012';
  //const outputDate = formatDate(inputDate);