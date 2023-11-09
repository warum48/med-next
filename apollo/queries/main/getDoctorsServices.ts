import { gql } from "../../../__generated__/gql";

export const GET_DOCTORS_SERVICES = gql(`
query getDoctorsServices($filteringAttrs: DoctorServiceInput, $orderingAttrs: DoctorServiceInput, $skip: Int, $limit: Int, $descSorting: Boolean){
    getDoctorsServices(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit, descSorting: $descSorting){
        data{
            id
            doctorId
            serviceId
            isActive
            doctor{
                id
                clientDoctorId
                medicalCenterId
                medicalDepartmentId
                fio
                description
                photo
                isActive
                
               
            }
            service{
                id
                clientServiceId
                serviceDirectionId
                serviceTypeId
                name
                description
                isActive
                minimalAge
                maximalAge
                priceId
                
                price{
                    id
                    clientPriceId
                    serviceId
                    medicalCenterId
                    medicalDepartmentId
                    price
                    
                }
            }
        }
        statusCode
        details
    }
}
`)