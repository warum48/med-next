//import { gql } from "@apollo/client";
import { gql } from "../../../__generated__/gql";

export const PATIENT_LOGIN_BY_PHONE = gql(`
query PatientLoginByPhone ($phoneNumber:String!){
    patientLoginByPhone(phoneNumber: $phoneNumber) {
      data {
        token
      }
      details
      statusCode
    }
  }
  `)

  /*
  const AUTH = gql`
  query authQuery {
    login(login: "${email || cookieEmail.liame}", password: "${
    changePassword ? passNew : pass
  }") {
      ... on LoginSuccess {
        __typename
        token
      }
      ... on LoginError {
        __typename
        detail
        statusCode
      }
    }
  }
  `;
  */