import { gql } from "../../../__generated__/gql";

export const GET_SERVICES = gql(`
  query GetServices {
    getServices {
      details
      statusCode
      data {
        id
        name
        description
      }
    }
  }
`);