import { FaStar } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import '../../index.css'



export default function CardProduct() {
    return(
        <div 
            className='w-3/12 bg-black_pormade border border-green_pormade rounded-2xl flex flex-col p-5 my-4 mx-10 
            tablet:w-2/5 tablet:mx-2 almostCellphone:w-full almostCellphone:p-2 almostCellphone:mx-0 almostCellphone:my-0 almostCellphone:mb-2 almostCellphone:border-none'
        >
            <div className="flex justify-between items-center border-b border-b-green_pormade mb-2">
                <h1 className='font-bold text-2xl py-1 almostCellphone:text-xl'>Product Name</h1>
                <FaStar className='w-7 h-7 text-yellow'/>
            </div>
            <div className='w-10/12 almostCellphone:w-11/12'>
                <p className='text-sm almostCellphone:text-xs almostCellphone:text-grey_text almostCellphone:h-12'>Description, description, description, description, Description, description, description</p>
            </div>
            <div className='flex justify-between items-center mt-3 almostCellphone:items-end'>
                <p className='font-bold	text-2xl almostCellphone:text-lg'>R$99,00</p>
                <FiPlusCircle className='w-10 h-10 mr-3 text-light_green almostCellphone:w-8 almostCellphone:h-8 almostCellphone:mr-0'/>
            </div>
        </div>
    )
}

