export function formatPhoneNumber(phoneNumber: string | undefined): string {
    if (phoneNumber){
    const countryCode = phoneNumber.slice(0, 1);
    const areaCode = phoneNumber.slice(1, 4);
    const firstPart = phoneNumber.slice(4, 7);
    const secondPart = phoneNumber.slice(7, 9);
    const thirdPart = phoneNumber.slice(9, 11);
    return `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}-${thirdPart}`;
    } else{
        return ''
    }
  
   
  }