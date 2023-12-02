import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdOutlineShoppingCart, MdOutlineWatchLater, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";


import logo from "../../assets/images/Vector.png"
import adminLogo from "../../assets/images/adminlogo.png"
import { Link } from "react-router-dom";
import CardProduct from "../../Components/CardProduct";
import { AdminContext } from "../../Contexts/AdminContext";
import { MenuContext } from "../../Contexts/MenuContext";
import Modal from "../../Components/Modal";
import CartItem from "../../Components/CartItem";
import { FaSearch } from "react-icons/fa";


const Home = () => {

    const [productData, setProductData] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const array = [1]


    const { show } = useContext(AdminContext)
    const { setShow, setNewProduct, setNewUser, setRemove, setDeletar, setHistoric } = useContext(MenuContext)

    const showMenu = () => {
        setShow(true)
        setNewProduct(false)
        setNewUser(false)
        setRemove(false)
        setDeletar(false)
    }

    const showHistoric = () => {
        setHistoric(true)
    }

    const navigate = useNavigate()

    const exit = () => {
        return navigate('/login')
    }

    useEffect(() => {
        axios.get('192.168.155.6:3002/produtos/lista')
            .then(response => setProductData(response.data))
    }, [])

    console.log(productData)


    return (
        <div className="w-full h-full flex justify-end items-center py-10">

            <div className="w-11/12 flex items-center flex-col bg-black rounded-3xl border-4 border-light_green mr-10">
                <div className="flex justify-center w-3/6 h-full mt-8">
                    <div className='w-10/12 h-12 flex justify-around items-center bg-black_modal border-2 border-light_green rounded-3xl'>
                        <input placeholder='Pesquisar...' className='w-10/12 h-full outline-none text-white bg-black_modal text-lg' />
                        <FaSearch className='w-6 h-6 text-light_green' />
                    </div>
                </div>
                <div className='flex flex-row justify-center flex-wrap w-10/12'>
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
                <footer className='flex justify-center my-4'>
                    <IoIosArrowBack className='w-9 h-9 text-white_pormade cursor-pointer' />
                    <div>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>1</Link>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>2</Link>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>3</Link>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>...</Link>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>9</Link>
                    </div>
                    <IoIosArrowForward className='w-9 h-9 text-white_pormade cursor-pointer' />
                </footer>
            </div>
            <Modal isOpen={openModal} closeModal={() => setOpenModal(!openModal)}>
                {array.length > 0 ?
                    <>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <div className='flex w-4/5 mt-2 justify-end items-center'>
                            <h1 className='font-bold text-2xl'>Valor Total: R$ 302,58</h1>
                            <button className='text-white font-semibold text-xl w-44 rounded-xl h-10 bg-light_green mx-2'>Finalizar Compra</button>
                        </div>
                    </>
                    :
                    <div className=" w-11/12 h-5/6 bg-black_pormade rounded-xl">
                        <div className=" w-full h-1/12 text-center  text-white font-semibold text-6xl">Ops...</div>
                        <div className=" w-full h-1/5 text-center p-5 ">
                            <p className="text-cinza_fonte text-3xl font-semibold">Nada foi adicionado no</p>
                            <p className="text-cinza_fonte text-3xl font-semibold">seu carrinho ainda</p>
                        </div>
                        <div className="text-green_pormade underline text-medium font-bold w-full h-1/6 text-center cursor-pointer items-center" onClick={() => setOpenModal(!openModal)}>Adicionar Produtos</div>
                        <div className="text-center justify-center items-center w-full flex">
                        <MdOutlineRemoveShoppingCart className='text-white w-1/4 h-1/4'/>
                        </div>
                        
                    
                    </div>
                    
                }
            </Modal>
        </div>

    )
}

export default Home