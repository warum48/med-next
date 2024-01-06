import { gql } from "../../../__generated__/gql";

export const GET_USER_RELATIVES = gql(`
query getUserRelatives($filteringAttrs: UserRelativeInput, $orderingAttrs: UserRelativeInput, $skip: Int, $limit: Int, $descSorting: Boolean){
    getUserRelatives(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit, descSorting: $descSorting){
        data {
            relationshipDegreeId
            id
            user {
              id
              phoneNumber
              firstName
            }
            relative {
              firstName
              lastName
              patronymic
              phoneNumber
              birthDate
            }
            relationshipDegree{
                      id
                      clientId
                      name
                      description
                      isActive
                  }
          }
    }
}
`)

/*

query MyQuery {
  getUserRelatives {
    data {
      relationshipDegreeId
      id
      user {
        id
        phoneNumber
        firstName
      }
      relative {
        firstName
        phoneNumber
        birthDate
      }
    }
  }
}

*/