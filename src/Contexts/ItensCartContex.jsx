import { createContext, useEffect, useState } from "react";



export const ItensCartContext = createContext()

export function ItensCartProvider({children}) {

    const [itensCart, setItensCart] = useState([])
    const [itensOnLocalStorage, setItensOnLocalStorage] = useState([])

    useEffect(() => {
        const itens = getLocalStorageItens()
        setItensOnLocalStorage(itens)
    },[])

    const addItem = (name, price, description, userCpf) => {
        const itens = {
            name: name,
            description: description,
            value: price,
            cpfUser: userCpf
        }

        setItensCart([...itensCart, itens])
        addToLocalStorage()
    }

    const addToLocalStorage = () => {
        localStorage.setItem('cart', [...itensCart])
    }

    const getLocalStorageItens = () => {
        const itens = localStorage.getItem('cart')
        return itens;
    }




    return (
        <ItensCartContext.Provider value={{addItem, itensCart, setItensCart, addToLocalStorage, itensOnLocalStorage}}>
            {children}
        </ItensCartContext.Provider>
    )

}