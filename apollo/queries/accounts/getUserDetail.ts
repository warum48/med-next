import { gql } from "../../../__generated__/gql";

export const GET_USER_DATA = gql(`
query GetUserData {
    getUserData {
      details
      statusCode
      data {
        id
        clientId
        firstName
        lastName
        patronymic
        birthDate
        gender
        email
        phoneNumber
        additionalPhoneNumber
        docType
        docSeries
        docNumber
        docGivingDepName
        docGivingDepCode
        docDate
        docRegAddress
      }
    }
  }`
)