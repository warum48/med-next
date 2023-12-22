import { gql } from "../../../__generated__/gql";

export const GET_MEDICAL_SPECIALITIES = gql(`
query getMedicalSpecialities($filteringAttrs: MedicalSpecialityInput, $orderingAttrs: MedicalSpecialityInput, $skip: Int, $limit: Int, $descSorting: Boolean){
    getMedicalSpecialities(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit, descSorting: $descSorting){
        data{
            id
            clientId
            viewName
            searchName
            viewDescription
            searchDescription
            isActive
        }
        statusCode
        details
    }
}`
)