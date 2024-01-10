import { UserInput } from "@/__generated__/graphql";
import { ReactiveVar, makeVar } from "@apollo/client";


export const updatedUserFieldsInitValue:UserInput = {
    
}

export const updatedUserFields: ReactiveVar<UserInput> = makeVar<UserInput>(
    updatedUserFieldsInitValue
  );