import { useContext, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate, useParams} from "react-router-dom";
import api from "../../http/api";
import { AuthenticateContext } from "../../Contexts/Authenticate";

export default function PaginationMobile ({ allItems, fetchData, urlNavigate, page, search,setSearch}) {

    const lastPage = Math.ceil((allItems.length/8))
    const navigate = useNavigate()
    const params = useParams()

    const [actualPage, setActualPage] = useState(1)

    const qtdButton = 3
    const maxLeft = (qtdButton -1) / 2
    const firstPage = Math.max(actualPage - maxLeft, 1)



    useEffect(() => {
        if(window.location.pathname === page + params.id){
            navigate(`/${urlNavigate}/${actualPage}`)
            fetchData(actualPage-1)
            search? setSearch("") : ""
        }

    },[actualPage])

    const previousPage = () => {
        if(actualPage > 1){
            setActualPage(actualPage-1)
        }
    }

    const nextPage = () => {
        if(actualPage < lastPage) {
            setActualPage(actualPage + 1)
        }
    }

    return(
        <>
            <div className='hidden items-center justify-center tablet:flex mt-4'>
            <IoIosArrowBack 
                className='w-9 h-9 text-white_pormade cursor-pointer' 
                onClick={() => previousPage()}
            />
            {Array(qtdButton).fill('').map((_,index) => {
                index + firstPage
            })
            .map((page, index) => { 
                page = index + firstPage
                return (
                    <button 
                        key={index}
                        className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${page === parseInt(params.id)? "bg-light_green" : ""} disabled:text-grey_pormade disabled:hover:bg-black `}
                        onClick={() => setActualPage(page)}
                        disabled={page > lastPage}
                        >
                        {page}
                    </button>
                )

            })
            }
            <button className={`text-4xl text-white_pormade hover:bg-green_pormade px-2`}>...</button>
            <button 
                className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${lastPage === parseInt(params.id)? "bg-light_green" : ""}`} 
                onClick={() => setActualPage(Math.ceil(allItems.length/8))}
                >{lastPage}
            </button>
            <IoIosArrowForward 
                className='w-9 h-9 text-white_pormade cursor-pointer' 
                onClick={() => nextPage()}
            />

            </div>
        </>

    )
}