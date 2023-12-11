import { createContext, useEffect, useState } from "react";
import api from "../http/api";
import { useNavigate } from "react-router-dom";

export const AuthenticateContext = createContext()

export function AuthenticateContextProvider({children}) {

    const [user, setUser] = useState()
    const [saveData, setSaveData] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
            const user = getUserSessionStorage()
            if(user){
                setUser(user)
            }
            const user2 = getUserLocalStorage()
            if(user2){
                setUser(user2)
            }

    },[])



    const authenticate = async (inputValue) => {
    try {
        const request = await api.get(`pessoas?cpf=${inputValue}`)
        if (!saveData) {
            setUserSessionStorage(request.data.person)
        }
        else {
            setUserLocalStorage(request.data.person)
        }
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

    const setUserLocalStorage = (user) => {
        localStorage.setItem('u', JSON.stringify(user))
    }

    const getUserLocalStorage = () => {
        const json = localStorage.getItem('u')
        if (!json) {
            return null;
        }
        const user = JSON.parse(json)
        return user ?? null;
    }

    const logOut = () => {
        sessionStorage.removeItem('u')
        localStorage.removeItem('u')
        navigate('/login')
    }

    


    return (
        <AuthenticateContext.Provider value={{authenticate, user, setUser, setUserSessionStorage, getUserSessionStorage, logOut, saveData, setSaveData, getUserLocalStorage, setUserLocalStorage}}>
            {children}
        </AuthenticateContext.Provider>
    )
}