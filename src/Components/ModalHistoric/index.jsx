import "../../index.css"
import { AiOutlineClose } from "react-icons/ai";
import CardHistoric from "../CardHistoric";
import { useContext } from "react";
import { MenuContext } from "../../Contexts/MenuContext";
import { ItensCartContext } from "../../Contexts/ItensCartContex";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";


const ModalHistoric = () => {

    const{historic, setHistoric} = useContext(MenuContext)
    const {user, setUser, pedidos, setPedidos} = useContext(ItensCartContext)

    const close = () => {
        setHistoric(false)
    }

    return (
        <>
        <div className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 duration-200 justify-center items-center ${historic ? "flex" : "hidden"}`}>
                <div className="w-10/12 h-5/6 bg-black_modal rounded-3xl p-4 border-2 border-light_green tablet:h-5/6 almostCellphone:w-5/6">
                    <div className='w-full h-8 flex justify-end items-start'>
                        <AiOutlineClose
                            className='text-light_green w-8 h-8 cursor-pointer'
                            onClick={close}
                        />
                </div>
                <div className='w-full h-full flex flex-col items-center '>

                    <div className={`flex flex-row justify-between flex-wrap  almostCellphone:flex-col almostCellphone:flex-nowrap almostCellphone:w-full almostCellphone:px-2 overflow-y-scroll ${pedidos.length > 0 ? "w-5/6 h-5/6" : "w-[95%] h-[93%]"}`}>
                        {pedidos.length > 0 ? 
                        <>
                        {pedidos.map((item, index) => {
                        var sum = 0;
                        item.pedido.forEach((i) => sum += parseInt(i.value))
                        return <CardHistoric qtd={item.pedido.length} total={sum} numeroPedido={index+1} item={item} key={item.id}/>
                        })}
                        </>
                        : 
                        <div className=" w-full h-full p-3 bg-black_pormade rounded-xl
                        tablet:w-10/12
                        almostCellphone:p-0

                        "
                        >
                        <div className=" w-full text-center  text-white font-semibold text-6xl mb-3
                            tablet:h-1/4 tablet:items-center tablet:flex tablet:justify-center
                            almostCellphone:h-1/6 almostCellphone:text-4xl almostCellphone:mb-0
                        "
                        >Ops...</div>
                        <div className=" w-full h-1/5 text-center p-5 
                            almostCellphone:p-0
                        "
                        >
                            <p className="text-cinza_fonte text-3xl font-semibold
                                almostCellphone:text-lg
                            "
                            >Você ainda não realizou</p>
                            <p className="text-cinza_fonte text-3xl font-semibold
                                almostCellphone:text-lg
                            "
                            >nenhuma compra</p>
                        </div>
                        <div className="text-center justify-center items-center w-full flex ">
                            <MdOutlineRemoveShoppingCart className='text-white w-2/6 h-2/6
                                tablet:w-1/2 tablet:h-1/2
                            '
                             />
                        </div>
                    </div>
                        }
                    
   
                    </div>

                </div>
                </div>
        </div>

        </>
    )
}


export default ModalHistoric