//import { gql } from "@apollo/client";
import { gql } from "../../../__generated__/gql";

export const PATIENT_LOGIN_BY_PASSWORD = gql(`
query patienLoginByPassword($loginPhoneNumber: String!, $password: String!){
  patienLoginByPassword(loginPhoneNumber: $loginPhoneNumber, password: $password){
      data{
          token
      }
      statusCode
      details
  }
}
  `)
