/*import { gql } from "../../../__generated__/gql";

export const GET_MEDICAL_CENTERS = gql(`
query getMedicalCenters($filteringAttrs: MedicalCenterInput, $orderingAttrs: MedicalCenterInput, $skip: Int, $limit: Int){
  getMedicalCenters(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit){
      data{
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
      statusCode
      details
  }
}
  `)
*/

 // import { DocumentNode, gql } from "@apollo/client";
 
//import { gql } from "../../../__generated__/gql";
import { gql } from "@/__generated__/gql";
//import { gql } from "@/__generated__";
import { MedicalCenterResult } from "@/__generated__/graphql";
import { graphql } from "graphql";


//gql(`
export const GET_MEDICAL_CENTERS  =  gql(`
query getMedicalCenters($filteringAttrs: MedicalCenterInput, $orderingAttrs: MedicalCenterInput, $skip: Int, $limit: Int, $descSorting: Boolean){
  getMedicalCenters(filteringAttrs: $filteringAttrs, orderingAttrs: $orderingAttrs, skip: $skip, limit: $limit, descSorting: $descSorting){
      data{
          id
          clientId
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
              clientId
              name
              isActive
          }
      }
      statusCode
      details
  }
}
  `)