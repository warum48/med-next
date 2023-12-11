import { gql } from "../../../__generated__/gql";

export const GET_CITIES = gql(`
query getCities($filteringAttrs: CityInput, $orderingAttrs: CityInput, $skip: Int, $limit: Int, $descSorting: Boolean){
  getCities(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit, descSorting: $descSorting){
      data{
          id
          clientId
          name
          isActive
      }
      statusCode
      details
  }
}
`);