import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate} from "react-router-dom";
import api from "../../http/api";
import { AuthenticateContext } from "../../Contexts/Authenticate";

export default function PaginationMobile ({convertedParams, params, allItems, ItemData, setItemData, fetchData, forCellphone, urlNavigate, urlRequest}) {
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

            if(urlRequest === "produtos") {navigate(`/${urlNavigate}/${lastPage}`)
                api.get(`/${urlRequest}/lista?pagina=${(convertedParams+lastPage-2)}&&itens=8`)
                .then(response => setItemData(response.data.products))
                .then(setFirstNav(convertedParams+(lastPage - 1)), setSecondNav(convertedParams+lastPage), setThirdNav(convertedParams+lastPage))
            }
            else {
                    navigate(`/${urlNavigate}/${lastPage}`)
                    api.post(`/${urlRequest}/lista?pagina=${(convertedParams+lastPage-2)}&&itens=8`,{
                        cpf:user.cpf
                    })
                    .then(response => setItemData(response.data.persons))
                    .then(setFirstNav(convertedParams), setSecondNav(convertedParams+1), setThirdNav(convertedParams+1))
            }
        }
    }


    return(
        <>
            <div className={`justify-center mt-4 tablet:ml-16 hidden tablet:flex almostCellphone:flex almostCellphone:ml-0`}>
            <IoIosArrowBack 
                className='w-9 h-9 text-white_pormade cursor-pointer' 
                onClick={() => previousPage()}
            />
            <div>
                <button className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${firstNav === parseInt(params.id)? "bg-light_green" : ""}`}>{firstNav}</button>
                <button disabled={secondNav > lastPage} className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${secondNav === parseInt(params.id)? "bg-light_green" : ""} disabled:text-grey_pormade disabled:hover:bg-black`} onClick={() => nextPage()} >{secondNav}</button>
                <button disabled={thirdNav > lastPage} className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${thirdNav === parseInt(params.id)? "bg-light_green" : ""} disabled:text-grey_pormade disabled:hover:bg-black`} onClick={() => nextPage()}>{thirdNav}</button>
                <button className={`text-4xl text-white_pormade hover:bg-green_pormade px-2`}>...</button>
                <button className={`text-4xl text-white_pormade hover:bg-green_pormade px-2`} onClick={() => NavigateLastPage()}>{Math.round(allItems.length/8)}</button>
            </div>
            <IoIosArrowForward 
                className='w-9 h-9 text-white_pormade cursor-pointer' 
                onClick={() => nextPage()}
            />
            </div>
        </>


    )
}