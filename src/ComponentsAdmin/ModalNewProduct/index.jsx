import CheckBox from "../../Components/CheckBox"
import { AuthenticateContext } from "../../Contexts/Authenticate"
import { MenuContext } from "../../Contexts/MenuContext"
import api from "../../http/api"
import "../../index.css"
import { useContext, useState } from "react"
import star from "../../assets/images/star.png"
import blackStar from "../../assets/images/starBlack.png"


const ModalNewProduct = ({fetchData}) => {

    const {newProduct, setNewProduct} = useContext(MenuContext)
    const {user} = useContext(AuthenticateContext)

    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')
    const [favorite, setFavorite] = useState(false)

    const {checkboxSelecionado} = useContext(MenuContext)

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
            <div className="w-1/2 h-2/5 bg-black_modal rounded-xl border-2 border-light_green flex flex-col items-center
                tablet:w-3/5 tablet:h-3/5
                almostCellphone:w-5/6 almostCellphone:h-5/6
            ">
                <div className='w-full flex justify-center
                    tablet:h-1/6
                    
                '>
                    <h1 className='my-6 text-3xl font-bold
                        almostCellphone:text-2xl
                    '>Cadastrar Produto</h1>
                </div>

                <div className='flex flex-row w-5/6 h-1/3
                    tablet:h-3/6 tablet:block
                '>
                    <div className="flex flex-col w-3/6
                        tablet:w-full tablet:h-1/2
                        almostCellphone:h-2/5
                    "> 
                        <label className="text-xl font-semibold 
                            tablet:text-2xl
                            almostCellphone:text-xl
                        ">Nome do Produto</label>
                        <input placeholder="Digite o Nome" className='w-11/12 h-3/6 bg-transparent text-grey_text outline-none rounded-lg mb-5 border border-green_pormade pl-2
                            tablet:h-11 tablet:w-full'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    <div className="w-3/6 flex justify-between
                        tablet:flex-row-reverse tablet:w-full tablet:h-1/2
                        almostCellphone:h-2/5
                    ">
                    <div className='flex flex-col justify-start  w-2/5'>
                        <label className="text-2xl font-medium 
                            almostCellphone:text-xl
                        ">Favoritos</label>
                        <div className="flex justify-between w-1/2
                            almostCellphone:w-3/4
                        ">
                        <CheckBox newFavorite={favorite} setNewFavorite={setFavorite}/>
                        <img src={favorite ? star : blackStar} className=" w-6 h-6"/>
                        </div>
                    </div>
                    <div className='flex flex-col w-3/5'>
                        <label className="text-2xl font-medium 
                            almostCellphone:text-xl
                        ">Preço</label>
                        <input  placeholder='Digite o Preço' className="h-3/6 w-full pl-2 bg-transparent text-grey_text outline-none rounded-lg mb-5 border border-green_pormade
                            tablet:w-11/12 tablet:h-11"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>

                    </div>

                </div>
                <div className="flex flex-col w-5/6 h-1/3">

                        <label className="text-xl font-semibold 
                            almostCellphone:text-xl
                        ">Descrição</label>
                        <textarea placeholder="Digite uma descrição" className='resize-none w-full h-20 bg-transparent text-grey_text outline-none rounded-lg mb-5 border border-green_pormade pl-2
                            almostCellphone:h-1/2'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                <div className="w-5/6 h-1/3">
                <div className='flex w-full h-5/6 items-center justify-between
                    tablet:flex-wrap tablet:justify-center
                    almostCellphone:h-5/6
                '>
                    <button className='flex w-2/5 h-4/5 bg-red-700  rounded-xl text-center justify-center items-center  text-white font-semibold text-xl hover:bg-red_button
                        tablet:w-80 tablet:h-2/5
                    ' onClick={close}>Cancelar</button>
                    <button className='flex w-2/5 h-4/5 bg-light_green rounded-xl text-center justify-center items-center  hover  text-white font-semibold text-xl hover:bg-green_button
                        tablet:w-80 tablet:h-2/5 
                    ' onClick={() => createNewProduct()}> Confirmar</button>
                </div>
                </div>
            </div>
            
        </div>
    )
}      

export default ModalNewProduct