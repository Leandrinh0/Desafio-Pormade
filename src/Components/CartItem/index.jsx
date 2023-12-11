import { useContext, useState } from "react";
import { TiPlus, TiMinus  } from "react-icons/ti";
import { MenuContext } from "../../Contexts/MenuContext";
import ModalDeleteProduct from "../ModalDeleteProduct";
import { ItensCartContext } from "../../Contexts/ItensCartContex";

console.log(window.screen.width)

export default function CartItem({name, description, value, id}) {

    const [showModal, setShowModal] = useState(false)
    const {itensCart, setItensCart} = useContext(ItensCartContext)

    const removeItemCart = () => {
        const filter = itensCart.filter((item) => {
            return item.id !== id
        })
        setItensCart([...filter])
        setShowModal(!showModal)
        
    }

    return (
        <>
        <div className='w-5/6 h-1/4 bg-black_pormade border-2 border-light_green rounded-xl p-5 m-2 tablet:p- almostCellphone:border-none almostCellphone:w-11/12 almostCellphone:p-2 almostCellphone:h-[30%] almostCellphone:my-1]'>
            <div className='flex justify-between h-full'>
                <div className='w-2/6 h-fullflex flex-col justify-between tablet:w-3/5 almostCellphone:w-5/12'>
                    <div className='w-full h-full flex flex-col '>
                        <h1 className='font-bold text-2xl border-b-2 border-b-light_green mb-1 tablet:text-xl almostCellphone:text-base almostCellphone:border-none'>{name}</h1>
                        <div className='flex flex-col justify-between w-full h-full'>
                            <p className='tablet:text-base almostCellphone:text-sm almostCellphone:text-grey_text'>{window.screen.width > 650? description : ""}</p>
                            <button className='bg-red_button_cart text-white h-8 w-24 rounded-xl bg-red_button' onClick={() => setShowModal(!showModal)}>Excluir</button>
                        </div>
                    </div>
                </div>

                <div className=' h-full flex justify-center tablet:mr-4 almostCellphone:w-8/12 almostCellphone:ml-6'>
                    <div className='flex h-full w-full justify-center tablet:flex-col tablet:items-center tablet:justify-start almostCellphone:flex-row almostCellphone:justify-between almostCellphone:items-start almostCellphone:mt-1'>
                        <div className='mr-12 text-center flex flex-col tablet:mr-0'>
                            <h1 
                                className='mb-6 font-semibold text-2xl tablet:text-lg tablet:mb-1 almostCellphone:text-base almostCellphone:mb-5'
                                >{window.screen.width < 530? "Qtd:": "Quantidade"}
                            </h1>
                            <div className='flex justify-center items-center tablet:mb-2'>
                                <TiMinus className='w-8 h-8 text-white tablet:w-5 tablet:h-5 almostCellphone:w-4 almostCellphone:h-4 cursor-pointer'/>
                                <p className='px-4 py-1 rounded-lg border border-light_green bg-black font-semibold text-2xl tablet:px-2 tablet:py-0 tablet:mx-1 tablet:text-lg almostCellphone:text-base almostCellphone:border-none'>1</p>
                                <TiPlus className='w-8 h-8 text-white tablet:w-5 tablet:h-5 almostCellphone:w-4 almostCellphone:h-4 cursor-pointer'/>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='mb-8 font-semibold text-2xl tablet:text-lg tablet:mb-0.5 almostCellphone:text-base almostCellphone:mb-5'>{window.screen.width < 530? "Valor": "Valor Total"}</h1>
                            <h1 className='font-bold text-2xl almostCellphone:text-base tablet:text-lg tablet:text-center'>R${value}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <ModalDeleteProduct/>
        </div>





        {/* Modal de delete ->  */}
        <div className={`fixed left-0 top-0 bottom-0 right-0 bg-white bg-opacity-20 duration-200 justify-center items-center overflow-y-auto ${showModal ? "flex" : "hidden"}`}>
            <div className="w-1/3 h-1/6 bg-black_modal rounded-xl border-2 border-light_green flex flex-col items-center justify-center
                tablet:w-2/3 tablet:h-1/3
            ">
                <div className="w-full h-1/2 text-2xl text-white text-center items-center font-bold p-4
                    tablet:text-3xl
                    almostCellphone:text-xl
                ">Deseja retirar este produto do carrinho?</div>
                <div className='flex w-full h-1/2 items-center justify-center
                    tablet:block tablet:w-4/5 tablet:pl-2
                    almostCellphone:pl-0
                '>
                    <button className='flex w-2/5 h-4/6 bg-red-700  rounded-md text-center justify-center items-center mx-3 text-white font-semibold text-xl hover:bg-red_button
                        tablet:w-11/12 tablet:h-2/6 tablet:mb-2
                    ' onClick={() => setShowModal(!showModal)}>Cancelar</button>
                    <button className='flex w-2/5 h-4/6 bg-light_green rounded-md text-center justify-center items-center mx-3 hover  text-white font-semibold text-xl hover:bg-green_button
                        tablet:w-11/12 tablet:h-2/6 tablet:mb-2
                    ' onClick={() =>  removeItemCart()}> Confirmar</button>
                </div>
            </div>
            
        </div>



        </>
    )
}