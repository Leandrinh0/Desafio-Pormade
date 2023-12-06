import { useContext, useEffect } from "react";
import { AuthenticateContext } from "../../Contexts/Authenticate";
import { Link } from "react-router-dom";

export default function ProtectedComponent ({children}) {

    const {user} = useContext(AuthenticateContext)

    if (user) {
       return children
    }


    return (
        <div className='w-full h-96 flex justify-center items-center flex-col'>
            <p>Você não tem acesso para acessar essa página</p>
            <Link to='/login' className='text-white_pormade bg-light_green rounded-xl w-2/4 h-9 mt-2 text-2xl flex items-start justify-center tablet:w-2/3 cellphone:w-3/4'>Voltar para home</Link>
        </div>
    )
}