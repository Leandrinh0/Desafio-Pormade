import CheckBox from "../../Components/CheckBoxUser"
import "../../index.css"

const ModalEditUser = ({user, setUser}) => {

    const close = () => {
        setUser(false)
    }
   
    return (
        <div className={`fixed left-0 top-0 bottom-0 right-0 bg-black duration-200 justify-center items-center overflow-y-auto ${user ? 'flex' : "hidden"}`}>
            <div className="w-2/4 h-2/5 bg-black_modal rounded-xl border-2 border-light_green flex flex-col items-center p-2 
                tablet:w-3/5 tablet:h-2/4
                almostCellphone:w-5/6 almostCellphone:h-5/6
            ">
                <div className='w-full h-2/6 flex justify-center items-center
                    tablet:h-1/6
                '>
                    <h1 className='my-6 text-3xl font-bold mb-4'>Editar Usuário</h1>
                </div>
                <div className="flex flex-col w-5/6 items-center justify-start
                    tablet:mb-2
                ">
                    <div className='w-full h-11/12'>
                        <label className="text-2xl font-semibold flex items-start mb-2">Nome Completo</label>
                    </div> 
                    <input placeholder="Digite o Nome" className='w-full h-10 bg-transparent text-grey_text outline-none rounded-lg mb-5 border border-green_pormade pl-2
                       tablet:h-12
                    '/>
                </div>

                <div className='flex flex-row w-5/6 justify-between
                    almostCellphone:block
                '>
                    <div className="flex flex-col w-3/6 
                        almostCellphone:w-full
                    ">
                        <label className="text-2xl font-semibold mb-2">CPF</label>
                        <input placeholder="Digite o CPF" className='w-full h-10 bg-transparent text-grey_text outline-none rounded-lg mb-5 border border-green_pormade pl-2
                            almostCellphone:w-full
                            tablet:h-12
                        '/>
                    </div>
                    <div className='flex flex-col mr-14
                        tablet:mr-0
                        almostCellphone:flex-row-reverse almostCellphone:mr-10
                    '>
                        <label className="text-2xl font-medium mb-2 
                            almostCellphone:font-semibold
                        ">Administrador</label>
                        <CheckBox/>
                    </div>
                </div>
                <div className='flex w-5/6 h-2/6 items-center justify-between py-2
                tablet:flex-wrap tablet:justify-center tablet:mt-4
                almostCellphone:h-2/6
                '>
                    <button className='flex w-2/5 h-4/5 bg-red_pormade  rounded-xl text-center justify-center items-center text-white font-bold text-2xl hover:bg-red_button
                        tablet:mx-4 tablet:h-2/5 tablet:w-80
                        almostCellphone:w-full almostCellphone:h-2/6 almostCellphone:mx-0
                    ' onClick={close}>Cancelar</button>
                    <button className='flex w-2/5 h-4/5 bg-light_green rounded-xl text-center justify-center items-center hover  text-white font-bold text-2xl hover:bg-green_button
                        tablet:mx-4 tablet:h-2/5 tablet:w-80
                        almostCellphone:w-full almostCellphone:h-2/6 almostCellphone:mx-0

                    ' onClick={close}> Confirmar</button>
                </div>
            </div>
            
        </div>
    )
}

export default ModalEditUser