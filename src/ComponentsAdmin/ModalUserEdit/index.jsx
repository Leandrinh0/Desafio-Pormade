import { MenuContext } from "../../Contexts/MenuContext"
import "../../index.css"
import { useContext } from "react"

const ModalEditUser = () => {

    const {newUser, setNewUser} = useContext(MenuContext)

    const close = () => {
        setNewUser(false)
    }

    return (
        <div className={`fixed left-0 top-0 bottom-0 right-0 bg-white bg-opacity-20 duration-200 justify-center items-center overflow-y-auto ${newUser ? 'flex' : "hidden"}`}>
            <div className="w-1/3 h-2/5 bg-black_modal rounded-xl border-2 border-light_green flex flex-col items-center">
                <div className='w-full flex justify-center'>
                    <h1 className='my-6 text-3xl font-bold'>Novo Usuário</h1>
                </div>
                <div className="flex flex-col w-5/6 items-center">
                    <div className='w-full'>
                        <label className="text-2xl font-semibold ">Nome Completo</label>
                    </div> 
                    <input placeholder="Digite o Nome" className='w-full h-10 bg-transparent text-grey_text outline-none rounded-lg mb-5 border border-green_pormade pl-2'/>
                </div>

                <div className='flex flex-row w-5/6 justify-between'>
                    <div className="flex flex-col w-3/6">
                        <label className="text-2xl font-semibold ">CPF</label>
                        <input placeholder="Digite o CPF" className='w-full h-10 bg-transparent text-grey_text outline-none rounded-lg mb-5 border border-green_pormade pl-2'/>
                    </div>
                    <div className='flex flex-col mr-14'>
                        <label className="text-2xl font-medium ">Administrador</label>
                        <input type="checkbox" />
                    </div>
                </div>
                <div className='flex w-full h-1/4 items-center justify-center '>
                    <button className='flex w-2/5 h-1/2 bg-red-700  rounded-md text-center justify-center items-center mx-3 text-white font-semibold text-xl hover:bg-red_button' onClick={close}>Cancelar</button>
                    <button className='flex w-2/5 h-1/2 bg-light_green rounded-md text-center justify-center items-center mx-3 hover  text-white font-semibold text-xl hover:bg-green_button' onClick={close}> Confirmar</button>
                </div>
            </div>
            
        </div>
    )
}

export default ModalEditUser