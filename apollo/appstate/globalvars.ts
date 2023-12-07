import { ReactiveVar, makeVar } from "@apollo/client";
import { PatientRegistration } from "../../__generated__/graphql";
import { FlashCallCode } from "../../__generated__/graphql";
import { TAppointmentType } from "@/types/types";


export const GlobalFields = {
  name: {
    read() {
      return appointmentTypeVar();
    },
  },

 
  
};

//---INIT VALUES---
export const appointmentTypeInitValue = 'doctor';


//---VARS---
/**
 * график на главной
 */
export const appointmentTypeVar: ReactiveVar<TAppointmentType> = makeVar<TAppointmentType>(
    appointmentTypeInitValue
);
