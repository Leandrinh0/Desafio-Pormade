import { createContext, useState } from "react";

export const MenuContext = createContext()

export function MenuContextProvider({children}) {

    const [show, setShow] = useState(false)

    const [newUser, setNewUser] = useState(false)

    const [newProduct, setNewProduct] = useState(true)

    const [remove, setRemove] = useState(false)

    const [deletar, setDeletar] = useState(true)

    return (

        <MenuContext.Provider value={{show, setShow, newUser, setNewUser, newProduct, setNewProduct, remove, setRemove, deletar, setDeletar}}>
            {children}
        </MenuContext.Provider>
    )
}