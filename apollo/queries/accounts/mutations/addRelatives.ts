import { gql } from "../../../../__generated__/gql";

export const ADD_RELATIVES = gql(`


mutation addRelatives($relationshipDegreeId: Int!, $patient: PatientRegistration!){
    addRelatives(relationshipDegreeId: $relationshipDegreeId, patient: $patient){
        data{
            token
        }
        recordsCount
        pagesCount
        statusCode
        details
    }
}`)