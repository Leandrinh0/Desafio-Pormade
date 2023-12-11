import { FiArrowLeftCircle } from "react-icons/fi";
import CardProductDetails from "../../Components/cardProductDetails";
import {useNavigate} from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";
import { useContext } from "react";
import { ItensCartContext } from "../../Contexts/ItensCartContex";


export default function ProductDetails () {
    const navigate = useNavigate()

    return(
        <div className="w-full h-screen  flex flex-col justify-center items-center almostCellphone:bg-black almostCellphone:py-8">
            <div className='flex items-center w-10/12 m-3 almostCellphone:hidden'>
                <FiArrowLeftCircle className='w-14 h-14 text-light_green ml-5 cursor-pointer' onClick={() => navigate(-1)} />
                <h1 className='font-bold text-3xl ml-3' >Detalhes do Pedido</h1>
            </div>
            <div className="w-10/12 h-5/6 flex justify-center flex-wrap bg-black border-2 border-light_green rounded-3xl tablet:flex-col tablet:flex-nowrap tablet:items-center tablet:justify-start tablet:pb-10 almostCellphone:h-full">
                <div className='w-full h-6 justify-end mr-2 mt-1 hidden almostCellphone:flex almostCellphone:mb-2'>
                    <IoCloseSharp className='text-light_green w-10 h-10'  onClick={() => navigate(-1)}/>
                </div>
                <CardProductDetails/>
                <CardProductDetails/>
                <CardProductDetails/>
            </div>
        </div>
    )
}

