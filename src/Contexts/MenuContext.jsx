import { createContext, useState } from "react";

export const MenuContext = createContext()

export function MenuContextProvider({children}) {

    //Menu Lateral
    const [show, setShow] = useState(false)

    //Modal cadastrar usuário
    const [newUser, setNewUser] = useState(false)

    //Modal cadastrar produto
    const [newProduct, setNewProduct] = useState(false)

    //Modal remover item do carrinho
    const [remove, setRemove] = useState(false)

    //Modal deletar produto
    const [deletar, setDeletar] = useState(false)

    //Modal histórico de pedidos
    const [historic, setHistoric] = useState(false)

    //Estrela Favoritos
    const [checkboxSelecionado, setCheckboxSelecionado] = useState(false)

    return (

        <MenuContext.Provider value={{show, setShow, newUser, setNewUser, newProduct, setNewProduct, remove, setRemove, deletar, setDeletar, historic, setHistoric,
        checkboxSelecionado, setCheckboxSelecionado}}>
            {children}
        </MenuContext.Provider>
    )
}