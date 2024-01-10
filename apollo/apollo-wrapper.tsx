"use client";

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  useReactiveVar,
} from "@apollo/client";
import {
    ApolloNextAppProvider,
 // ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
  
} from "@apollo/experimental-nextjs-app-support/ssr";
import { createContext } from "react";
import { useCookies } from "react-cookie";
import { tokenVar } from "./state/token";
//-------
//import { useCookies } from "react-cookie";


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
  const tokenVar_re = useReactiveVar(tokenVar)

  function makeClient() {
    const [cookiesToken, setCookieToken] = useCookies(["mednekot"]);
  
    const httpLink = new HttpLink({
        // https://studio.apollographql.com/public/spacex-l4uc6p/
        uri: "https://main--spacex-l4uc6p.apollographos.net/graphql",
    });
  
    const authLink = new HttpLink({
      uri: 'https://med.shop-survey.ru/accounts/graphql',//'/graphql',
      fetchOptions: {
        mode: "cors", // no-cors, *cors, same-origin //'*cors'//
      },
      headers: {
        Authorization: "Bearer " + tokenVar_re,//cookiesToken.mednekot, //token,
        "Access-Control-Allow-Origin": "*",
      }, 
    });
    
    const dbLink = new HttpLink({
      uri: 'https://med.shop-survey.ru/main/graphql',//'website/graphql',
      fetchOptions: {
        mode: "cors", // no-cors, *cors, same-origin //'*cors'//
      },
      headers: {
        Authorization: "Bearer " + tokenVar_re,//cookiesToken.mednekot, //token,
        "Access-Control-Allow-Origin": "*",
      }, 
    });
  
    let jointLink = ApolloLink.split(
      operation => operation.getContext().clientName === "main",
      dbLink, // <= apollo will send to this if clientName is "dbLink"
      authLink // <= otherwise will send to this
    )
  
    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link:
        typeof window === "undefined"
          ? ApolloLink.from([
              new SSRMultipartLink({
                stripDefer: true,
              }),
              jointLink
              //httpLink,
            ])
          : jointLink//httpLink,
    });
  }

  const value = {
    setCookieToken
  };
  
  
  
//  export function ApolloWrapper({ children }: React.PropsWithChildren) {

      return (
        <ApolloSettingsContext.Provider value={value}>
        <ApolloNextAppProvider makeClient={makeClient}>
          {children}
        </ApolloNextAppProvider>
        </ApolloSettingsContext.Provider>
      );
    }

/*
function makeClient() {
  const [cookiesToken, setCookieToken] = useCookies(["mednekot"]);

  const httpLink = new HttpLink({
      // https://studio.apollographql.com/public/spacex-l4uc6p/
      uri: "https://main--spacex-l4uc6p.apollographos.net/graphql",
  });

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

  let jointLink = ApolloLink.split(
    operation => operation.getContext().clientName === "main",
    dbLink, // <= apollo will send to this if clientName is "dbLink"
    authLink // <= otherwise will send to this
  )

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            jointLink
            //httpLink,
          ])
        : jointLink//httpLink,
  });
}



export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
      <ApolloNextAppProvider makeClient={makeClient}>
        {children}
      </ApolloNextAppProvider>
    );
  }

  */

 