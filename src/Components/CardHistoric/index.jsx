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
        <div className="cardContainer h-2/5 pb-4 bg-black_pormade rounded-xl border border-light_green block tablet:h-3/6 tablet:mb-4">
                <div className="w-11/12 h-1/6 border-b border-light_green text-white text-xl font-bold mt-2 ">
                  Pedido - 00
                </div>
                <div className="w-11/12 h-3/5 mt-2 tablet:h-2/4">
                    <div className="w-full h-1/3 flex justify-between tablet:h-8">
                        <label className="font-medium text-xl tablet:text-base">{window.screen.width < 1100? "Quantidade" : "Quantidade de Produtos"}</label> 
                        <label className="font-medium text-xl tablet:text-base">4</label>   
                    </div> 
                    <div className="w-full h-1/3 flex justify-between tablet:h-12">
                        <label className="font-medium text-xl tablet:text-base">Valor Total</label> 
                        <label className="font-medium text-xl tablet:text-base">R$20,00</label>   
                    </div> 
                    <div className="w-full h-1/3 flex justify-between tablet:flex-col tablet:items-center">
                        <label className="font-medium text-xl tablet:text-base">Data da compra</label> 
                        <label className="font-medium text-xl tablet:text-base">30/09/2023</label>   
                    </div>    
                </div>
                <div className="w-11/12 text-right ">
                    <label className="text-light_green flex justify-end font-bold text-xl hover:cursor-pointer hover:underline tablet:justify-center tablet:text-lg tablet:mt-2 tablet:underline tablet:underline-offset-8:" onClick={redirect}>Ver Mais</label>
                </div>                         
        </div>
    )
}

export default CardHistoric