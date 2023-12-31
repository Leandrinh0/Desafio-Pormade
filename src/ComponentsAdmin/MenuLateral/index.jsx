import { MdOutlineAdminPanelSettings, MdOutlineRemoveShoppingCart, MdOutlineShoppingCart, MdOutlineWatchLater } from "react-icons/md"
import logo from "../../assets/images/Vector.png"
import { RxExit } from "react-icons/rx"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MenuContext } from "../../Contexts/MenuContext"
import image from "../../assets/images/seta.png"
import Modal from "../../Components/Modal"
import CartItem from "../../Components/CartItem"
import { LuMenu } from "react-icons/lu"
import { FaSearch } from "react-icons/fa"
import { IoMdClose } from "react-icons/io";
import { AuthenticateContext } from "../../Contexts/Authenticate"
import { ItensCartContext } from "../../Contexts/ItensCartContex"


export default function LateralMenu() {
    const [openModal, setOpenModal] = useState(false)
    const { show, setShow } = useContext(MenuContext)
    const {setHistoric} = useContext(MenuContext)
    const [lateralMenu, setLateralMenu] = useState(false)
    const navigate = useNavigate()
    const {user, logOut} = useContext(AuthenticateContext)
    const {itensCart} = useContext(ItensCartContext)

    const navigateAndCloseModal = (url, array, setArray) => {
        setArray(!array)
        navigate(url)
        setLateralMenu(!lateralMenu)
    }


    const openCart = () => {
        setShow(false)
        setOpenModal(!openModal)
    }

    const goHome = () => {
        navigate('/home/1')
        setShow(false)
        setLateralMenu(!lateralMenu)

    }

    const openHitoric = () => {
        setHistoric(true)
        setShow(false)
    }

    const addProducts = () => {
        navigate('/home/1')
        setOpenModal(!openModal)
    }



    return (
        <>
            <div className={`hidden fixed top-0 h-20 w-full justify-between items-center bg-black_pormade almostCellphone:flex`}>
                    <LuMenu
                        className='text-white w-12 h-12 ml-3'
                        onClick={() => setLateralMenu(!lateralMenu)}
                    />
                <div className='w-9/12 h-12 flex justify-around items-center bg-black_modal rounded-lg mr-4'>
                    <input placeholder='Pesquisar...' className='w-10/12 h-full outline-none text-white bg-black_modal text-lg rounded-3xl' />
                    <FaSearch className='w-6 h-6 text-light_green' />
                </div>
            </div>

        <div 
            className={`bg-black_modal fixed top-0 left-0 p-3 flex flex-col justify-between border-r-2 border-r-light_green h-full
            tablet:h-full almostCellphone:border-t almostCellphone:border-light_green almostCellphone:w-20
            ${lateralMenu? "almostCellphone:flex" : "almostCellphone:hidden"} ${user? "" : "hidden"}`}
        >
            <div className='flex flex-col items-center justify-center'>
                <IoMdClose
                        className=' hidden text-white w-12 h-12 almostCellphone:flex'
                        onClick={() => setLateralMenu(!lateralMenu)}
                    /> :
                <img src={logo} alt="Imagem do logo" className="w-14 h-12 my-3 cursor-pointer"
                onClick={goHome} />
                <MdOutlineShoppingCart
                    className="w-12 h-12 text-white_pormade my-3 cursor-pointer"
                    onClick={openCart}
                />
                <MdOutlineWatchLater className="w-12 h-12 text-white_pormade my-3 cursor-pointer" onClick={openHitoric}/>
                <MdOutlineAdminPanelSettings className={`w-12 h-12 text-yellow my-3 cursor-pointer ${user && user.admin === true? "" : "hidden"}`} onClick={() => setShow(!show)} />
            </div>
            <RxExit 
                className="w-12 h-12 text-white_pormade cursor-pointer almostCellphone:fixed almostCellphone:bottom-6"
                onClick={() => logOut()}
            />

                {/* Modal do carrinho */}
                <Modal isOpen={openModal} closeModal={() => setOpenModal(!openModal)}>
                    {itensCart.length > 0 ?
                        <>
                            {itensCart.map((item) => {
                                return (
                                    <CartItem name={item.name} description={item.description} value={item.value} id={item.id} key={item.id}/>
                                )
                            })}
                            
                        </>
                        :
                        <div className=" w-11/12 h-[93%] p-3 bg-black_pormade rounded-xl
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
                                >Nada foi adicionado no</p>
                                <p className="text-cinza_fonte text-3xl font-semibold
                                    almostCellphone:text-lg
                                "
                                >seu carrinho ainda</p>
                            </div>
                            <div className="text-green_pormade underline text-xl font-bold w-full h-1/6 text-center cursor-pointer items-center
                                almostCellphone:hidden
                            " onClick={addProducts}>Adicionar Produtos</div>
                            <div className="text-center justify-center items-center w-full flex ">
                                <MdOutlineRemoveShoppingCart className='text-white w-2/6 h-2/6
                                    tablet:w-1/2 tablet:h-1/2
                                '
                                 />
                            </div>
                        </div>
                    }
                </Modal>

            
            <aside 
                className={`h-full flex-col items-center bg-black_modal fixed top-0 left-20 overflow-hidden border-r-4 border-solid
              border-light_green duration-200 block ${show ? 'w-2/12' : "w-0 border-none"} ${show ? 'tablet:w-5/12' : "w-0 border-none"} almostCellphone:text-sm ${show ? 'almostCellphone:w-10/12' : "w-0 border-none"}`
            }>
                <div className="w-full h-1/6  ">
                    <img src={image} className=" ml-[9%] w-14  hover:cursor-pointer hover:w-16" onClick={() => setShow(!show)} />
                </div>
                <button className=" ml-[9%] w-4/5 h-16 bg-light_green  hover:bg-green_button rounded-lg font-bold text-2xl text-white mb-5" onClick={() => navigateAndCloseModal('/editarUsuarios/1', show, setShow)}>Usuários</button>
                <button className=" ml-[9%] w-4/5 h-16 bg-light_green  hover:bg-green_button rounded-lg font-bold text-2xl text-white" onClick={() => navigateAndCloseModal('/editarProdutos/1',show, setShow)}>Produtos</button>
            </aside>
        </div>

        </>

    )
}