'use client'
import { useState, useEffect } from 'react';
import { 
  Button,
   Switch } from '@mantine/core';
import { CookiesProvider, useCookies } from 'react-cookie';
import dynamic from 'next/dynamic';

//@ts-ignore
//const Button = dynamic(() => import('@mantine/core'), { ssr: false })
//import { Props } from 'next/script';
type TProps = {
  suppressHydrationWarning: boolean;
  children?: React.ReactNode
}

export function DemoLogIn( {suppressHydrationWarning = true}:TProps):React.ReactElement {
  
  const [cookieToken, setCookieToken, removeCookieToken] = useCookies(['mednekot']);
  console.log('---cookieToken', cookieToken.mednekot);
 // const [checked, setChecked] = useState(cookieToken ? true : false);//false);
  // const [cookies, setCookie] = useCookies(["mednekot"]);

const switchLogIn = () => {
    console.log('cookieToken', cookieToken.mednekot);
    if (!cookieToken.mednekot) {
      var d = new Date();
      d.setFullYear(d.getFullYear() + 100);
      setCookieToken('mednekot', '666', { path: '/', expires: d });
      // setCookieToken("mednekot", data.login?.token, { path: "/", expires: d });
    } else {
      removeCookieToken('mednekot', { path: '/' });
    }
  }

  /*
  useEffect(()=>{
 console.log('refresh')
 setCookieToken(cookieToken.mednekot,  { path: '/', expires: new Date().getFullYear() + 100 });
  },[cookieToken])
  */

  return <Button suppressHydrationWarning = {true}
  size="compact-xs"
  //!!compact 
 // variant="gradient" gradient={{ from: '#038d92', to: 'lime', deg: 105 }}
 // sx={{marginLeft:'auto'}}
  onClick={switchLogIn}>{cookieToken.mednekot ? "Выход" : "Вход"}</Button> ;
}

//https://stackoverflow.com/questions/66374123/warning-text-content-did-not-match-server-im-out-client-im-in-div