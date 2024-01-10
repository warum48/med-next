import { ReactiveVar, makeVar } from "@apollo/client";



/*
export const GlobalFields = {
  name: {
    read() {
      return appointmentTypeVar();
    },
  },
};
*/

//---INIT VALUES---
export const tokenInitValue = '';

//---VARS---
/**
 * график на главной
 */
export const tokenVar: ReactiveVar<string> = makeVar<string>(
    tokenInitValue
);

