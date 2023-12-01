import { MdOutlineAdminPanelSettings, MdOutlineShoppingCart, MdOutlineWatchLater } from "react-icons/md"
import logo from "../../assets/images/Vector.png"
import { RxExit } from "react-icons/rx"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MenuContext } from "../../Contexts/MenuContext"
import image from "../../assets/images/seta.png"
import Modal from "../../Components/Modal"
import CartItem from "../../Components/CartItem"
import "./style.css"


export default function LateralMenu() {
    const [openModal, setOpenModal] = useState(false)
    const { show, setShow } = useContext(MenuContext)
    const {setHistoric} = useContext(MenuContext)
    const navigate = useNavigate()

    const navigateAndCloseModal = (url) => {
        setShow(!show)
        navigate(url)
    }


    return (
        <div className={`bg-black_modal fixed top-0 left-0 p-3 flex flex-col justify-between border-r-2 border-r-light_green ${show? 'h-full' : 'h-5/6'}`}>
            <div className='flex flex-col items-center justify-center'>
                <img src={logo} alt="Imagem do logo" className="w-14 h-12 my-3 cursor-pointer"
                onClick={() => navigate('/')} />
                <MdOutlineShoppingCart
                    className="w-12 h-12 text-white_pormade my-3 cursor-pointer"
                    onClick={() => setOpenModal(!openModal)}
                />
                <MdOutlineWatchLater className="w-12 h-12 text-white_pormade my-3 cursor-pointer" onClick={() => {setHistoric(true)}}/>
                <MdOutlineAdminPanelSettings className="w-12 h-12 text-yellow my-3 cursor-pointer" onClick={() => setShow(!show)} />
            </div>
            <RxExit className="w-12 h-12 text-white_pormade cursor-pointer" onClick={() => navigate('/login')} />
            <Modal isOpen={openModal} closeModal={() => setOpenModal(!openModal)}>
                <CartItem/>
                <CartItem />
                <CartItem />
                <div className='flex w-10/12 mt-2 justify-end items-center'>
                    <h1 className='font-bold text-2xl'>Valor Total: R$ 302,58</h1>
                    <button className='text-white font-semibold text-xl w-44 rounded-xl h-10 bg-light_green mx-2'>Finalizar Compra</button>
                </div>
            </Modal>
            <aside className={`h-full flex-col items-center bg-black_modal fixed top-0 left-20 overflow-hidden border-r-4 border-solid border-light_green duration-200 block ${show ? 'w-2/12' : "w-0 border-none"}`}>
                <div className="w-full h-1/6  ">
                    <img src={image} className=" margin w-14  hover:cursor-pointer hover:w-16" onClick={() => setShow(!show)} />
                </div>
                <button className=" margin w-4/5 h-16 bg-light_green  rounded-lg font-bold text-2xl text-white mb-5" onClick={() => navigateAndCloseModal('/editarUsuarios')}>Usuários</button>
                <button className=" margin w-4/5 h-16 bg-light_green  rounded-lg font-bold text-2xl text-white" onClick={() => navigateAndCloseModal('/editarProdutos')}>Produtos</button>

            </aside>
        </div>
    )
}