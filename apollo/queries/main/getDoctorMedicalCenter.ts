import { gql } from "@apollo/client";

export const GET_DOCTOR_MEDICAL_CENTER = gql(`
query getDoctorMedicalCenter($filteringAttrs: DoctorMedicalCenterInput, $orderingAttrs: DoctorMedicalCenterInput, $skip: Int, $limit: Int, $descSorting: Boolean){
    getDoctorMedicalCenter(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit, descSorting: $descSorting){
        data{
            id
            clientId
            doctorId
            medicalSpecialityId
            medicalCenterId
            medicalPositionId
            staffTypeId
            showInLk
            minimalAge
            maximalAge
            isActive
            doctor{
                id
                clientId
                firstName
                lastName
                patronymic
                birthDate
                photo
                doctorCategoryId
               

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
            medicalSpeciality{
                id
                clientId
                viewName
                searchName
                viewDescription
                searchDescription
                isActive
            }
            medicalCenter{
                id
                clientId
                cityId
                name
                address
                longitude
                latitude
                description
                
                workTime
                collectionTestsTime
                vaccinationTime
                city{
                    id
                    clientId
                    name
                    isActive
                }
            }
            medicalPosition{
                id
                clientId
                viewName
                searchName
                viewDescription
                searchDescription
                isActive
            }
            staffType{
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
}`)