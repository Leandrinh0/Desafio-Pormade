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
import { LuMenu } from "react-icons/lu";


const Home = () => {

    const [productData, setProductData] = useState([])


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
        <div className="w-full h-full flex flex-col justify-center items-center py-10 almostCellphone:mt-12">

            <div 
                className="w-11/12 flex items-center flex-col bg-black rounded-3xl border-4 border-light_green ml-20
                tablet:w-9/12 tablet:ml-20 almostCellphone:ml-0 almostCellphone:border-none"
            >
                <div className="flex justify-center w-3/6 h-full mt-8 almostCellphone:hidden">
                    <div className='w-10/12 h-12 flex justify-around items-center bg-black_modal border-2 border-light_green rounded-3xl '>
                        <input placeholder='Pesquisar...' className='w-10/12 h-full outline-none text-white bg-black_modal text-lg rounded-3xl' />
                        <FaSearch className='w-6 h-6 text-light_green' />
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center flex-wrap w-10/12 almostCellphone:flex-col almostCellphone:w-full almostCellphone:p-2'>
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
                <footer className='flex justify-center my-4 almostCellphone:hidden'>
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

            <footer className=' justify-center mt-4 hidden almostCellphone:flex'>
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

    )
}

export default Home