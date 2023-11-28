import { FaStar } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import '../../index.css'



export default function CardProduct() {
    return(
        <div className='w-80 bg-black_pormade border border-green_pormade rounded-2xl flex flex-col p-5 my-8 mx-16'>
            <div className="flex justify-between items-center border-b border-b-green_pormade mb-2">
                <h1 className='font-bold text-2xl py-1'>Product Name</h1>
                <FaStar className='w-7 h-7 text-yellow'/>
            </div>
            <div className='w-10/12'>
                <p className='text-sm'>Description, description, description, description, Description, description, description</p>
            </div>
            <div className='flex justify-between items-center mt-3'>
                <p className='font-bold	text-2xl'>R$99,00</p>
                <FiPlusCircle className='w-10 h-10 mr-3 text-light_green'/>
            </div>
        </div>
    )
}

