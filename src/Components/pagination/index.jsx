import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate} from "react-router-dom";
import api from "../../http/api";
import { AuthenticateContext } from "../../Contexts/Authenticate";

export default function Pagination ({convertedParams, params, allItems, ItemData, setItemData, fetchData, urlNavigate, urlRequest, }) {
    const navigate = useNavigate()

    const [firstNav, setFirstNav] = useState(convertedParams)
    const [secondNav, setSecondNav] = useState(convertedParams+1)
    const [thirdNav, setThirdNav] = useState(convertedParams+2)
    const lastPage = Math.round(allItems.length/8)
    const {user} = useContext(AuthenticateContext)

    useEffect(() => {
        fetchData()
    },[])


    const nextPage = () => {
        if (parseInt(params.id) < Math.round(allItems.length/8)) {
            if(urlRequest === "produtos") {
                navigate(`/${urlNavigate}/${convertedParams+1}`)
                api.get(`/${urlRequest}/lista?pagina=${(convertedParams)}&&itens=8`)
                .then(response => setItemData(response.data.products))
                .then(setFirstNav(convertedParams+1), setSecondNav(convertedParams+2), setThirdNav(convertedParams+3))
            }
            else {
                navigate(`/${urlNavigate}/${convertedParams+1}`)
                api.post(`/${urlRequest}/lista?pagina=${(convertedParams)}&&itens=8`,{
                    cpf:user.cpf
                })
                .then(response => setItemData(response.data.persons))
                .then(setFirstNav(convertedParams+1), setSecondNav(convertedParams+2), setThirdNav(convertedParams+3))

            }
        }
    }

    const previousPage = () => {
        if (parseInt(params.id) > 1) {
            if(urlRequest === "produtos") {
                navigate(`/${urlNavigate}/${convertedParams-1}`)
                api.get(`/${urlRequest}/lista?pagina=${(convertedParams-2)}&&itens=8`)
                .then(response => setItemData(response.data.products))
                .then(setFirstNav(convertedParams-1), setSecondNav(convertedParams), setThirdNav(convertedParams+1))
            }
            else {
                navigate(`/${urlNavigate}/${convertedParams-1}`)
                api.post(`/${urlRequest}/lista?pagina=${(convertedParams-2)}&&itens=8`,{
                    cpf:user.cpf
                })
                .then(response => setItemData(response.data.persons))
                .then(setFirstNav(convertedParams-1), setSecondNav(convertedParams), setThirdNav(convertedParams+1))
            }
        }
    }
    const NavigateLastPage = () => {
        if(convertedParams !== lastPage){
            navigate(`/${urlNavigate}/${lastPage}`)
            api.get(`/${urlRequest}/lista?pagina=${(convertedParams+lastPage-2)}&&itens=8`)
            .then(response => setItemData(response.data.products))
            .then(setFirstNav(convertedParams+(lastPage - 1)), setSecondNav(convertedParams+lastPage), setThirdNav(convertedParams+lastPage))
        }

    }





    return(
        <>
            <footer className={`flex justify-center my-4 tablet:hidden almostCellphone:hidden`}>
            <IoIosArrowBack 
                className='w-9 h-9 text-white_pormade cursor-pointer' 
                onClick={() => previousPage()}
            />
            <div>
                <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${firstNav === parseInt(params.id)? "bg-light_green" : ""}`}>{firstNav}</Link>
                <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${secondNav === parseInt(params.id)? "bg-light_green" : ""} ${secondNav > lastPage? "hidden" : ""}`} onClick={() => nextPage()} >{secondNav}</Link>
                <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${thirdNav === parseInt(params.id)? "bg-light_green" : ""} ${secondNav > lastPage -1? "hidden" : ""}`} onClick={() => nextPage()}>{thirdNav}</Link>
                <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2`}>...</Link>
                <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2`} onClick={() => NavigateLastPage()}>{Math.round(allItems.length/8)}</Link>
            </div>
            <IoIosArrowForward 
                className='w-9 h-9 text-white_pormade cursor-pointer' 
                onClick={() => nextPage()}
            />
            </footer>
        </>


    )
}