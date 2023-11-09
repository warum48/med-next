//import { gql } from "@apollo/client";
import { gql } from "../../../__generated__/gql";

export const PATIENT_LOGIN_BY_PASSWORD = gql(`
query PatienLoginByPassword ($password: String!, $phoneNumber:String!) {
    patienLoginByPassword(password: $password, phoneNumber: $phoneNumber) {
      details
      statusCode
      data {
        token
      }
    }
  }
  `)
