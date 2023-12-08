
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";

import CardProduct from "../../Components/CardProduct";

import { FaSearch } from "react-icons/fa";
import api from "../../http/api";
import { AuthenticateContext } from "../../Contexts/Authenticate";
import Pagination from "../../Components/pagination";
import PaginationMobile from "../../Components/paginationMobile";



const Home = () => {

    const [productData, setProductData] = useState([])
    const [allProduts, setAllProducts] = useState([])
    const {user} = useContext(AuthenticateContext)
    const params = useParams()


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

    

    console.log(user)
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
                        return <CardProduct description={item.description} name={item.name} price={item.value} key={item.id} favorite={item.favorite}/>
                    })}
                </div>
                <Pagination 
                    convertedParams={convertedParams} params={params} 
                    fetchData={fetchData} 
                    ItemData={productData} setItemData={setProductData} 
                    allItems={allProduts} setAllItems={setAllProducts}
                    urlNavigate={"home"} urlRequest={"produtos"}
                />
            </div>
            <PaginationMobile
                convertedParams={convertedParams} params={params} 
                fetchData={fetchData} 
                ItemData={productData} setItemData={setProductData} 
                allItems={allProduts} setAllItems={setAllProducts}
                urlNavigate={"home"} urlRequest={"produtos"}
            />

        </div>

    )
}

export default Home