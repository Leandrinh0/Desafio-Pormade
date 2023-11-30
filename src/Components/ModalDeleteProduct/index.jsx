import { useContext } from "react"
import { MenuContext } from "../../Contexts/MenuContext"

const ModalDeleteProduct = () => {

    const {remove, setRemove} = useContext(MenuContext)

    const close = () => {
        setRemove(false)
    }

    return (
        <div className={`fixed left-0 top-0 bottom-0 right-0 bg-white bg-opacity-20 duration-200 justify-center items-center overflow-y-auto ${remove ? "flex" : "hidden"}`}>
            <div className="w-1/3 h-1/6 bg-black_modal rounded-xl border-2 border-light_green flex flex-col items-center">
                <div className="w-full h-1/2 text-2xl text-white text-center items-center font-bold p-4">Deseja tirar este produto do carrinho?</div>
                <div className='flex w-full h-1/2 items-center justify-center '>
                    <button className='flex w-2/5 h-4/6 bg-red-700  rounded-md text-center justify-center items-center mx-3 text-white font-semibold text-xl hover:bg-red_button' onClick={close}>Cancelar</button>
                    <button className='flex w-2/5 h-4/6 bg-light_green rounded-md text-center justify-center items-center mx-3 hover  text-white font-semibold text-xl hover:bg-green_button' onClick={close}> Confirmar</button>
                </div>
            </div>
            
        </div>
    )
}

export default ModalDeleteProduct