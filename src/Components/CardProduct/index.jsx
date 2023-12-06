import { FaStar } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import '../../index.css';
import star from "../../assets/images/star.png"
import blackStar from "../../assets/images/starBlack.png"



export default function CardProduct({name, price, description, favorite}) {
    return(
        <div 
            className='w-4/12 bg-black_pormade border border-green_pormade rounded-2xl flex flex-col p-5 my-4 mx-10 
            tablet:w-5/12 tablet:mx-2
            almostCellphone:w-full almostCellphone:p-2 almostCellphone:mx-0 almostCellphone:my-0 almostCellphone:mb-2 almostCellphone:border-none'
        >
            <div className="flex justify-between items-center border-b border-b-green_pormade mb-2">
                <h1 className='font-bold text-2xl py-1 almostCellphone:text-xl'>{name}</h1>
                <img src={favorite ? star : blackStar} className=" w-8 h-8"/>
            </div>
            <div className='w-10/12 almostCellphone:w-11/12 tablet:w-11/12'>
                <p className='text-sm almostCellphone:text-xs almostCellphone:text-grey_text almostCellphone:h-12'>{description}</p>
            </div>
            <div className='flex justify-between items-center mt-3 almostCellphone:items-end'>
                <p className='font-bold	text-2xl almostCellphone:text-lg'>R${price}</p>
                <FiPlusCircle className='w-10 h-10 mr-3 text-light_green almostCellphone:w-8 almostCellphone:h-8 almostCellphone:mr-0'/>
            </div>
        </div>
    )
}

