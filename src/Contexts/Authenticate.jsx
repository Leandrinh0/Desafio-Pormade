import { createContext, useEffect, useState } from "react";
import api from "../http/api";
import { useNavigate } from "react-router-dom";

export const AuthenticateContext = createContext()

export function AuthenticateContextProvider({children}) {

    const [user, setUser] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        const user = getUserSessionStorage()

        if(user){
            setUser(user)
        }
    },[])



    const authenticate = async (inputValue) => {

        try {
           const request = await api.get(`pessoas?cpf=${inputValue}`)
            setUserSessionStorage(request.data.person)
            navigate('/home/1')

        } catch (error) {
            return null
        }
    }

    const setUserSessionStorage = (user) => {
        sessionStorage.setItem('u', JSON.stringify(user))
    }

    const getUserSessionStorage = () => {
        const json = sessionStorage.getItem('u')

        if (!json) {
            return null;
        }
        const user = JSON.parse(json)
        return user ?? null;
    }

    const logOut = () => {
        sessionStorage.removeItem('u')
        navigate('/login')
    }

    


    return (
        <AuthenticateContext.Provider value={{authenticate, user, setUser, setUserSessionStorage, getUserSessionStorage, logOut}}>
            {children}
        </AuthenticateContext.Provider>
    )
}