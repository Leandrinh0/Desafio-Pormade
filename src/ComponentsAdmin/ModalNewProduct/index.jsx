import CheckBox from "../../Components/CheckBox"
import { AuthenticateContext } from "../../Contexts/Authenticate"
import { MenuContext } from "../../Contexts/MenuContext"
import api from "../../http/api"
import "../../index.css"
import { useContext, useState } from "react"

const ModalNewProduct = ({fetchData}) => {

    const {newProduct, setNewProduct} = useContext(MenuContext)
    const {user} = useContext(AuthenticateContext)

    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')
    const [favorite, setFavorite] = useState(false)

    const close = () => {
        setNewProduct(false)
    }

    const createNewProduct = () => {
        api.post("produtos", {
            creatorCpf:user.cpf,
            name: name,
            value: parseInt(value),
            favorite: favorite,
            description: description
        })
        .then(() => fetchData())
        setNewProduct(false)
        setName("")
        setValue("")
        setDescription("")
        setFavorite("")
    }


    return (
        <div className={`fixed left-0 top-0 bottom-0 right-0 bg-black duration-200 justify-center items-center overflow-y-auto ${newProduct ? 'flex' : "hidden"}`}>
            <div className="w-1/2 h-2/5 bg-black_modal rounded-xl border-2 border-light_green flex flex-col items-center">
                <div className='w-full flex justify-center '>
                    <h1 className='my-6 text-3xl font-bold'>Novo Produto</h1>
                </div>
                <div className='flex flex-row w-5/6 h-1/3 justify-between'>
                    <div className="flex flex-col w-3/6"> 
                        <label className="text-xl font-semibold ">Nome do Produto</label>
                        <input 
                            placeholder="Digite o Nome" 
                            className='w-full h-10 bg-transparent text-grey_text outline-none rounded-lg mb-5 border border-green_pormade pl-2'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col justify-start items-center '>
                        <label className="text-2xl font-medium ">Favoritos</label>
                        <CheckBox favorite={favorite} setFavorite={setFavorite}/>
                    </div>
                    <div className='flex flex-col '>
                        <label className="text-2xl font-medium ">Preço</label>
                        <input 
                            type="text" 
                            placeholder='Digite o Preço' 
                            className="h-10 pl-2 bg-transparent text-grey_text outline-none rounded-lg mb-5 border border-green_pormade"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-5/6 h-1/3">
                        <label className="text-xl font-semibold ">Descrição</label>
                        <input 
                            placeholder="" 
                            className='w-full h-20 bg-transparent text-grey_text outline-none rounded-lg mb-5 border border-green_pormade pl-2'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                <div className="w-5/6 h-1/3">
                <div className='flex w-full h-5/6 items-center justify-between'>
                    <button className='flex w-2/5 h-5/6 bg-red-700  rounded-md text-center justify-center items-center  text-white font-semibold text-xl hover:bg-red_button' onClick={close}>Cancelar</button>
                    <button className='flex w-2/5 h-5/6 bg-light_green rounded-md text-center justify-center items-center  hover  text-white font-semibold text-xl hover:bg-green_button' onClick={() => createNewProduct()}> Confirmar</button>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default ModalNewProduct