import { FaStar } from "react-icons/fa6";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import '../../index.css';
import star from "../../assets/images/star.png"
import blackStar from "../../assets/images/starBlack.png"
import { ItensCartContext } from "../../Contexts/ItensCartContex";
import { useContext, useState } from "react";
import { AuthenticateContext } from "../../Contexts/Authenticate";




export default function CardProduct({name, price, description, favorite, id, cartActive}) {

    const [selectedItem, setSelectedItem] = useState(false)
    const {addItem, itensCart, setItensCart} = useContext(ItensCartContext)
    const {user} = useContext(AuthenticateContext)

    const addItemAndCheck = () => {
        if (!cartActive) {
            addItem(name, price, description, user.cpf, id)
            setSelectedItem(!selectedItem)
        }
        else {
            const filter = itensCart.filter((i) => {
                return id !== i.id
            })
            setItensCart([...filter])
            setSelectedItem(!selectedItem)
        }
    }

    return(
        <div 
            className='w-4/12 bg-black_pormade border border-green_pormade rounded-2xl flex flex-col p-5 my-4 mx-10 
            tablet:w-5/12 tablet:mx-2
            almostCellphone:w-full almostCellphone:p-2 almostCellphone:mx-0 almostCellphone:my-0 almostCellphone:mb-2 almostCellphone:border-none'
        >
            <div className="flex justify-between items-center border-b border-b-green_pormade mb-2">
                <h1 className='font-bold text-2xl py-1 tablet:text-xl almostCellphone:text-xl'>{name}</h1>
                <img src={favorite ? star : blackStar} className=" w-8 h-8"/>
            </div>
            <div className='w-10/12 almostCellphone:w-11/12 tablet:w-11/12'>
                <p className='text-sm almostCellphone:text-xs almostCellphone:text-grey_text almostCellphone:h-12'>{description}</p>
            </div>
            <div className='flex justify-between items-center mt-3 almostCellphone:items-end'>
                <p className='font-bold	text-2xl almostCellphone:text-lg'>R${price}</p>
                {cartActive  ? 
                    <FiMinusCircle 
                        className='w-10 h-10 mr-3 text-red_pormade cursor-pointer almostCellphone:w-8 almostCellphone:h-8 almostCellphone:mr-0'
                        onClick={() => addItemAndCheck()}
                    />  : 
                    <FiPlusCircle 
                        className='w-10 h-10 mr-3 text-light_green cursor-pointer almostCellphone:w-8 almostCellphone:h-8 almostCellphone:mr-0'
                        onClick={() => addItemAndCheck()}
                    />
                }
            </div>
        </div>
    )
}

