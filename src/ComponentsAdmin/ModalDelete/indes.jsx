import "../../index.css"
import { useContext, useState } from 'react'
import { RiAlertLine } from "react-icons/ri";
import { MenuContext } from "../../Contexts/MenuContext";
import api from "../../http/api";
import { AuthenticateContext } from "../../Contexts/Authenticate";



const ModalDelete = ({word, id, close}) => {

    const {deletar, setDeletar} = useContext(MenuContext)



    return (
        <div className={`fixed left-0 top-0 bottom-0 right-0  bg-white bg-opacity-20 transition-all ease-in-out duration-500 justify-center items-center overflow-y-auto ${deletar ? 'flex' : "hidden"}`}>
            <div className=" w-2/6 h-1/3 rounded-xl border-2 border-solid border-green_pormade bg-black_modal 
                tablet:w-4/6 
                almostCellphone:w-11/12 almostCellphone:h-5/6
            ">
                <div className='w-full h-1/3 items-center flex justify-center text-white  
                    almostCellphone:items-end
                '>
                    <RiAlertLine className='w-24 h-24 text-red_pormade 
                        almostCellphone:w-28 almostCellphone:h-28
                    '/>
                </div>
                <div className='w-full h-1/3 items-center flex justify-center text-white text-center text-2xl font-bold 
                    tablet:text-3xl
                    almostCellphone:text-4xl
                    almostCellphone:
                '>
                <p>Tem certeza que deseja deletar este {word}?</p>
                </div>
                <div className='w-full h-1/3 itens-center flex justify-center text-white text-center text-2xl font-bold
                    tablet:flex-wrap
                '>
                    <button className='flex w-60 bg-red_pormade h-4/6 rounded-xl text-center justify-center items-center mx-3  hover:bg-red_button 
                        tablet:mx-4 tablet:h-2/5 tablet:w-72
                        almostCellphone:h-1/3 almostCellphone:rounded-lg
                    ' onClick={() => setDeletar(!deletar)}
                    >Cancelar</button>
                    <button className='flex w-60 bg-light_green h-4/6 rounded-xl text-center justify-center items-center mx-3  hover:bg-green_button
                        tablet:mx-4 tablet:h-2/5 tablet:w-72
                        almostCellphone:h-1/3 almostCellphone:rounded-lg'
                        onClick={close}
                    > Confirmar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete