import { FaSearch, FaPlus } from "react-icons/fa";
import '../../index.css'
import { MdDeleteForever } from "react-icons/md";
import { ImPencil } from "react-icons/im";
import ModalDelete from "../../ComponentsAdmin/ModalDelete/indes";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../Contexts/MenuContext";
import { CgList } from "react-icons/cg";
import ModalEditProducts from "../../ComponentsAdmin/ModalEditProducts";
import { useParams } from "react-router-dom";
import ItemTable from "../../Components/ItemTable(cellphone)";
import api from "../../http/api";
import ModalNewProduct from "../../ComponentsAdmin/ModalNewProduct";
import Pagination from "../../Components/pagination";
import PaginationMobile from "../../Components/paginationMobile";
import { AuthenticateContext } from "../../Contexts/Authenticate";

export default function EditProducts() {

    const { deletar, setDeletar } = useContext(MenuContext)
    const { newProduct, setNewProduct } = useContext(MenuContext)
    const [openEditForm, setOpenEditForm] = useState(false)
    const {user} = useContext(AuthenticateContext)
    
    const params = useParams()
    const [allProduts, setAllProducts] = useState([])

    const [productData, setProductData] = useState([])

    const fetchData = (async() => {
        await api.get(`/produtos/lista?pagina=${params.id-1}&&itens=8`)
            .then(response => setProductData(response.data.products))
            
        await api.get('/produtos/lista')
        .then(response => setAllProducts(response.data.products))
    })

    useEffect(() => {
        fetchData()
    }, [])

    const convertedParams = parseInt(params.id)
    const [search, setSearch] = useState('')

    const [editName, setEditName] = useState('')
    const [editValue, setEditValue] = useState('')
    const [editDescription, setEditDescription] = useState('')
    const [editFavorite, setEditFavorite] = useState('')
    const [id, setId] = useState()


    function AddInfoEditForm(item) {
        setOpenEditForm(!openEditForm)
        setEditName(item.name)
        setEditValue(item.value)
        setEditDescription(item.description)
        setEditFavorite(item.favorite)
        setId(item.id)
    }
    
    function addIdAndDelete(item) {
        setId(item.id)
        setDeletar(!deletar)
    }

    const close = async () => {
        await api.delete("produtos", {
            deletorCpf:"80034389938",
            productId:parseInt(id)
        })
        .then(() => fetchData())
        setDeletar(!deletar)
    }



    const lowerSearch = search.toLowerCase()
    const filterProducts = productData.filter((item) => item.name.toLowerCase().startsWith(lowerSearch))

    if(user.admin) return (
        <div className='w-full h-full flex flex-col items-center'>
            <div className='flex w-full h-14 justify-around mt-6 '>
                <button
                    className='text-white_pormade bg-light_green  hover:bg-green_button rounded-lg w-1/6 h-9 text-2xl flex justify-center items-center tablet:w-1/5 tablet:ml-8'
                    onClick={() => setNewProduct(!newProduct)}
                >
                    <div className='flex justify-center w-full items-center'>
                        <FaPlus className='text-white mr-4' />
                        <p>Cadastrar</p>
                    </div>
                </button>
                <div className='w-2/6 h-2/3 flex justify-evenly items-center bg-black_modal border-2 border-light_green rounded-md tablet:w-2/5'>
                    <input 
                        placeholder='Pesquisar...' 
                        className='w-10/12 h-full outline-none text-white bg-black_modal text-lg' 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch className='w-6 h-6 text-light_green' />
                </div>
            </div>
            <div className='w-10/12 bg-black h-5/6 border-2 border-light_green rounded-2xl flex flex-col justify-between tablet:ml-14 almostCellphone:ml-0 
                almostCellphone:w-11/12 almostCellphone:border-none almostCellphone:p-2 almostCellphone:justify-start almostCellphone:h-full'>
                <table className='w-full text-center mb-48 almostCellphone:hidden'>
                    <thead className='bg-light_green rounded-tl-lg rounded-tr-3xl'>
                        <tr>
                            <td className='rounded-tl-lg border-r-2 border-black text-bold text-2xl'>ID</td>
                            <td className='border-r-2 border-black text-bold text-2xl'>Produto</td>
                            <td className='border-r-2 border-black text-bold text-2xl'>Preço</td>
                            <td className='rounded-tr-lg text-bold text-2xl'>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                            {filterProducts.map((item) => {
                                return (
                                    <tr>
                                        <td className='border-r border-t border-b border-light_green text-2xl'>{item.id}</td>
                                        <td className='border border-light_green text-2xl py-2'>{item.name}</td>
                                        <td className='border border-light_green text-2xl py-2'>R${item.value}</td>
                                        <td
                                            className='border border-light_green text-2xl py-2'
                                        >
                                            <div className='flex justify-between items-center mx-3'>
                                                <div className='flex justify-around w-2/6 items-center tablet:w-3/5 tablet:justify-between'>
                                                    <CgList className='w-10 h-10'/>
                                                    <ImPencil 
                                                        className='w-8 h-8 cursor-pointer tablet:mr-1'
                                                        onClick={() => AddInfoEditForm(item)}
                                                    />
                                                </div>
                                                <MdDeleteForever 
                                                    className='w-10 h-10 text-red-700 cursor-pointer'
                                                    onClick={() => addIdAndDelete(item)}
                                                />
                                            </div>
                                        </td>
                                        
                                    </tr>
                                    
                                )
                            })}
                    </tbody>
                </table>
                <Pagination 
                    convertedParams={convertedParams} params={params} 
                    fetchData={fetchData} 
                    ItemData={productData} setItemData={setProductData} 
                    allItems={allProduts} setAllItems={setAllProducts}
                    urlNavigate={"editarProdutos"} urlRequest={"produtos"}
                />

                {/* Mobile */}
                <div className='hidden justify-center p-2 almostCellphone:flex almostCellphone:h-full'>
                    <button
                        className='text-white_pormade bg-light_green rounded-xl  h-10 text-2xl flex justify-center items-center w-full'
                        onClick={() => setNewProduct(!newProduct)}
                    >
                        <div className='flex justify-center w-full items-center'>
                            <FaPlus className='text-white mr-4' />
                            <p>Cadastrar</p>
                        </div>
                    </button>
                </div>
                {productData.map((item) => {
                    return(
                        <ItemTable 
                            secondRowItem={"Preço"} secondRowValue={"R$10,00"} 
                            openModalProp={openEditForm} setOpenModalProp={setOpenEditForm} 
                            name={item.name} value={item.value} id={item.id}
                            item={item}
                            editItem={() => AddInfoEditForm(item)}
                        />
                    )
                })}
            </div>

            {/* Celular -> */}
            <PaginationMobile
                convertedParams={convertedParams} params={params} 
                fetchData={fetchData} 
                ItemData={productData} setItemData={setProductData} 
                allItems={allProduts} setAllItems={setAllProducts}
                urlNavigate={"editarProdutos"} urlRequest={"produtos"}
            />



            <ModalEditProducts 
                modal={openEditForm} setModal={setOpenEditForm} 
                name={editName} setName={setEditName} value={editValue} 
                setValue={setEditValue} description={editDescription} 
                favorite={editFavorite} setFavorite={setEditFavorite}
                setDescription={setEditDescription} id={parseInt(id)}
                fetchData={fetchData}
            />
            <ModalDelete word='produto' close={() => close()}/>

            <ModalNewProduct fetchData={fetchData}/>

        </div>
    )
    return null
}