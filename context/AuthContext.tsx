import React, { createContext, useState, useContext, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'; 
//import Cookies from 'js-cookie'
//import api from './api';
//import jwt from "jsonwebtoken";
//import { createContext, useContext, useState } from 'react'

//const JWT_KEY = process.env.JWT_SECRET_KEY;
const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {

    const [user, setUser] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter();
    const pathname = usePathname();


    React.useEffect(() => {
        console.log('USER', pathname);
        // checks if the user is authenticated
        !user
        ? router.push("/")
        : console.log('user');
        //router.push("/dashboard");
      }, [pathname]);
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


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user
        //, user, login, loading: isLoading, logout 
        }}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext)

//auth https://clerk.com/blog/next13-api-routes-2?utm_source=www.google.com&utm_medium=referral&utm_campaign=none
