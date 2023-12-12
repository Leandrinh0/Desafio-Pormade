import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useLocation, useNavigate, useParams} from "react-router-dom";
import api from "../../http/api";
import { AuthenticateContext } from "../../Contexts/Authenticate";

export default function Pagination ({ allItems, ItemData, setItemData, fetchData, urlNavigate, urlRequest, }) {
    

    const lastPage = Math.ceil((allItems.length/8))
    const {user} = useContext(AuthenticateContext)
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()
    const convertedParams = parseInt(params.id)
    const [actualPage, setActualPage] = useState(1)
    const maxItens=8;


    function fetchItens () {
        api.get(`/produtos/lista?pagina=${actualPage}&&itens=${maxItens}`)
        .then((res) => setItemData(res.data.products))
        .catch(window.alert)
    }


    useEffect(() => {
        navigate(`/home/${actualPage}`)
        fetchItens()
    },[actualPage])

    const previousPage = () => {
        if(actualPage > 1){
            setActualPage(actualPage-1)
        }
    }


    return(
        <>
            
                <div >
                <IoIosArrowBack 
                    className='w-9 h-9 text-white_pormade cursor-pointer' 
                    onClick={() => previousPage}
                />
                {Array(5).fill('').map((_,index) => {
                    return (
                        <button 
                            key={index}
                            className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 `}
                            onClick={() => setActualPage(index + 1)}
                            >
                            {index + 1}
                        </button>
                    )
                })
                }
                <IoIosArrowForward 
                    className='w-9 h-9 text-white_pormade cursor-pointer' 
                    onClick={() => setActualPage(actualPage + 1)}
                />

                </div>
            
        </>


    )
}