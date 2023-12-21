import React, { createContext, useState, useContext, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { RoutesTypes } from '@/global/ROUTES';
import { useCookies } from 'react-cookie';
//import Cookies from 'js-cookie'
//import api from './api';
//import jwt from "jsonwebtoken";
//import { createContext, useContext, useState } from 'react'

//const JWT_KEY = process.env.JWT_SECRET_KEY;
interface IContext {
    curClinic: string//number, //later change to getter
    getCurClinic: () => string,
    setCurClinic: React.Dispatch<React.SetStateAction<string>>
}

export const UserContext = createContext({} as IContext);

export const UserProvider = ({ children }: any) => {
    const [curClinic, setCurClinic] = React.useState(''); //temp while server is developing
    function getCurClinic() {
        return curClinic;
    }

    React.useEffect(() => {
        console.log('=-=curClinic', curClinic);
    }, [curClinic])

  return (
    <UserContext.Provider
      value={{
        curClinic,
        getCurClinic,
        setCurClinic
      }}
    >
      { children}
    </UserContext.Provider>
  );
};
