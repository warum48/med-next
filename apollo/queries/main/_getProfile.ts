import { gql } from '../../../__generated__/gql';

export const GET_PROFILE_FORM_DATA = gql(`
query getCentersAndCities($filteringAttrs_city: CityInput, $orderingAttrs_city: CityInput, $skip_city: Int, $limit_city: Int, $descSorting_city: Boolean, $filteringAttrs_mcenter: MedicalCenterInput, $orderingAttrs_mcenter: MedicalCenterInput, $skip_mcenter: Int, $limit_mcenter: Int, $descSorting_mcenter: Boolean){
  getCities(filteringAttrs: $filteringAttrs_city, orderingAttrs: $orderingAttrs_city, skip: $skip_city, limit: $limit_city, descSorting: $descSorting_city){
      data{
          id
          name
      }
      statusCode
      details
  }
  
    getMedicalCenters(filteringAttrs: $filteringAttrs_mcenter, orderingAttrs: $orderingAttrs_mcenter, skip: $skip_mcenter, limit: $limit_mcenter, descSorting: $descSorting_mcenter){
        data{
            id
            name
            address
        }
        statusCode
        details
    }
  }

`);
