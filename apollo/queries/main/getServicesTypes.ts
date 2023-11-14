import { gql } from "../../../__generated__/gql";

export const GET_SERVICES_TYPES = gql(`
  query GetServicesTypes {
    getServicesTypes {
        details
        statusCode
        data {
          name
          isActive
          id
          description
          clientStypeId
        }
      }
  }
`);