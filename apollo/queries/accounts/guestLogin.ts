import { gql } from "../../../__generated__/gql";

export const GUEST_LOGIN = gql(`
query guestLogin{
    guestLogin{
        data{
            token
        }
        recordsCount
        pagesCount
        statusCode
        details
    }
}
`)