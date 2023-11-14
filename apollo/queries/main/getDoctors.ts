import { gql } from "../../../__generated__/gql";

export const GET_DOCTORS = gql(`
query getDoctors($filteringAttrs: DoctorInput, $orderingAttrs: DoctorInput, $skip: Int, $limit: Int){
    getDoctors(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit){
        data{
            id
            clientDoctorId
            medicalCenterId
            medicalDepartmentId
            fio
            description
            photo
            isActive
            medicalCenter{
                id
                clientMcenterId
                cityId
                name
                address
                longitude
                latitude
                description
                inn
                bankBic
                settlementAccount
                correspondentAccount
                kpp
                isActive
                logo
                websiteUrl
                phoneFax
                dmsPhone
                workTime
                collectionTestsTime
                vaccinationTime
                city{
                    id
                    clientCityId
                    name
                    isActive
                }
            }
            medicalDepartment{
                id
                clientDepartmentId
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