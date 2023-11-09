import { gql } from "../../../__generated__/gql";

export const GET_CITIES = gql(`
  query GetCities {
    getCities {
        details
        statusCode
        data {
          clientCityId
          id
          isActive
          name
        }
      }
  }
`);