import axios from "axios"
import { useEffect, useState, useContext } from "react"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";


import { Link } from "react-router-dom";
import CardProduct from "../../Components/CardProduct";
import { AdminContext } from "../../Contexts/AdminContext";
import { MenuContext } from "../../Contexts/MenuContext";
import { FaSearch } from "react-icons/fa";
import api from "../../http/api";



const Home = () => {

    const [productData, setProductData] = useState([])
    const [allProduts, setAllProducts] = useState([])


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
    const params = useParams()

    const exit = () => {
        return navigate('/login')
    }

    const fetchData = async () => {
        await api.get(`/produtos/lista?pagina=${(convertedParams-1)}&&itens=8`)
            .then(response => setProductData(response.data.products))

        await api.get('/produtos/lista')
            .then(response => setAllProducts(response.data.products))
    }

    useEffect(() =>{
        fetchData()
    }, [])

    console.log(productData)

    const convertedParams = parseInt(params.id)
    const [firstNav, setFirstNav] = useState(convertedParams)
    const [secondNav, setSecondNav] = useState(convertedParams+1)
    const [thirdNav, setThirdNav] = useState(convertedParams+2)


    const nextPage = () => {
        if (parseInt(params.id) < Math.round(allProduts.length/8)) {
            navigate(`/home/${convertedParams+1}`)
            api.get(`/produtos/lista?pagina=${(convertedParams)}&&itens=8`)
            .then(response => setProductData(response.data.products))
        }
    }

    const previousPage = () => {
        if (parseInt(params.id) > 1) {
            navigate(`/home/${convertedParams-1}`)
            api.get(`/produtos/lista?pagina=${(convertedParams-2)}&&itens=8`)
            .then(response => setProductData(response.data.products))
        }
    }

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
                    {productData.map((item) => {
                        return <CardProduct description={item.description} name={item.name} price={item.value} key={item.id}/>
                    })}
                </div>
                <footer className='flex justify-center my-4 tablet:hidden almostCellphone:hidden'>
                    <IoIosArrowBack 
                        className='w-9 h-9 text-white_pormade cursor-pointer' 
                        onClick={() => previousPage()}
                    />
                    <div>
                        <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${firstNav === parseInt(params.id)? "bg-light_green" : ""}`}>{firstNav}</Link>
                        <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${secondNav === parseInt(params.id)? "bg-light_green" : ""}`} onClick={() => nextPage()} >{secondNav}</Link>
                        <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${thirdNav === parseInt(params.id)? "bg-light_green" : ""}`}>{thirdNav}</Link>
                        <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2`}>...</Link>
                        <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 `}>{Math.round(allProduts.length/8)}</Link>
                    </div>
                    <IoIosArrowForward 
                        className='w-9 h-9 text-white_pormade cursor-pointer' 
                        onClick={() => nextPage()}
                    />
                </footer>
            </div>

            <footer className=' justify-center mt-4 tablet:ml-16 hidden tablet:flex almostCellphone:flex almostCellphone:ml-0'>
                    <IoIosArrowBack className='w-9 h-9 text-white_pormade cursor-pointer' />
                    <div>
                        <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2`}>1</Link>
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