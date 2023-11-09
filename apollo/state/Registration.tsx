import { ReactiveVar, makeVar } from "@apollo/client";
import { PatientRegistration } from "../../__generated__/graphql";
import { FlashCallCode } from "../../__generated__/graphql";


export const RegistrationFields = {
  name: {
    read() {
      return nameVar();
    },
  },

  phoneNumber: {
    read() {
      return nameVar();
    },
  },

  patientRegistration: {
    read() {
      return patientRegistrationVar();
    },
  }
 // PatientRegistration
  
};

//---INIT VALUES---
export const nameInitValue = 'default name';
export const phoneNumberInitValue = '';
export const confirmationCodeInitValue = '';
export const patientRegistrationInitValue = {
  additionalPhoneNumber: undefined,//'', //optional
  birthDate: '',
  email: '',
  firstName: '',
  gender: undefined, //optional
  lastName: '',
  password: '',
  patronymic: undefined, //optional
  phoneNumber: '',
}
export const flashCallCodeInitValue:FlashCallCode = {
  phoneNumber: '',
  code:''
}
  //getYesterday()); //"2222-09-01";

//---VARS---
/**
 * график на главной
 */
export const nameVar: ReactiveVar<string> = makeVar<string>(
  nameInitValue
);
export const phoneNumberVar: ReactiveVar<string> = makeVar<string>(
  phoneNumberInitValue
);
export const confirmationCodeVar: ReactiveVar<string> = makeVar<string>(
  confirmationCodeInitValue
);
export const patientRegistrationVar: ReactiveVar<PatientRegistration> = makeVar<PatientRegistration>(
  patientRegistrationInitValue
);

export const flashCallCodeVar: ReactiveVar<FlashCallCode> = makeVar<FlashCallCode>(
  flashCallCodeInitValue
);

