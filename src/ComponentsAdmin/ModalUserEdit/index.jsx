import "../../index.css"
import { useState } from "react"

const ModalEditUser = () => {

    const [show, setShow] = useState(false)

    return (
        <div className={`fixed left-0 top-0 bottom-0 right-0 bg-white bg-opacity-20 transition-all ease-in-out duration-500 justify-center items-center overflow-y-auto ${show ? 'flex' : "hidden"}`}>
            <div className="w-1/2 h-2/4 bg-black_modal rounded-xl border-2 border-light_green flex flex-col items-center">
                <h1 className='text-center my-6'>Novo Usuário</h1>
                <div className="flex flex-col w-5/6 items-center">
                    <div className='w-full'>
                        <label>Nome Completo</label>
                    </div>
                    <input placeholder="Digite o Nome" className='w-full'/>
                </div>

                <div className='flex flex-row w-5/6 justify-between'>
                    <div className="flex flex-col w-3/6">
                        <label>CPF</label>
                        <input placeholder="Digite o CPF" className='w-full'/>
                    </div>
                    <div className='flex flex-col mr-14'>
                        <label>Administrador</label>
                        <input type="checkbox" />
                    </div>
                </div>
                <div className='flex'>
                    <button className='flex w-72 bg-red-700 h-2/3 rounded-xl text-center justify-center items-center mx-3'>Cancelar</button>
                    <button className='flex w-72 bg-light_green h-2/3 rounded-xl text-center justify-center items-center mx-3 hover'> Confirmar</button>
                </div>
            </div>
            
        </div>
    )
}

export default ModalEditUser