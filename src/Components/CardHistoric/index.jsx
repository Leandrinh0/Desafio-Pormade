import { useContext, useState } from "react"
import "../../index.css"
import "./styles.css"
import { useNavigate } from "react-router-dom"
import { MenuContext } from "../../Contexts/MenuContext"
import { ItensCartContext } from "../../Contexts/ItensCartContex"

const CardHistoric = ({qtd, total, numeroPedido, item}) => {
    const navigate = useNavigate()
    const {setHistoric} = useContext(MenuContext)
    const {historicItens, setHistoricItens, cartItens} = useContext(ItensCartContext)

    const redirect = () => {
        setHistoric(false)
        localStorage.setItem("p", item)
        navigate('/detalhesproduto')
        
    }

    return (
        <div className="cardContainer h-2/4 pb-4 my-2 bg-black_pormade rounded-xl border border-light_green block tablet:h-3/6 tablet:w-full almostCellphone:border-none almostCellphone:w-full almostCellphone:mb-2 almostCellphone:h-1/4 almostCellphone:my-0">
                <div className="w-11/12 h-1/6 border-b border-light_green text-white text-xl font-bold mt-2 almostCellphone:text-lg almostCellphone:border-none">
                  Pedido - {numeroPedido}
                </div>
                <div className="w-11/12 h-3/5 mt-2 tablet:h-2/4">
                    <div className="w-full h-1/3 flex justify-between tablet:h-8 almostCellphone:h-6">
                        <label className="font-medium text-xl tablet:text-base almostCellphone:text-sm">{window.screen.width < 1100? "Quantidade" : "Quantidade de Produtos"}</label> 
                        <label className="font-medium text-xl tablet:text-base almostCellphone:text-sm">{qtd}</label>   
                    </div> 
                    <div className="w-full h-1/3 flex justify-between tablet:h-12 almostCellphone:h-6">
                        <label className="font-medium text-xl tablet:text-base almostCellphone:text-sm">Valor Total</label> 
                        <label className="font-medium text-xl tablet:text-base almostCellphone:text-sm">R${total.toFixed(2)}</label>   
                    </div> 
                    <div className="w-full h-1/3 flex justify-between tablet:flex-col tablet:items-center almostCellphone:flex-row almostCellphone:h-4">
                        <label className="font-medium text-xl tablet:text-base almostCellphone:text-sm">Data da compra</label> 
                        <label className="font-medium text-xl tablet:text-base almostCellphone:text-sm">30/09/2023</label>   
                    </div>    
                </div>
                <div className="w-11/12 text-right almostCellphone:flex almostCellphone:justify-end">
                    <label className="text-light_green flex justify-end font-bold text-xl hover:cursor-pointer hover:underline tablet:justify-center tablet:text-lg tablet:mt-2 tablet:underline tablet:underline-offset-2 almostCellphone:text-base almostCellphone:mt-2" onClick={() => redirect()}>Ver Mais</label>
                </div>                         
        </div>
    )
}

export default CardHistoric