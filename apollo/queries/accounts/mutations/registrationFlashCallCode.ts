

import { gql } from "../../../../__generated__/gql";

export const REGISTRATION_FLASH_CALL_CODE = gql(`
mutation RegistrationFlashCallCode ($flashCallCode:FlashCallCode!)  {
    registrationFlashCallCode(flashCallCode: $flashCallCode) {
      data {
        token
      }
    details
    statusCode
    }
  }`)

/*
export const REGISTRATION_FLASH_CALL_CODE = gql(`
mutation RegistrationFlashCallCode ($phoneNumber:String!, $code:String!)  {
    registrationFlashCallCode(flashCallCode: {phoneNumber: $phoneNumber, code: $code}) {
      ... on MutationSuccess {
        __typename
        detail
      }
      ... on MutationError {
        __typename
        detail
        statusCode
      }
    }
  }`)
  */