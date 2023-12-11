import { createContext, useEffect, useState } from "react";



export const ItensCartContext = createContext()

export function ItensCartProvider({children}) {

    const [itensCart, setItensCart] = useState([])
    const [pedidos, setPedidos] = useState([])
    const [historicItens, setHistoricItens] = useState([])


    const addItem = (name, price, description, userCpf, id) => {
        const itens = {
            name: name,
            description: description,
            value: price,
            cpfUser: userCpf,
            id: id
        }
        
        setItensCart([...itensCart, itens])
    }


    return (
        <ItensCartContext.Provider value={{addItem, itensCart, setItensCart, pedidos, setPedidos, historicItens, setHistoricItens}}>
            {children}
        </ItensCartContext.Provider>
    )

}