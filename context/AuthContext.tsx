import React, { createContext, useState, useContext, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { RoutesTypes } from '@/global/ROUTES';
import { useCookies } from 'react-cookie';
import { useLazyQuery, useQuery } from '@apollo/client';
import { APOLLO_LINKS_CONTEXT } from '@/apollo/context';
import { GUEST_LOGIN } from '@/apollo/queries/accounts/guestLogin';
//import Cookies from 'js-cookie'
//import api from './api';
//import jwt from "jsonwebtoken";
//import { createContext, useContext, useState } from 'react'

//const JWT_KEY = process.env.JWT_SECRET_KEY;
interface IContext {
  isAuthenticated: boolean;
  //, user, login, loading: isLoading, logout
  checkAuth: () => void;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  switchLogIn: () => void;
}

export const AuthContext = createContext({} as IContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(false);
  const [cookiesToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
  const [isLoading, setIsLoading] = useState(true); // Loading is working bad with 404 routes
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!cookiesToken.mednekot);
  console.log('cookiesToken', cookiesToken.mednekot);
  console.log('!!cookiesToken.mednekot', !!cookiesToken.mednekot);
  console.log('isLoggedIn-init', isLoggedIn);

  function initCheck() {}

  //const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
  //const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);
  //console.log('---cookieToken', cookieToken.mednekot);
  // const [checked, setChecked] = useState(cookieToken ? true : false);//false);
  // const [cookies, setCookie] = useCookies(["mednekot"]);

  const switchLogIn = () => {
    console.log('cookieToken', cookiesToken.mednekot);
    if (!cookiesToken.mednekot) {
      demoLogin();
    } else {
      removeCookieToken('mednekot', { path: '/' });
      setIsLoggedIn(false);
    }
  };
  //const {setIsLoggedIn} = useContext(AuthContext);

  function checkAuth() {
    console.log('CHECK AUTH', )
    //if (!user) {
    if (!cookiesToken.mednekot) {
      console.log('NET USERA');
      // router.push('/');
      // setIsLoading(false);
      router.push(RoutesTypes.Home);
      setIsLoggedIn(false);
    } else {
      console.log('-=-=-=-=user');
      setIsLoggedIn(true);
      if (pathname == RoutesTypes.Auth) {
        //!!!router.push(RoutesTypes.Home);
        console.log('redirect to auth');
      }
    }
    // window.scrollTo(0, 0); //TODO remove it from here
  }

  const [
    getGuestToken,
    {
      data: data_reldergees,
      loading: loading_reldergees,
      error: error_reldergees,
      refetch: refetch_reldergees,
      networkStatus: networkStatus_reldergees,
    },
  ] =
    //   isDemo
    // ? useFetch<GetCentersAndCitiesQuery>('/mock/_getProfile.json')
    // :
    useLazyQuery(GUEST_LOGIN, {
      context: { clientName: APOLLO_LINKS_CONTEXT.accounts },
    });

  function demoLogin() {
    var d = new Date();
    d.setFullYear(d.getFullYear() + 100);
    setCookieToken(
      'mednekot',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDM3NTEyNzEsInN1YiI6eyJsb2dpbiI6Ijc5MjUxMjM0NTY3IiwicGFzc3dvcmQiOiIkMmIkMTIkUzJGcjV0c0Rvc3NiSnpwQWxOUFE2T1RnUE1xRmNCbWdPd2E2R1h6STBWSlJUa3ZxSW4zMk8ifX0.b3h6Bvh34jWt7JLCTV9XAVbXR__IwuTFASEqcoTmURw',
      { path: '/', expires: d }
    );
    // setCookieToken("mednekot", data.login?.token, { path: "/", expires: d });
    setIsLoggedIn(true);
  }

  React.useEffect(() => {
    console.log('pathname', pathname);
    checkAuth();
    console.log('cookiesToken.mednekot', cookiesToken.mednekot);
    // checks if the user is authenticated

    //router.push("/dashboard");
  }, [pathname, cookiesToken.mednekot]);

  React.useEffect(() => {
    setIsLoggedIn(!!cookiesToken.mednekot);
  }, [cookiesToken.mednekot]);
  /*
    useEffect(() => {
        async function fetchUserFromCookie() {
            const token = Cookies.get('token')
            if (token) {
                api.defaults.headers.Authorization = `Bearer ${token}`
                const { data: user } = await api.get('api/users/me')
                if (user) setUser(user);
            }
            setIsLoading(false)
        }
        fetchUserFromCookie()
    }, [])

    const login = async (username, password) => {
        const { data: {token } } = await api.post('api/auth/login', { username, password })
        console.log("TOKEN ", token)
        if (token) {
            Cookies.set('token', token, { expires: 60 })
            api.defaults.headers.Authorization = `Bearer ${token}`
            const { data: user } = await api.get('api/users/me')
            setUser(user)
        }
    }

    const logout = () => {
        Cookies.remove('token')
        setUser(null)
        delete api.defaults.headers.Authorization
        window.location.pathname = '/login'
    }
    */
  /* if (isLoading) {
    return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        //, user, login, loading: isLoading, logout
      }}
    ><>'loading'</>;
    </AuthContext.Provider>
    )
  } */

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!cookiesToken, //!!user,
        //, user, login, loading: isLoading, logout
        checkAuth: checkAuth,
        isLoggedIn,
        setIsLoggedIn,
        switchLogIn,
      }}
    >
      {!isLoading ? <>loading</> : children}
    </AuthContext.Provider>
  );
};

//export const useAuth = () => useContext(AuthContext);

//auth https://clerk.com/blog/next13-api-routes-2?utm_source=www.google.com&utm_medium=referral&utm_campaign=none
/*
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userInfo = GET_USER_FROM_LS;
    if (router.pathname !== "/login" && !userInfo) {
     router.push("/login");
    } else {
     setIsLoading(false)
    }
  }, []);

  if(isLoading) {
   return <YourLoadingComponent />
  }

  return YOUR_DEFAULT_RETURN;
}
*/
//https://stackoverflow.com/questions/72081729/how-to-avoid-unlogged-users-to-see-pages-for-logged-in-users-next-js-client-sid
