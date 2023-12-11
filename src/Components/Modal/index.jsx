import { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ItensCartContext } from "../../Contexts/ItensCartContex";


export default function Modal ({isOpen, closeModal, children}) {

    const {itensCart, setItensCart, pedidos, setPedidos} = useContext(ItensCartContext)

    var totalSum = 0
    itensCart.forEach((item) => {
        totalSum += parseInt(item.value)
    })

    const finalizePurchase = () => {
        setPedidos([...pedidos, {
            pedido: [...itensCart]
        }])
        setItensCart([])
    }

    if (isOpen) return (

            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black flex justify-center items-center">
                <div className="w-2/3 h-5/6 bg-black_modal rounded-3xl border-2 border-light_green almostCellphone:w-11/12">
                <div className='w-full h-2 flex justify-end p-2 almostCellphone:mb-5'>
                    <AiOutlineClose
                        className='text-light_green w-8 h-8 cursor-pointer'
                        onClick={closeModal}
                    />
                </div>
                <div className={`pt-3 flex flex-col items-center tablet:pb-0 tablet:pt-5  almostCellphone:pt-0 almostCellphone:pb-8 ${itensCart.length > 0 ? "h-[90%] tablet:h-[87%] almostCellphone:h-3/4" : "h-full"}`}
                >
                    {children}
                </div>
                <div className={`w-full justify-center ${itensCart.length > 0 ? 'flex' : "hidden"}`} >
                <div className='flex w-11/12 mt-2 justify-end items-center tablet:justify-center tablet:flex-col almostCellphone:justify-between'>
                    <div className='flex w-full justify-end tablet:justify-center almostCellphone:justify-between almostCellphone:px-3 almostCellphone:mb-2'>
                        <h1 className='font-bold text-2xl tablet:text-xl almostCellphone:text-xl
                            
                        '
                        >Valor Total:</h1>
                        <h1 className='font-semibold text-2xl tablet:text-xl almostCellphone:text-xl'>R$ {totalSum.toFixed(2)}</h1>
                    </div>
                        <button 
                            className='text-white font-semibold text-xl w-1/3 rounded-xl h-10 bg-light_green mx-2 tablet:w-1/2 almostCellphone:w-2/3'
                            onClick={() => finalizePurchase()}
                            >Finalizar Compra
                        </button>
                    </div>
                </div>
                
                </div>
            </div>
    )
    return null
}
