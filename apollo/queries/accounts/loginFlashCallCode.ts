import { gql } from "@apollo/client";
//import { gql } from "../../../__generated__/gql";

export const LOGIN_FLASH_CALL_CODE = gql(`
query LoginFlashCallCode ($phoneNumber:String!, $code:String!) {
    loginFlashCallCode(flashCallCode: {phoneNumber: $phoneNumber, code: $code}) {
      data {
        token
      }
      details
      statusCode
    }
  }
  `)