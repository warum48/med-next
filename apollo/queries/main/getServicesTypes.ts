import { gql } from "../../../__generated__/gql";

export const GET_SERVICES_TYPES = gql(`
query getServicesTypes($filteringAttrs: ServiceTypeInput, $orderingAttrs: ServiceTypeInput, $skip: Int, $limit: Int, $descSorting: Boolean){
  getServicesTypes(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit, descSorting: $descSorting){
      data{
          id
          name
          description
          isActive
      }
      statusCode
      details
  }
}
`);