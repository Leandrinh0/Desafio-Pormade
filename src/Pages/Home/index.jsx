import axios from "axios"
import { useEffect, useState } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MdOutlineShoppingCart, MdOutlineWatchLater } from "react-icons/md";
import { RxExit } from "react-icons/rx";

import logo from "../../assets/images/Vector.png"
import { Link } from "react-router-dom";
import CardProduct from "../../Components/CardProduct";


const Home = () => {

    const [productData, setProductData] = useState([])


    useEffect(() => {
      axios.get('192.168.155.6:3002/produtos/lista')
      .then(response => setProductData(response.data))
    },[])
  
    console.log(productData)

    
    return(
        <div className="w-full h-full flex justify-end items-center py-10">
            <div className='bg-black h-4/5 fixed top-0 left-0 p-3 flex flex-col justify-between border-4 border-r-light_green'>
            <div className='flex flex-col items-center'>
                <img src={logo} alt="Imagem do logo" className="w-14 h-12 my-3 cursor-pointer"/>
                <MdOutlineShoppingCart className="w-12 h-12 text-white_pormade my-3 cursor-pointer"/>
                <MdOutlineWatchLater className="w-12 h-12 text-white_pormade my-3 cursor-pointer"/>
            </div>
                <RxExit className="w-12 h-12 text-white_pormade cursor-pointer"/>
            </div>
            <div className="w-11/12 flex items-center flex-col bg-black rounded-3xl border-4 border-light_green mr-10">
                <div className="flex w-3/6">
                    <input placeholder='Pesquisar...' className="outline-none rounded-2xl pl-3 m-12 h-10 w-full border bg-black text-white_pormade  border-light_green text-xl"/>
                </div>
                <div className='flex flex-row justify-center flex-wrap w-10/12'>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                    <CardProduct/>
                </div>
            <footer className='flex justify-center my-4'>
                 <IoIosArrowBack className='w-9 h-9 text-white_pormade cursor-pointer'/>               
                <div>
                    <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>1</Link>
                    <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>2</Link>
                    <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>3</Link>
                    <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>...</Link>
                    <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>9</Link>
                </div>
                <IoIosArrowForward className='w-9 h-9 text-white_pormade cursor-pointer'/>
            </footer>
            </div>
        </div>
    )
}

export default Home