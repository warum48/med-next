import { gql } from "../../../__generated__/gql";

export const GET_DOCTORS_MSPECIALITIES = gql(`
query getDoctorsMspecialities($filteringAttrs: DoctorMspecialityInput, $orderingAttrs: DoctorMspecialityInput, $skip: Int, $limit: Int, $descSorting: Boolean){
    getDoctorsMspecialities(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit, descSorting: $descSorting){
        data{
            id
            doctorId
            mspecialityId
            isActive
            doctor{
                id
                clientDoctorId
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
                    clientDcategoryId
                    name
                    description
                    isActive
                }
            }
            mspeciality{
                id
                clientDoctorSpecialityId
                viewName
                searchName
                viewDescription
                searchDescription
                isActive
            }
        }
        statusCode
        details
    }
}
`)