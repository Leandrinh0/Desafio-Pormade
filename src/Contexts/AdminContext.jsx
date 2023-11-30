import { createContext, useState } from "react";

export const AdminContext = createContext()

export function AdminContextProvider({children}) {

    const [show, setShow] = useState(true)

    return (

        <AdminContext.Provider value={{show, setShow}}>
            {children}
        </AdminContext.Provider>
    )
}