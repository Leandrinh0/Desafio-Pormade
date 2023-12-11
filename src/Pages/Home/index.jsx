
import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom";

import CardProduct from "../../Components/CardProduct";

import { FaSearch } from "react-icons/fa";
import api from "../../http/api";
import Pagination from "../../Components/pagination";
import PaginationMobile from "../../Components/paginationMobile";
import { ItensCartContext } from "../../Contexts/ItensCartContex";



const Home = () => {

    const [productData, setProductData] = useState([])
    const [allProduts, setAllProducts] = useState([])
    const params = useParams()
    const {itensCart} = useContext(ItensCartContext)
    const [search, setSearch] = useState('')


    const fetchData = async () => {
        await api.get(`/produtos/lista?pagina=${(convertedParams-1)}&&itens=8`)
            .then(response => setProductData(response.data.products))

        await api.get('/produtos/lista')
            .then(response => setAllProducts(response.data.products))
    }

    useEffect(() =>{
        fetchData()
    }, [])

    const convertedParams = parseInt(params.id)
    


    // Filtro para manter os itens ativos ou não.
    var filterArray = []
    productData.forEach((i) => {
        itensCart.forEach((j) => {
            if(i.id === j.id){
                filterArray = [...filterArray, j]
            }
        })
    })

    const lowerBusca = search.toLowerCase()

    const productsFilter = productData.filter((item) => item.name.toLowerCase().includes(lowerBusca))

    return (
        <div className="w-full h-full flex flex-col justify-center items-center py-10 almostCellphone:mt-12">

            <div 
                className="w-11/12 flex items-center flex-col bg-black rounded-3xl border-4 border-light_green ml-20
                tablet:w-9/12 tablet:ml-20 almostCellphone:ml-0 almostCellphone:border-none"
            >
                <div className="flex justify-center w-3/6 h-full mt-8 almostCellphone:hidden">
                    <div className='w-10/12 h-12 flex justify-around items-center bg-black_modal border-2 border-light_green rounded-3xl '>
                        <input 
                            placeholder='Pesquisar...' 
                            className='w-10/12 h-full outline-none text-white bg-black_modal text-lg rounded-3xl' 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FaSearch className='w-6 h-6 text-light_green' />
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center flex-wrap w-10/12 almostCellphone:flex-col almostCellphone:w-full almostCellphone:p-2'>
                    {productsFilter.map((item) => {
                        var filter = filterArray.filter((i) => {
                            return i.id === item.id
                        })
                        if(filter.length === 1 ){
                            return <CardProduct description={item.description} name={item.name} price={item.value} key={item.id} favorite={item.favorite} id={item.id} cartActive={true}/>
                        } else {
                            return <CardProduct description={item.description} name={item.name} price={item.value} key={item.id} favorite={item.favorite} id={item.id} cartActive={false}/>
                        }
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