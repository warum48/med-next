import { gql } from "../../../../__generated__/gql";

export const CHANGE_PHONE_BY_PHONE = gql(`

mutation ChangePhoneByPhone {
    changePhoneByPhone(newPhoneNumber: "", oldPhoneNumber: "") {
      data
    details
    statusCode
    }
  }`)