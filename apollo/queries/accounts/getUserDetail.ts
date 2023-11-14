import { gql } from "../../../__generated__/gql";

export const GET_USER_DATA = gql(`
query GetUserData {
    getUserData {
      details
      statusCode
      data {
        additionalPhoneNumber
        birthDate
        clientCardId
        clientPersonalAreaId
        clientUserId
        created
        email
        firstName
        gender
        id
        isActive
        isVerified
        lastLogin
        lastName
        lastVisit
        patronymic
        phoneNumber
      }
    }
  }`
)