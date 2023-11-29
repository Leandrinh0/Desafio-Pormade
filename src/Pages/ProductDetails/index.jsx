import { FiArrowLeftCircle } from "react-icons/fi";
import CardProductDetails from "../../Components/cardProductDetails";
import {useNavigate} from 'react-router-dom'


export default function ProductDetails () {
    const navigate = useNavigate()

    return(
        <div className="w-full h-screen  flex flex-col justify-center items-center">
            <div className='flex items-center w-10/12 m-3'>
                <FiArrowLeftCircle className='w-14 h-14 text-light_green ml-5 cursor-pointer' onClick={() => navigate(-1)} />
                <h1 className='font-bold text-3xl ml-3' >Detalhes do Pedido</h1>
            </div>
            <div className="w-10/12 h-5/6 flex justify-center flex-wrap bg-black border border-light_green rounded-3xl">
                <CardProductDetails/>
                <CardProductDetails/>
                <CardProductDetails/>
                <CardProductDetails/>
            </div>
        </div>
    )
}

