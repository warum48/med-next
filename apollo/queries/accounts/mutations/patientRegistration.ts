//import { gql } from "@apollo/client";
//import { gql } from '__generated__/gql';
//import { gql } from '../src/__generated__/gql';

import { gql } from "../../../../__generated__/gql";



export const PATIENT_REGISTRATION = gql(`
mutation PatientRegistration ($patient: PatientRegistration!){
    patientRegistration(
      patient: $patient
    ) {
      statusCode
    details
    data
    }
  }`)

/*
export const PATIENT_REGISTRATION = gql`
mutation PatientRegistration ($patient: Object!){
    patientRegistration(
      patient: $patient
    ) {
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
  }`
  */

  /*
  {$firstName: String!,
    $lastName: String!,
    $patronymic: String,
    $birthDate: String!,
    $gender: String,
    $email: String!,
    $phoneNumber: String!,
    $additionalPhoneNumber: String,
    $password: String!}


    {firstName: $firstName, lastName: $lastName, birthDate: $birthDate, email: $email, phoneNumber: $phoneNumber, password: $password, patronymic: $patronymic, gender: $gender, additionalPhoneNumber: $additionalPhoneNumber}

    */