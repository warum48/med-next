import { gql } from "@apollo/client";
//import { gql } from "../../../__generated__/gql";

export const LOGIN_FLASH_CALL_CODE = gql(`
query loginFlashCallCode($flashCallCode: FlashCallCode!){
  loginFlashCallCode(flashCallCode: $flashCallCode){
      data{
          token
      }
      statusCode
      details
  }
}
  `)