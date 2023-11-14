import { gql } from "../../../__generated__/gql";

export const GET_SERVICES_DIRECTIONS = gql(`
query getServicesDirections($filteringAttrs: ServiceDirectionInput, $orderingAttrs: ServiceDirectionInput, $skip: Int, $limit: Int){
  getServicesDirections(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit){
      data{
          id
          clientSdirectionId
          name
          description
          isActive
      }
      statusCode
      details
  }
}
`);