//import { gql } from "../../../__generated__/gql";

import { gql } from "@apollo/client";

export const GET_DOCTORS = gql(`
query getDoctors($filteringAttrs: DoctorInput, $orderingAttrs: DoctorInput, $skip: Int, $limit: Int, $descSorting: Boolean){
    getDoctors(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit, descSorting: $descSorting){
        data{
            id
            clientId
            firstName
            lastName
            patronymic
            birthDate
            photo
            doctorCategoryId
            privatePhone
            workPhone
            email
            commonExperience
            isActive
            doctorCategory{
                id
                clientId
                name
                description
                isActive
            }
        }
        statusCode
        details
    }
}
`)