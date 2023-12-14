'use client'
import React, { createContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink
} from "@apollo/client";
//import { ApolloLink } from "apollo-link";
import { useCookies } from "react-cookie";


/*
const path = 
process.env.REACT_APP_PATH_TO_SERVER || 
"https://dev.shop-survey.ru:8002/";//"http://195.19.97.196:8002/"

let apolloServer = path + "graphql"; //http://195.19.97.196:8002/ //process.env.REACT_APP_PATH_TO_SERVER 
*/

//----------types------------
interface IContext {
  setCookieToken:any
}

export const ApolloSettingsContext = createContext({} as IContext);

type Props = {
  children?: React.ReactNode;
};

//--------------component-----------
export const ApolloSettingsProvider = ({ children }: Props) => {
  const [cookiesToken, setCookieToken] = useCookies(["mednekot"]);

  //!!const { pathtoserver } = React.useContext(GlobalContext);
  // ^ this causes filters refetching (and, highly likely, may be not just filters)
  //const { pathtoserver } =  React.useMemo(() => React.useContext(GlobalContext), [GlobalContext]); //свят свят свят, слава тебе господи это не сработало
  //let apolloServer = React.useMemo(() => pathtoserver + "graphql", [pathtoserver]);
/*  let pathtoserver = window.location.origin + "/";
  try {

    if (import.meta.env.VITE_PATH_TO_SERVER) {
      pathtoserver = import.meta.env.VITE_PATH_TO_SERVER;
    }

    //https://stackoverflow.com/questions/72128718/test-suite-failed-to-run-import-meta-env-vite
  } catch (e) {
    console.log(e);
  }
  // let apolloServer = "https://dev.shop-survey.ru/"  + "graphql";
  let apolloServer = pathtoserver + "/graphql";
*/

  const authLink = new HttpLink({
    uri: 'https://med.shop-survey.ru/accounts/graphql',//'/graphql',
    fetchOptions: {
      mode: "cors", // no-cors, *cors, same-origin //'*cors'//
    },
    headers: {
      Authorization: "Bearer " + cookiesToken.mednekot, //token,
      "Access-Control-Allow-Origin": "*",
    }, 
  });
  
  const dbLink = new HttpLink({
    uri: 'https://med.shop-survey.ru/main/graphql',//'website/graphql',
    fetchOptions: {
      mode: "cors", // no-cors, *cors, same-origin //'*cors'//
    },
    headers: {
      Authorization: "Bearer " + cookiesToken.mednekot, //token,
      "Access-Control-Allow-Origin": "*",
    }, 
  });

  const adminLink = new HttpLink({
    uri: 'https://med.shop-survey.ru/admin/graphql',//'/graphql',
    fetchOptions: {
      mode: "cors", // no-cors, *cors, same-origin //'*cors'//
    },
    headers: {
      Authorization: "Bearer " + cookiesToken.mednekot, //token,
      "Access-Control-Allow-Origin": "*",
    }, 
  });

  /*
  !! 2links:
  let jointLink = ApolloLink.split(
    operation => operation.getContext().clientName === "main",
    dbLink, // <= apollo will send to this if clientName is "dbLink"
    authLink // <= otherwise will send to this
  )
  */

  /*
  let jointLink = 
  //ApolloLink.split(
  //  operation => operation.getContext().clientName === "main",
  //  dbLink, // <= apollo will send to this if clientName is "dbLink"
   ApolloLink.split(
    operation => operation.getContext().clientName === "admin",
    adminLink, // <= apollo will send to this if clientName is "dbLink"
    authLink // <= otherwise will send to this
  )
 // )
 */

 let jointLink = 
  
   ApolloLink.split(
    operation => operation.getContext().clientName === "admin",
    adminLink, // <= apollo will send to this if clientName is "dbLink"
    //dbLink
    //authLink // <= otherwise will send to this
    ApolloLink.split(
      operation => operation.getContext().clientName === "main",
      dbLink, // <= apollo will send to this if clientName is "dbLink"
      authLink
  )
  )

  const client = new ApolloClient({
    link: jointLink,// as any,
    cache: new InMemoryCache(),
  });

  //!!!----------
  /* link: new HttpLink({
      uri: apolloServer,
      fetchOptions: {
        mode: "cors", // no-cors, *cors, same-origin //'*cors'//
      },
      headers: {
        Authorization: "Bearer " + cookiesToken.mednekot, //token,
        "Access-Control-Allow-Origin": "*",
      }, 
    }),*/

  const value = {
    setCookieToken
  };

  return (
    <ApolloProvider client={client}>
      <ApolloSettingsContext.Provider value={value}>
        {children}
      </ApolloSettingsContext.Provider>
    </ApolloProvider>
  );
};


//https://stackoverflow.com/questions/69629051/using-multiple-endpoints-in-apollo-client
//https://www.apollographql.com/docs/react/api/link/introduction/#context

// more than 2
//https://stackoverflow.com/questions/67077935/apolloclient-with-more-than-2-apollolinks
/*
const client = new ApolloClient({
link: ApolloLink.split(
(o) => o.getContext().clientName === 'mongo',
secondLink,
ApolloLink.split((o) => o.getContext().clientName === 'neo',
  thirdLink,
  firstLink)
), // by default -> postgre)
cache: new InMemoryCache(),
fecthOptions: {
mode: 'no-cors',
},
shouldBatch: true,
});
*/
