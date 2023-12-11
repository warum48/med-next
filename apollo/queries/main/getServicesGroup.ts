//import { gql } from "../../../__generated__/gql";

import { gql } from "@apollo/client";

export const GET_SERVICE_GROUP = gql(`
query getServiceGroup($name: String){
    getServiceGroup(name: $name){
        data{
            id
            clientId
            name
            viewName
            description
            clientServiceGroupCode
            levelSortingCode
            isActive
            xmembers{
                id
                clientId
                name
                viewName
                description
                clientServiceGroupCode
                levelSortingCode
                isActive
                xmembers{
                    id
                    clientId
                    name
                    viewName
                    description
                    clientServiceGroupCode
                    levelSortingCode
                    isActive
                    xmembers{
                        id
                        clientId
                        name
                        viewName
                        description
                        clientServiceGroupCode
                        levelSortingCode
                        isActive
                        xmembers{
                            id
                            clientId
                            name
                            viewName
                            description
                            clientServiceGroupCode
                            levelSortingCode
                            isActive
                            xmembers{
                                id
                                clientId
                                name
                                viewName
                                description
                                clientServiceGroupCode
                                levelSortingCode
                                isActive
                                xmembers{
                                    id
                                    clientId
                                    name
                                    viewName
                                    description
                                    clientServiceGroupCode
                                    levelSortingCode
                                    isActive
                                    xmembers{
                                        id
                                        clientId
                                        name
                                        viewName
                                        description
                                        clientServiceGroupCode
                                        levelSortingCode
                                        isActive
                                        
                                        path
                                    }
                                    path
                                }
                                path
                            }
                            path
                        }
                        path
                    }
                    path
                }
                path
            }
            path
        }
        statusCode
        details
    }
}
`);