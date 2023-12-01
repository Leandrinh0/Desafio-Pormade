import { useContext } from "react"
import "../../index.css"
import "./styles.css"
import { useNavigate } from "react-router-dom"
import { MenuContext } from "../../Contexts/MenuContext"

const CardHistoric = () => {
    const navigate = useNavigate()
    const {setHistoric} = useContext(MenuContext)

    const redirect = () => {
        navigate('/detalhesproduto')
        setHistoric(false)

    }

    return (
        <div className="cardContainer h-2/5 bg-black_pormade rounded-xl border border-light_green block">
                <div className="w-11/12 h-1/6 border-b border-light_green text-white text-xl font-bold mt-2 ">
                  Pedido - 00
                </div>
                <div className="w-11/12 h-3/5 mt-2">
                    <div className="w-full h-1/3 flex justify-between">
                        <label className="font-medium text-xl">Quantidade de Produtos</label> 
                        <label className="font-medium text-xl">4</label>   
                    </div> 
                    <div className="w-full h-1/3 flex justify-between">
                        <label className="font-medium text-xl">Valor Total</label> 
                        <label className="font-medium text-xl">R$20,00</label>   
                    </div> 
                    <div className="w-full h-1/3 flex justify-between">
                        <label className="font-medium text-xl">Data da compra</label> 
                        <label className="font-medium text-xl">30/09/2023</label>   
                    </div>    
                </div>
                <div className="w-11/12 text-right ">
                    <label className="text-light_green font-bold text-xl hover:cursor-pointer hover:underline" onClick={redirect}>Ver Mais</label>
                </div>                         
        </div>
    )
}

export default CardHistoric