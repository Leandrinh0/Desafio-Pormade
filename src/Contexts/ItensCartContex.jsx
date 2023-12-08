import { createContext, useEffect, useState } from "react";



export const ItensCartContext = createContext()

export function ItensCartProvider({children}) {

    const [itensCart, setItensCart] = useState([])
    const [RefreshItens, setRefreshItens] = useState([])

    const fetchItens = () => {
        var getItens = localStorage.getItem('cart')
        const convertedItens = JSON.parse(getItens)
        return convertedItens
    }

      
    useEffect(() => {
        fetchItens()
        console.log()
    },[fetchItens()])



    const addItem = (name, price, description, userCpf) => {
        const itens = {
            name: name,
            description: description,
            value: price,
            cpfUser: userCpf
        }

        setItensCart([...itensCart, itens])
        addToLocalStorage()
        fetchItens()
    }

    const addToLocalStorage = () => {
        localStorage.setItem('cart', JSON.stringify([...itensCart]))
        fetchItens()
    }

    const getLocalStorageItens = () => {
        const itens = localStorage.getItem('cart')
        if (!itens) {
            return null;
        }
        return itens
    }

    const removeLocalStorageItem = () => {
        localStorage.removeItem('cart'),
        localStorage.setItem('cart', JSON.stringify([...itensCart]))
        fetchItens()
    }




    return (
        <ItensCartContext.Provider value={{addItem, itensCart, setItensCart, addToLocalStorage, removeLocalStorageItem, fetchItens}}>
            {children}
        </ItensCartContext.Provider>
    )

}