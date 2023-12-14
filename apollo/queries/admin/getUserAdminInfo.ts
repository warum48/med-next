import { gql } from "../../../__generated__/gql";

export const GET_USER_ADMIN_INFO = gql(`
query getUserAdminInfo($filteringAttrs: UserAdminInput, $orderingAttrs: UserAdminInput, $skip: Int, $limit: Int, $descSorting: Boolean){
    getUserAdminInfo(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit, descSorting: $descSorting){
        data{
            id
            clientId
            userId
            registrationVisibleFields
            registrationRequiredFields
        }
        statusCode
        details
    }
}
`)