import { ReactiveVar, makeVar } from "@apollo/client";
import { PatientRegistration } from "../../__generated__/graphql";
import { FlashCallCode } from "../../__generated__/graphql";


export const addRelativesFields = {

  patientRelative: {
    read() {
      return patientRelativeVar();
    },
  }
 // PatientRegistration
  
};

//---INIT VALUES---
export const patientRelativeInitValue = {
 // additionalPhoneNumber: undefined,//'', //optional
  birthDate: '',
  email: '',
  firstName: '',
  gender: null,//'м',//undefined, //optional
  lastName: '',
//  password: '',
  patronymic: undefined, //optional
  phoneNumber: '',
  relativeTypeId: null
}


//---VARS---

export const patientRelativeVar: ReactiveVar<PatientRegistration> = makeVar<PatientRegistration>(
  patientRelativeInitValue
);


