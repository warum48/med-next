import { gql } from "../../../__generated__/gql";

export const GET_RELATIONSHIP_DEGREES = gql(`

query getRelationshipDegrees($filteringAttrs: RelationshipDegreesInput, $orderingAttrs: RelationshipDegreesInput, $skip: Int, $limit: Int, $descSorting: Boolean){
    getRelationshipDegrees(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit, descSorting: $descSorting){
        data{
            id
            clientId
            name
            description
            isActive
        }
        recordsCount
        pagesCount
        statusCode
        details
    }
}
`)