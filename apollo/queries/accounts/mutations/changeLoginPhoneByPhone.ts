import { gql } from "../../../../__generated__/gql";

export const CHANGE_PHONE_BY_PHONE = gql(`

mutation changeLoginPhoneByPhone($oldPhoneNumber: String!, $newPhoneNumber: String!){
  changeLoginPhoneByPhone(oldPhoneNumber: $oldPhoneNumber, newPhoneNumber: $newPhoneNumber){
      data
      statusCode
      details
  }
}`)