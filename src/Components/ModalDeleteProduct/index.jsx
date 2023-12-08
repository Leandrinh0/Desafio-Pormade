import { useContext } from "react"
import { MenuContext } from "../../Contexts/MenuContext"
import { ItensCartContext } from "../../Contexts/ItensCartContex"

const ModalDeleteProduct = ({id}) => {

    const {remove, setRemove} = useContext(MenuContext)
    const {deleteItem} = useContext(ItensCartContext)

    const close = () => {
        setRemove(false)
    }



    return (
        <div className={`fixed left-0 top-0 bottom-0 right-0 bg-white bg-opacity-20 duration-200 justify-center items-center overflow-y-auto ${remove ? "flex" : "hidden"}`}>
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
                    ' onClick={close}>Cancelar</button>
                    <button className='flex w-2/5 h-4/6 bg-light_green rounded-md text-center justify-center items-center mx-3 hover  text-white font-semibold text-xl hover:bg-green_button
                        tablet:w-11/12 tablet:h-2/6 tablet:mb-2
                    ' onClick={() => close()}> Confirmar</button>
                </div>
            </div>
            
        </div>
    )
}

export default ModalDeleteProduct